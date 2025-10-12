import Section from "../../../common/Section";
import { Container } from "../../../globalStyles";
import Header from "../../../common/Header";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono takiego zadania 😟"}
                body={!!task && (
                    <>
                        <><strong>Ukończono: </strong>{task.done ? "Tak" : "Nie"}</>
                    </>
                )}
            />
        </Container>
    );
}

export default TaskPage;