import { createSlice } from "@reduxjs/toolkit";

import { TodoTypes } from "../types";
import { fromLocal } from "../utils/fromLocal";
import { toLacal } from "../utils/toLocal";

const defaultValue = {
  id: 0,
  title: "",
  completed: false,
  userId: 0,
};

const initialState = {
  todo: [] as TodoTypes[],
  singleTodo: defaultValue,
  isEdit: false,
  paginatedTodo: [] as TodoTypes[],
  searched: [] as TodoTypes[],
  isSearching: false,
  changePagination: true,
  isFiltered: [] as TodoTypes[],
  fil: false,
  modalOpen: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodo: (state, action) => {
      state.todo = action.payload.sort((a: TodoTypes, b: TodoTypes) => {
        return b.id - a.id;
      });
    },
    addATodo: (state, action) => {
      state.isSearching = false;
      state.fil = false;
      const newTodo = {
        ...action.payload,
      };
      state.todo.push(newTodo);
      state.todo = state.todo.sort((a: TodoTypes, b: TodoTypes) => {
        return b.id - a.id;
      });
      state.changePagination = true;
      toLacal(state.todo as TodoTypes[]);
    },
    deletetodo: (state, action) => {
      const newState = fromLocal().filter((each: TodoTypes) => {
        return each.id !== action.payload;
      });
      state.todo = newState;
      toLacal(newState as TodoTypes[]);
    },
    beforeEdit: (state, action) => {
      state.singleTodo = action.payload;
      state.isEdit = true;
    },

    edit: (state, action) => {
      const edited = fromLocal().map((each: TodoTypes) => {
        if (each.id === action.payload.id) {
          each.title = action.payload.title;
          each.completed = action.payload.completed;
        }
        return each;
      });
      state.todo = edited;
      state.fil = false;
      toLacal(edited as TodoTypes[]);
      state.isEdit = false;
    },
    pg: (state, action) => {
      state.paginatedTodo = action.payload;
    },
    searching: (state, action) => {
      state.searched = action.payload;
    },
    isSearching: (state, action) => {
      state.isSearching = action.payload;
      state.fil = false;
    },
    toggleCompleted: (state, action) => {
      const edited = fromLocal().map((each: TodoTypes) => {
        if (each.id === action.payload) {
          each.completed = !each.completed;
        }
        return each;
      });

      const pagEdit = state.paginatedTodo.map((each: TodoTypes) => {
        if (each.id === action.payload) {
          each.completed = !each.completed;
        }
        return each;
      });
      state.todo = edited;
      state.paginatedTodo = pagEdit;
      state.changePagination = false;
      toLacal(edited as TodoTypes[]);
    },
    filterByCompleted: (state) => {
      state.fil = true;
      const local = [...fromLocal()];
      const filter = local.filter((each: TodoTypes) => {
        return each.completed === true;
      });
      state.isFiltered = filter;
    },
    filterReturn: (state) => {
      state.fil = false;
      state.isSearching = false;
    },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const {
  beforeEdit,
  pg,
  searching,
  isSearching,
  toggleCompleted,
  filterByCompleted,
  filterReturn,
  openModal,
  closeModal,
} = todoSlice.actions;

export default todoSlice.reducer;
