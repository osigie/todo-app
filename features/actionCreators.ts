import { AppDispatch } from "../store";
import { TodoTypes } from "../types";
import { axiosConfig } from "../utils/axios";
import { fromLocal } from "../utils/fromLocal";
import { toLacal } from "../utils/toLocal";
import { todoSlice } from "./todoSlice";


const actions = todoSlice.actions

export const getTodo = (data: TodoTypes[]) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(actions.getTodo(data));
      if (!fromLocal()) {
        toLacal(data);
      }
    } catch (error) {
      //nothing
    }
  };
};

export const addNewTodo = (todo: TodoTypes) => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axiosConfig.post("todos/", todo);
      dispatch(actions.addATodo(todo));
    } catch (error) {
      //nothing
    }
  };
};

export const deleteOne = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (id <= 200) {
        const res = await axiosConfig.delete(`todos/${id}`);
      }
      dispatch(actions.deletetodo(id));
    } catch (error) {
      //nothing
    }
  };
};

export const editOne = (todo: TodoTypes) => {
  return async (dispatch: AppDispatch) => {
    try {
      if (todo.id <= 200) {
        const res = await axiosConfig.put(`todos/${todo.id}`, {
          title: todo.title,
          completed: todo.completed,
        });
      }
      dispatch(actions.edit(todo));
    } catch (error) {
      //nothing
    }
  };
};





