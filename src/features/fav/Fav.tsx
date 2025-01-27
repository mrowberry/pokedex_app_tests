import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import styled from "styled-components";
import React from "react";
import {EntityType} from "../../data/type";
import useFavourite from "../../hooks/useFavourite";

interface IParamProps {
    category: EntityType,
    name: string
}


const FavContainer = styled.div`
  > * {
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 35px;
    height: 35px;
    z-index: 4;
    cursor: pointer;
  }
`;

export const Fav: React.FC<IParamProps> = (props) => {
    const favourite = useFavourite(props.category, props.name)
    return (
        <FavContainer>
            {favourite.value ?
                <AiFillHeart onClick={favourite.toggle} fill={"#AB3433"}/>
                :
                <AiOutlineHeart onClick={favourite.toggle}/>
            }
        </FavContainer>
    )
}

export default Fav;