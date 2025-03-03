import Form from "./Form";
import TaskList from "./Tasks";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Container } from "../../globalStyles";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";

function Tasks() {
  const {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask,
    toggleHideDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderButtons={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllDone={markAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;