import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../customHooks/hooks";
import { addNewTodo, editOne } from "../features/actionCreators";
import { closeModal } from "../features/todoSlice";
import { TodoTypes } from "../types";
import Modal from "./Modal";

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const { singleTodo, isEdit, todo } = useAppSelector((store) => store.todo);
  const [state, setState] = useState(singleTodo);

  useEffect(() => {
    setState(singleTodo);
  }, [singleTodo]);


  const newTodo: TodoTypes = {
    userId: 1,
    id: todo ? todo.length + 1 : 201,
    title: state.title,
    completed: state.completed,
  };


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!state.title) {
      alert("Please input a title");
      return;
    }
    if (isEdit) {
      dispatch(editOne(state));
    } else {
      dispatch(addNewTodo(newTodo));
    }

    setState({ ...state, title: "", completed: false });
    dispatch(closeModal());
  };
  return (
    <Modal title="Todo">
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Add Todo"
            value={state.title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
            className="inputField"
          ></input>
        </div>

        <div className="form-control form-control-check">
          <label>completed</label>
          <input
            type="checkbox"
            value={"reminder"}
            onChange={(e) =>
              setState({ ...state, completed: e.currentTarget.checked })
            }
            checked={state.completed}
          ></input>
        </div>
        <input
          type="submit"
          value={isEdit ? "Edit Todo" : "Save Todo"}
          className="btn btn-block"
        />
      </form>
    </Modal>
  );
};

export default AddTodo;
