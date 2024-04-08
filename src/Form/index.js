
import { useState } from "react";
import { StyledButton, StyledForm, StyledInput } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTaskContent = newTaskContent.trim();

        if (!trimedNewTaskContent) {
            return
        }
        addNewTask(trimedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
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