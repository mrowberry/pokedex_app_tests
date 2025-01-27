import {EntityType} from "../../data/type";
import {getEntity} from "../../data/api";

export enum EntityActions {
    GETENTITY = 'entity/getEntity',
    SETENTITY = 'entity/setEntity',
    SETERROR = 'entity/setError',
}

export const loadEntity = (entity: EntityType, name: string) => ({
    type: EntityActions.GETENTITY,
    payload: {
        entity,
        name
    }
})

export const setEntity = (entity: EntityType, name: string, res: {}) => ({
    type: EntityActions.SETENTITY,
    payload: {
        entity,
        name,
        data: res
    }
})

export const setError = (entity: EntityType, name: string) => ({
    type: EntityActions.SETERROR,
    payload: {
        entity,
        name
    }
})

export const requestGetEntity = (entity: EntityType, name: string) => {
    return async (dispatch: any) => {
        dispatch(loadEntity(entity, name))
        try {
            const res = await getEntity(entity, name)
            dispatch(setEntity(entity, name, res))
        } catch {
            dispatch(setError(entity, name));
        }
    }
}