import * as React from "react";
import Todo from "components/todo/todo";

const List = ({ todos }) => {
  return todos.map(todo => {
    return <Todo {...todo} key={todo.id} />;
  });
};

export default List;
