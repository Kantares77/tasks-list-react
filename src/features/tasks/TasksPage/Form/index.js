import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { StyledButton, StyledForm } from "./styled";
import { addTask } from "../../tasksSlice";
import Input from "../../Input";

<<<<<<< HEAD
=======

>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

<<<<<<< HEAD
    const dispatch = useDispatch()
=======
    const dispatch = useDispatch();
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimedNewTaskContent = newTaskContent.trim();

        if (!trimedNewTaskContent) {
            return
        }

        dispatch(addTask({
            content: trimedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
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