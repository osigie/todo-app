import { Button } from "@mui/material";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import Pagination from "../components/PageBtnContainer";
import Todos from "../components/Todos";
import { useGetTodos } from "../customHooks/getTodos";
import { useAppDispatch, useAppSelector } from "../customHooks/hooks";
import { getTodo } from "../features/actionCreators";
import { openModal } from "../features/todoSlice";
import { TodoTypes } from "../types";
import { axiosConfig } from "../utils/axios";

type TodoTypeNext = {
  data: TodoTypes[];
};

const Home: NextPage<TodoTypeNext> = ({ data }) => {
  const dispatch = useAppDispatch();
  const actual = useGetTodos();
  const { paginatedTodo, isSearching, searched, fil, isFiltered } =
    useAppSelector((store) => store.todo);

  useEffect(() => {
    dispatch(getTodo(data));
  }, []);

  if (!actual) return <div>Loading...</div>;

  let displayData: TodoTypes[] = [];

  if (isSearching) {
    displayData = searched;
  } else if (!isSearching && !fil) {
    displayData = paginatedTodo;
  } else if (fil) {
    displayData = isFiltered;
  }
  return (
    <>
      <div className="container">
        <Head>
          <title>Todo App</title>
          <meta name="todo app" content="track your todo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Button
          onClick={() => dispatch(openModal())}
          style={{ color: "green", marginBottom: "0.7rem" }}
        >
          Add Todo
        </Button>
        <AddTodo />

        <Todos todo={displayData} />
        <div className="paginatedContainer">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axiosConfig.get("todos/");
  return {
    props: {
      data,
    },
  };
};
