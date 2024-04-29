
import { useRef, useState } from "react";
import { StyledButton, StyledForm, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTaskContent = newTaskContent.trim();

        if (!trimedNewTaskContent) {
            return
        }
        addNewTask(trimedNewTaskContent);
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                name="enteredTask"
            />
            <StyledButton>Dodaj zadanie</StyledButton>
        </StyledForm>
    );
};

export default Form;