import {EntityType, Status, TypeToEntity} from "../data/type";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import { requestGetEntity } from "../store/actions/entityActions";
import entitySelector from "../store/selectors/entitySelector";

interface IEntity<V> {
    value: V,
    loading: Status,
    getEntityData: () => void
}

function useEntity<T extends EntityType>(entity: T, name: string): IEntity<TypeToEntity[T]> {
    const { loading, value } = useSelector((state: RootState) => entitySelector(state, { entity, name }))
    const dispatch = useDispatch()

    const getEntityData = () => {
        dispatch(requestGetEntity(entity, name))
    }

    return {
        value: value as TypeToEntity[T],
        loading,
        getEntityData
    }
}

export default useEntity;