import { FaRegEdit, FaTimes } from "react-icons/fa";
import { useAppDispatch } from "../customHooks/hooks";
import { deleteOne } from "../features/actionCreators";
import { beforeEdit, openModal, toggleCompleted } from "../features/todoSlice";
import { TodoTypes } from "../types";

type Props = {
  todo: TodoTypes;
};
const Todo = (props: Props) => {
  const dispatch = useAppDispatch();
  const { todo } = props;
  // const { isEdit } = useAppSelector((state) => state.todo);

  const handleEdit = () => {
    dispatch(beforeEdit(todo));
    dispatch(openModal());
  };

  return (
    <>
      <div
        className={`task ${todo.completed ? "reminder" : null} `}
        onDoubleClick={() => dispatch(toggleCompleted(todo.id))}
      >
        <div className="contentWrapper">
          {todo.title}
          <div className="contentActions">
            <FaRegEdit style={faStyle2} onClick={handleEdit} />
            <FaTimes
              style={faStyle}
              onClick={() => dispatch(deleteOne(todo.id))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

const faStyle = {
  cursor: "pointer",
  color: "red",
  fontSize: "20px",
};

const faStyle2 = {
  cursor: "pointer",
  color: "green",
  fontSize: "20px",
};
