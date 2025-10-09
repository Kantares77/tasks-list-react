import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";
import Button from "../Button";

export default () => {
    const dispatch = useDispatch();

    return (
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </Button>
    );
};