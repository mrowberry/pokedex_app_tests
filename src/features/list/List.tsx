import Entity from "../entity/Entity";
import React, {useEffect} from "react";
import {useInView} from 'react-intersection-observer';
import styled from "styled-components";
import {EntityType, Status} from "../../data/type";
import usePagination from "../../hooks/usePagination";

interface IParamProps {
    category: EntityType
}

const GridView = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  gap: 1em;
`;

const List: React.FC<IParamProps> = (props) => {
    const pagination = usePagination(props.category)

    const { ref, inView } = useInView({
        threshold: 0,
        trackVisibility: true,
        delay: 100,
    });

    useEffect(() => {
        if(inView && pagination.value[props.category].status !== Status.FETCHING && !pagination.value[props.category].finishedLoading) {
            pagination.getNextPage()
        }
    }, [inView, pagination.value[props.category].status])

    return (
        <GridView>
            {pagination.value[props.category].list.map((dexEntityName:string) => {
                return (
                    <Entity
                        category={props.category}
                        entityName={dexEntityName}
                    />
                )
            })}

            {/*Insert loading icon here*/}
            {/*{context[props.category].loadingList && <h1>Loading</h1>}*/}
            <span ref={ref} style={{"width":"100%", "display":"block"}} />
        </GridView>
    )
}

export default List;