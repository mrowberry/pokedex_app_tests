import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import { toggle as toggleAction} from "../store/actions/favouritesActions";
import {EntityType} from "../data/type";

const useFavourite = (entity: EntityType, name: string) => {
    const value = useSelector((state: RootState) => state.favourites[entity][name])
    const dispatch = useDispatch()

    const toggle = () => {
        dispatch(toggleAction(entity, name))
    }

    return { value: Boolean(value), toggle }
}

export default useFavourite;
