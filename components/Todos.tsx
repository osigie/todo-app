import { TodoTypes } from "../types";
import Todo from "./Todo";

type Props = {
  todo: TodoTypes[],
};

const Todos = ({ todo }:Props) => {
  return (
    <>
      {todo.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default Todos;
