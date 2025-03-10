import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Container } from "../../globalStyles";
import Header from "../../common/Header";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";


function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const {
    //tasks,   
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask,
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
            //tasks={tasks}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderButtons={
          <Buttons
            markAllDone={markAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;