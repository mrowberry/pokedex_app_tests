import {EntityType} from "../../data/type";

export enum FavourtiesActions {
    TOGGLE = 'favourites/toggle',
}

export const toggle = (entity: EntityType ,name: string) => ({
    type: FavourtiesActions.TOGGLE,
    payload: {
        entity: entity,
        name: name
    }
});