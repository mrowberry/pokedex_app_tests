import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import favouritesReducer from "./reducers/favouritesReducer";
import paginationReducer from "./reducers/paginationReducer";
import speciesReducer from "./reducers/speciesReducer";
import entityReducer from "./reducers/entityReducer";

const rootReducer = combineReducers({
    favourites: favouritesReducer,
    pagination: paginationReducer,
    entity: entityReducer,
    species: speciesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
));
