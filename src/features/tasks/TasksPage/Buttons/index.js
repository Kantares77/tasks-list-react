import { useSelector, useDispatch } from "react-redux";
<<<<<<< HEAD
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
=======
import {Wrapper} from "./styled";

import {
    toggleHideDone,
    markAllDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone
} from "../../tasksSlice";
import Button from "../Button";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637

    const dispatch = useDispatch();

    return (
<<<<<<< HEAD
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
=======
        <Wrapper>
            {!areTasksEmpty &&
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(markAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            }
        </Wrapper>
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
    )
};

export default Buttons;