import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import createSagaMiddleware from "redux-saga";
import tasksReducer from "./features/tasks/tasksSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    // middleware: [sagaMiddleware],
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
=======
import tasksReducer from './features/tasks/tasksSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
