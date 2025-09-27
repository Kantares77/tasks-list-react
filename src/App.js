import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import AuthorPage from "./features/author/AuthorPage";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/zadania">Zadania</Link>
                </li>
                <li>
                    <Link to="/autor">O autorze</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Redirect to="/zadania" />
            </Switch>
        </nav>
    </HashRouter>
);
