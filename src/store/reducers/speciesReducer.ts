import {EntityType, ITransformedSpecies, Status} from "../../data/type";
import {SpeciesActions} from "../actions/speciesActions";

interface ISpeciesStore {
    status: Status,
    items: {
        [key: string]: ITransformedSpecies
    }
}

export interface IGetSpecies {
    type: SpeciesActions.GETSPECIES,
    payload: {
        entity: EntityType,
    }
}

export interface ISetSpeciesData {
    type: SpeciesActions.SETSPECIESDATA,
    payload: {
        entity: EntityType,
        name: string,
        data: ITransformedSpecies
    }
}

export interface ISetError {
    type: SpeciesActions.SETERROR,
    payload: {
        entity: EntityType,
    }
}

type Action = IGetSpecies | ISetSpeciesData | ISetError

const SpeciesStore = {
    status: Status.IDLE,
    items: {}
}

function speciesReducer(state: ISpeciesStore = SpeciesStore, action: Action): ISpeciesStore {
    switch (action.type) {
        case SpeciesActions.GETSPECIES:
            return {
                ...state,
                status: Status.FETCHING
            }
        case SpeciesActions.SETSPECIESDATA:
            return {
                ...state,
                status: Status.SUCCESS,
                items: {
                    ...state.items,
                    [action.payload.name]: action.payload.data
                }
            }
        case SpeciesActions.SETERROR:
            return {
                ...state,
                status: Status.ERROR,
            }
        default:
            return state
    }
}

export default speciesReducer;