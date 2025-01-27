import {FavourtiesActions} from "../actions/favouritesActions";
import { EntityType } from "../../data/type";

type IFavouritesStore = {
    [key in EntityType]: {
        [key: string]: boolean
    }
}

interface IToggle {
    type: FavourtiesActions.TOGGLE ,
    payload: {
        entity: EntityType,
        name: string
    }
}

function favouritesReducer(state: IFavouritesStore = {pokemon: {}, item: {}}, action: IToggle) {
    switch (action.type) {
        case FavourtiesActions.TOGGLE:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    [action.payload.name]: !state[action.payload.entity][action.payload.name]
                }
            }
        default:
            return state
    }
}

export default favouritesReducer;