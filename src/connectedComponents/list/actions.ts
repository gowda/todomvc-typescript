import { IReduxAction, ITodo, ITodosList } from "common/interfaces";

export const RECIEVE_TODOS = "RECIEVE_TODOS";

export interface IRecieveTodos extends IReduxAction {
  todos: ITodosList;
}

export const recieveTodos = (todos: ITodosList): IRecieveTodos => {
  return {
    type: RECIEVE_TODOS,
    todos
  };
};

// async action
export const fetchTodos = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/todos")
      .then(response => response.json(), error => console.log("an error occurred"))
      .then(json => dispatch(recieveTodos(json)));
  };
};
