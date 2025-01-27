import {createSelector} from "reselect";
import {RootState} from "../store";
import {EntityType} from "../../data/type";

interface selectorParams {
    entity: EntityType,
    name: string
}

const selectEntityValue = (state: RootState, { entity, name }: selectorParams) => state.entity[entity].items[name];
const selectEntityLoading = (state: RootState, { entity, name }: selectorParams) => state.entity[entity].loading[name];

const entitySelector = createSelector(
    [selectEntityLoading, selectEntityValue],
    (loading, value) => ({ loading, value })
);

export default entitySelector;