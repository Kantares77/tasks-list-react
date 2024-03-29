import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllDone }) => (
    < div className="buttons" >
        {tasks.length > 0 &&
            <>
                <button
                    className="buttons__button"
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={markAllDone}
                >
                    Ukończ wszystkie
                </button>
            </>
        }
    </div>
);

export default Buttons;