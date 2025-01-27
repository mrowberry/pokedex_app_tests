import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import { getNextPage as nextPageAction } from "../store/actions/paginationActions";
import {EntityType} from "../data/type";

const usePagination = (entity: EntityType) => {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.pagination)

    const getNextPage = () => {
        dispatch(nextPageAction(entity))
    }

    return { value , getNextPage }
}

export default usePagination;