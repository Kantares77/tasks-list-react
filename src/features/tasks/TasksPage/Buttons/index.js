import { useSelector, useDispatch } from "react-redux";
import {Wrapper} from "./styled";

import {
    toggleHideDone,
    markAllDone,
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone
} from "../../tasksSlice";
import Button from "../Button";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTasksEmpty &&
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(markAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            }
        </Wrapper>
    )
};

export default Buttons;