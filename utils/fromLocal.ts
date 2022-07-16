export const fromLocal = () => {
  const todo = localStorage.getItem("todo");
  return JSON.parse(todo as string);
};
