import { TodoTypes } from "../types";

export const toLacal = (todo: TodoTypes[]) => {
  localStorage.setItem("todo", JSON.stringify(todo));
};
