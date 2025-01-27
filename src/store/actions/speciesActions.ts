import {getSpecies} from "../../data/api";

export enum SpeciesActions {
    GETSPECIES = 'species/getSpecies',
    SETSPECIESDATA = 'species/setSpeciesData',
    SETERROR = 'species/setError',
}

const loadSpecies = () => ({
    type: SpeciesActions.GETSPECIES,
})

export const setSpeciesData = (name: string, res: any) => ({
    type: SpeciesActions.SETSPECIESDATA,
    payload: {
        name,
        data: res
    }
})

export const setError = () => ({
    type: SpeciesActions.SETERROR,
})

export const requestGetSpecies = (name: string) => {
    return async (dispatch: any) => {
        dispatch(loadSpecies())
        try {
            const res = await getSpecies(name)
            dispatch(setSpeciesData(name, res))
        } catch {
            dispatch(setError());
        }
    }
}