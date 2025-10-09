import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledButtons } from "./styled";
import {
    fetchExampleTasks,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
    setAllDone,
    toggleHideDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </StyledButton >
            {!areTasksEmpty && (
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;