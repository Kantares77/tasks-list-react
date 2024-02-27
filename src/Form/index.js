
import { useState } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                name="enteredTask"
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;