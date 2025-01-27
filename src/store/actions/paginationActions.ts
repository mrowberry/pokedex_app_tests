import {getEntityList} from "../../data/api";
import {EntityType} from "../../data/type";
import {INextPage, ISetData, ISetError} from "../reducers/paginationReducer";

export enum PaginationActions {
    NEXTPAGE = 'pagination/nextPage',
    SETDATA = 'pagination/setData',
    SETERROR = 'pagination/setError',
}

export const nextPage = (entity: EntityType):INextPage => ({
    type: PaginationActions.NEXTPAGE,
    payload: {
        entity,
    }
});

export const setData = (entity: EntityType, offset: number, data: string[], finishedLoading: boolean):ISetData => ({
    type: PaginationActions.SETDATA,
    payload: {
        entity,
        offset,
        list: data,
        finishedLoading
    }
});

export const setError = ():ISetError => ({
    type: PaginationActions.SETERROR
});

export const getNextPage = (entity: EntityType) => {
    return async (dispatch: any, getState: any) => {
        const state = getState()
        dispatch(nextPage(entity))
        try {
            const res = await getEntityList(entity, state.pagination[entity].offset)
            const offset = state.pagination[entity].offset + 30
            const finishedLoading = res.length < 30
            dispatch(setData(entity, offset, res, finishedLoading));
        } catch {
            dispatch(setError());
        }
    }
}