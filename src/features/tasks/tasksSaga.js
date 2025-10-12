import { takeEvery, takeLatest, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "coś poszło nie tak");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}




// import { takeLatest, call, put, delay, select, takeEvery } from "redux-saga/effects";
// import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
// import { getExampleTasks } from "./getExampleTasks";
// import { saveTasksInLocalStorage } from "./tasksLocalStoraga";

// function* fetchExampleTasksHandler() {
//     try {
//         const tasks = yield select(selectTasks);
//         console.log(tasks);
//         yield delay(1000);
//         const exampleTasks = yield call(getExampleTasks);
//         yield put(setTasks(exampleTasks));
//     } catch (error) {
//         yield call(alert, "coś poszło nie tak");
//     }
// }

// function* saveTasksInLocalStorageHandler() {
//     const tasks = yield select(selectTasks);
//     yield call(saveTasksInLocalStorage, tasks);
// }

// export function* tasksSaga() {
//     console.log("Saga jest podłaczona");
//     yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
//     yield takeEvery("*", saveTasksInLocalStorageHandler);
// }