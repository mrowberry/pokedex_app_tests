import {EntityType, IItem, IPokemon, Status} from "../../data/type";
import { EntityActions } from "../actions/entityActions";

interface IGetEntity {
    type: EntityActions.GETENTITY,
    payload: {
        entity: EntityType,
        name: string
    }
}

interface ISetEntity {
    type: EntityActions.SETENTITY,
    payload: {
        entity: EntityType,
        name: string,
        data: {}
    }
}

export interface ISetError {
    type: EntityActions.SETERROR,
    payload: {
        entity: EntityType,
        name: string
    }
}

type Action = IGetEntity | ISetEntity | ISetError;

type IEntityStore = {
    pokemon: {
        items: {
            [key: string]: IPokemon
        }
        status: Status,
        loading: {
            [key: string]: Status
        }
    },
    item: {
        items: {
            [key: string]: IItem
        }
        status: Status,
        loading: {
            [key: string]: Status
        }
    },
}

const initialState = {
    pokemon: {
        items: {},
        status: Status.IDLE,
        loading: {}
    },
    item: {
        items: {},
        status: Status.IDLE,
        loading: {}
    }
}

function entityReducer(state: IEntityStore = initialState, action: Action) {
    switch (action.type) {
        case EntityActions.GETENTITY:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    loading: {
                        ...state[action.payload.entity].loading,
                        [action.payload.name]: Status.FETCHING
                    },
                    status: Status.FETCHING
                }
            }
        case EntityActions.SETENTITY:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    items: {
                        ...state[action.payload.entity].items,
                        [action.payload.name]: action.payload.data,
                    },
                    loading: {
                        ...state[action.payload.entity].loading,
                        [action.payload.name]: Status.SUCCESS
                    },
                    status: Status.SUCCESS,
                }
            }
        case EntityActions.SETERROR:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    loading: {
                        ...state[action.payload.entity].loading,
                        [action.payload.name]: Status.ERROR
                    },
                    status: Status.ERROR
                }
            };
        default:
            return state
    }
}

export default entityReducer;