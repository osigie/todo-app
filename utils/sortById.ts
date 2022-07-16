import { TodoTypes } from "../types";

export const sortById = (arr: TodoTypes[]) => {

const sorted = arr?.sort((a: TodoTypes, b: TodoTypes) => {
  return b.id - a.id;
});
return sorted
}


