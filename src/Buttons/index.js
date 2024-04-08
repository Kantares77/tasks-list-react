import { StyledButton, StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllDone }) => (
    <StyledButtons>
        {tasks.length > 0 &&
            <>
                <StyledButton
                    onClick={toggleHideDone}
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
);

export default Buttons;