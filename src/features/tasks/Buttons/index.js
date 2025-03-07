import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledButtons } from "./styled";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ markAllDone }) => {
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
                        onClick={markAllDone}
                    >
                        Ukończ wszystkie
                    </StyledButton>
                </>
            }
        </StyledButtons>
    )
};

export default Buttons;