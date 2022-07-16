import { useState, useEffect } from "react";
import { TodoTypes } from "../types";
import { sortById } from "../utils/sortById";
import { useAppSelector, useAppDispatch } from "./hooks";


export const useGetTodos = () => {
      const { todo } = useAppSelector((store) => store.todo);
  const dispatch = useAppDispatch();
  const [actual, setActual] = useState<TodoTypes[]>([]);

  useEffect(() => {
    const localTodo = localStorage.getItem("todo");
    const parseData = JSON.parse(localTodo as string);
    setActual(sortById(parseData));
  }, [todo]);
  return actual
}