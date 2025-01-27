import React, {useEffect} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Fav from '../fav/Fav'
import typeColors from "../../data/typeStrings";
import Bounce from "../bounce/Bounce";
import {EntityType, Status} from "../../data/type";
import useEntity from "../../hooks/useEntity";

interface IComponentProps {
    entityName: string;
    category: EntityType;
}

interface ITypes {
    key: number;
    types?: string[];
}

const ListEntityContainer =  styled.div<ITypes>`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
  border-radius: 10px;

  background: ${props => {
    if(!props.types) return 'none'
    if(props.types.length === 1) {
      return typeColors[props.types[0]]
    } else {
      return `linear-gradient(145deg, ${typeColors[props.types[0]]}, ${typeColors[props.types[1]]})`
    }
  }}
`;

const ListEntityHolder = styled.div`
  color: floralwhite;
  width: 100%;
  position: relative;
  padding-top: 100%;
  border-radius: 10px;
`;

const Inset = styled.div`
  position: absolute;
  inset: 0;
`;

const ListEntity = styled.div`
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 10%) 0 10px 20px 2px;
  border: 1px solid black;
  padding: 1rem;
  position: absolute;
  inset: 0;
;
`;

const Name = styled.p`
  color: #222;
  width: fit-content;
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -0%);
  z-index: 3;
  pointer-events: none;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 4px;
  padding: 5px 10px;
`

const Icon = styled.img<{ category?: EntityType }>`
  width: 100%;
`;

const Overlay = styled.img<{ category: EntityType }>`
  width: 200%;
  position: absolute;
  inset: -50% 0 0 -50%;
  transform: rotate(180deg);
  z-index: 1;
  filter: blur(50px);
`;

const Number = styled.p`
  width: fit-content;
  position: absolute;
  bottom: 5%;
  left: 5%;
  z-index: 1;
  font-size: 18px;
  font-weight: 300;
  color: black;
  font-style: italic;
`;

const StyledBounce = styled.div<{category: EntityType}>`
  width: ${props => props.category !== "pokemon" ? "50%" : "100%"};
  font-size: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: filter 0.2s ease 0s;
`;

const Entity: React.FC<IComponentProps> = (props) => {
    const entity = useEntity(props.category, props.entityName);

    useEffect(() => {
        if(!entity.value && entity.loading !== Status.FETCHING) entity.getEntityData();
    }, [])

    if(!entity.value || entity.loading === Status.FETCHING) {
        return (
            <ListEntityHolder>
                <Inset>
                    <ListEntity>
                        <p>Loading</p>
                    </ListEntity>
                </Inset>
            </ListEntityHolder>
        );
    }

    const displayName = entity.value.name.replace(/-/g, " ");
    const displayNumber = ('00' + entity.value.id).slice(-3)

    if(props.category !== "pokemon") {
        return (
            <ListEntityContainer key={entity.value.id}>
                <Inset>
                    <ListEntity>
                        <Name>{displayName}</Name>
                        <StyledBounce category={props.category}>
                            <Icon src={entity.value.sprite} alt={entity.value.name}/>
                        </StyledBounce>
                        <Overlay category={props.category} src={entity.value.sprite} alt={entity.value.name}/>
                    </ListEntity>
                </Inset>
                <Fav
                    category={props.category}
                    name={entity.value.name}
                />
            </ListEntityContainer>
        )
    }


    const types: string[] = [];
    if("types" in entity.value) {
        entity.value.types.forEach(type => types.push(type.type.name));
    }

    return (
        <ListEntityContainer types={types}  key={entity.value.id}>
            <NavLink to={`/${[props.category]}/${entity.value.name}`}>
                <Inset>
                    <ListEntity>
                        <Name>{displayName}</Name>
                        <StyledBounce category={props.category}>
                            <Bounce>
                                <Icon category={props.category} src={entity.value.sprite} alt={entity.value.name}/>
                            </Bounce>
                        </StyledBounce>
                        <Number>#{displayNumber}</Number>
                    </ListEntity>
                </Inset>
            </NavLink>
            <Fav
                category={props.category}
                name={entity.value.name}
            />
        </ListEntityContainer>
    )
}

export default Entity;
