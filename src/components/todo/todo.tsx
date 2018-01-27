import * as React from "react";
import { ITodo } from "common/interfaces";

const Todo = (todo: ITodo): any => {
  return <div>{todo.text}</div>;
};

export default Todo;
