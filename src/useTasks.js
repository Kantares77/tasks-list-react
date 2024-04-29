import { useEffect, useState } from "react";

export const useTasks = () => {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [
        { id: 1, content: "Umyć zęby", done: false },
        { id: 2, content: "Zjeść kolację", done: true },
      ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const markAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        done: false,
        content: newTaskContent,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    hideDone,
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask,
    toggleHideDone,
  };
};