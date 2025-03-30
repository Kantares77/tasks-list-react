import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledButtons } from "./styled";
import { selectTasks, toggleHideDone, markAllDone } from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {tasks.length > 0 &&
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        disabled={tasks.every(({ done }) => done)}
                        onClick={() => dispatch(markAllDone())}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            }
        </StyledButtons>
    )
};

export default Buttons;