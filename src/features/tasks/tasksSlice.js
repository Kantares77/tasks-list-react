import { createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { getTasksFromLocalStorage } from './tasksLocalStoraga';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
=======

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
<<<<<<< HEAD
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
=======
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(({ id }) => id === taskID);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(({ id }) => id === taskID);
            tasks.splice(index, 1);
        },
        markAllDone: ({ tasks }) => {
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
            for (const task of tasks) {
                task.done = true;
            }
        },
<<<<<<< HEAD
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
} = tasksSlice.actions;
=======
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, markAllDone } = tasksSlice.actions;
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).lenght === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

<<<<<<< HEAD
    selectTasks(state).filter(({ content }) =>
=======
    return selectTasks(state).filter(({ content }) =>
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
        content.toUpperCase().includes(query.trim().toUpperCase()));
}


export default tasksSlice.reducer;