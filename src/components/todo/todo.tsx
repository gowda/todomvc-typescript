import * as React from "react";
import { ITodo } from "common/interfaces";
import styled,  { css } from 'react-emotion';

const Todo = (todo) => {
  return <div className={todo.className} >{todo.text}</div>;
};

const StyledTodo = styled(Todo)`
text-decoration: ${props =>
    props.isDone ? 'line-through' : ''};
    `

export default StyledTodo;
