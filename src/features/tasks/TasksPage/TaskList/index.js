<<<<<<< HEAD
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, Button } from "./styled";
import { removeTask, selectHideDone, selectTasksByQuery, toggleTaskDone } from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
=======
import { useDispatch, useSelector } from "react-redux";
import { List, Item, Content, Button, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task =>
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content
                        done={task.done}
                    >
<<<<<<< HEAD
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
=======
                        <StyledLink to={toTask({ id: task.id })}>
                            {task.content}
                        </StyledLink>
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </Button>
                </Item>)}
        </List >
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 50f717d03c6ec2656a2ac513e53b6a8c7e2cc637
};

export default TaskList;