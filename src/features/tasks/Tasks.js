import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Container } from "../../globalStyles";
import Header from "../../common/Header";

function Tasks() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderButtons={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;