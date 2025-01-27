import {PaginationActions} from "../actions/paginationActions";
import {EntityType, Status} from "../../data/type";

type IPaginationStore = {
    [key in EntityType]: {
        offset: number,
        status: Status,
        list: string[],
        finishedLoading: boolean
    }
}

export interface INextPage {
    type: PaginationActions.NEXTPAGE,
    payload: {
        entity: EntityType,
    }
}

export interface ISetData {
    type: PaginationActions.SETDATA,
    payload: {
        entity: EntityType,
        offset: number,
        list: string[],
        finishedLoading: boolean
    }
}

export interface ISetError {
    type: PaginationActions.SETERROR,
}

type Action = INextPage | ISetData

const entityState = {
    offset: 0,
    status: Status.IDLE,
    list: [],
    finishedLoading: false
}

function paginationReducer(state: IPaginationStore = { pokemon: entityState, item: entityState}, action: Action) {
    switch (action.type) {
        case PaginationActions.NEXTPAGE:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    status: Status.FETCHING
                }
            }
        case PaginationActions.SETDATA:
            return {
                ...state,
                [action.payload.entity]: {
                    ...state[action.payload.entity],
                    status: Status.SUCCESS,
                    offset: action.payload.offset,
                    list: [
                        ...state[action.payload.entity].list,
                        ...action.payload.list
                    ],
                    finishedLoading: action.payload.finishedLoading
                }
            }
        default:
            return state
    }
}

export default paginationReducer;