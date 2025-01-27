import useSpecies from "./useSpecies";
import useEntity from "./useEntity";
import {Status} from "../data/type";
import {useEffect} from "react";

const usePokemon = (name: string) => {
    const species = useSpecies(name);
    const entity = useEntity('pokemon', name);

    useEffect(() => {
        if(!species.value && entity.loading !== Status.FETCHING) species.getNewSpecies()
        if(!entity.value && species.loading !== Status.FETCHING) entity.getEntityData()
    }, [])

    const speciesLoading = species.loading === Status.FETCHING || species.loading === Status.IDLE;
    const entityLoading = entity.loading === Status.FETCHING || entity.loading === Status.IDLE;

    return {
        loading: speciesLoading || entityLoading,
        getNewSpecies: species.getNewSpecies,
        getEntityData: entity.getEntityData,
        entity,
        species
    }
}

export default usePokemon;