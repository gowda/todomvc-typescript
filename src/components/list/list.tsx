import * as React from "react";
import Todo from "components/todo/todo";
import { ITodosList } from "common/interfaces";

export interface ITodosListProps extends ITodosList {
  fetchTodos: () => void;
}

class List extends React.Component<ITodosListProps, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return this.props.todos.map(todo => {
      return <Todo {...todo} key={todo.id} />;
    });
  }
}

export default List;
