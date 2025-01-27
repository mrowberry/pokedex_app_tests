import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {requestGetSpecies} from "../store/actions/speciesActions";

const useSpecies = (name: string) => {
    const dispatch = useDispatch();
    const loading = useSelector((state: RootState) => state.species.status)
    const value = useSelector((state: RootState) => state.species.items[name])

    const getNewSpecies = () => {
        dispatch(requestGetSpecies(name))
    }

    return { loading, value, getNewSpecies}
}

export default useSpecies;