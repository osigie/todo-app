import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useGetTodos } from "../customHooks/getTodos";
import { useAppDispatch, useAppSelector } from "../customHooks/hooks";
import { pg } from "../features/todoSlice";

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const [postsPerPage] = useState(5);
  const { changePagination } = useAppSelector((store) => store.todo);
  const todo = useGetTodos();

  useEffect(() => {
    if (changePagination) {
      dispatch(pg(todo.slice(0, postsPerPage)));
    }
  }, [todo]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = todo.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    dispatch(pg(currentPosts));
  };
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(todo.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePag = (event: React.ChangeEvent<unknown>, page: number) => {
    paginate(page);
  };

  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={pageNumbers.length} onChange={handlePag} />
      </Stack>
    </div>
  );
};

export default PaginationComponent;
