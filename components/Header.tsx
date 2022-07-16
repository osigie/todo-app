

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetTodos } from "../customHooks/getTodos";
import { useAppDispatch } from "../customHooks/hooks";
import {
  filterByCompleted,
  filterReturn, isSearching, searching
} from "../features/todoSlice";
import { TodoTypes } from "../types";
type Props = {
  title?: string;
  clickMe?: () => void;
  showAdd?: boolean;
};

const Header = ({ title, clickMe, showAdd }: Props) => {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState("");
  const todo = useGetTodos();
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    if (!input) {
      dispatch(isSearching(false));
    }
  }, [input]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(isSearching(true));
    setInput(e.target.value);
    const searched = todo.filter((data: TodoTypes) => {
      if (data.title.toLowerCase().includes(input.toLowerCase())) {
        return data;
      }
    });
    dispatch(searching(searched));
  };

  const handleToggle = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string
  ) => {
    if (value === "completed") {
      setToggle("completed");
      dispatch(filterByCompleted());
    } else {
      setToggle("all");
      dispatch(filterReturn());
    }
  };

  return (
    <header className="header">
      <h1 style = {{marginRight: "20px"}}>{title}</h1>
      <input
        type="text"
        placeholder="search"
        onChange={handleChange}
        value={input}
        className = "searchInput"
      />
      <div style={{ marginLeft: "5px" }}>
      
        <ToggleButtonGroup
          color="primary"
          value={toggle}
          exclusive
          onChange={handleToggle}
        >
          <ToggleButton value="completed">completed</ToggleButton>
          <ToggleButton value="all">all</ToggleButton>
        </ToggleButtonGroup>
      </div>

    </header>
  );
};

Header.defaultProps = {
  title: "Todo",
};


export default Header;
