<<<<<<< HEAD
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Redirect to="/zadania" />
            </Switch>
        </nav>
    </HashRouter>
);
=======
import {
    HashRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

export default () => (
    <HashRouter>
        <Navigation />

        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Redirect to={toTasks()} />
        </Switch>
    </HashRouter >
);
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
