import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { useDispatch, useSelector,} from "react-redux";
import Button from "../Button";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};