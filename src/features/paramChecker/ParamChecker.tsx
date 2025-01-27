import React from "react";
import {useParams} from "react-router-dom";
import List from "../list/List";
import Display from "../display/Display";

const ParamsChecker: React.FC = () => {
    const params = useParams<'category' | 'name'>()
    const isCategoryEntityType = params.category === "item" || params.category === "pokemon"
    if(params.category === "pokemon" && params.name) return <Display category={params.category} name={params.name} />
    if(isCategoryEntityType) return <List category={params.category} />
    return null;
}

export default ParamsChecker;