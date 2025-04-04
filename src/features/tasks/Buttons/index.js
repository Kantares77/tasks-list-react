import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledButtons } from "./styled";
import { toggleHideDone, markAllDone, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone } from "../tasksSlice";

const Buttons = () => {
   const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    
    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!areTasksEmpty &&
                <>
                    <StyledButton
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </StyledButton>
                    <StyledButton
                        disabled={isEveryTaskDone}
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