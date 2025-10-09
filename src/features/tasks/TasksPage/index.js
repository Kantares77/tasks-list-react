import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import { Container } from "../../../globalStyles";
import Header from "../../../common/Header";
import Search from "./Search";
<<<<<<< HEAD

function TasksPage() {
=======
import FetchExampleTasksButton from "./FetchExampleTasksButton";

function TasksPage() {

>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
<<<<<<< HEAD
=======
        extraHeaderButtons={<FetchExampleTasksButton />}
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderButtons={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;