import { IReduxAction, ITodo, ITodosList, IDispatch } from "common/interfaces";
import { ThunkAction } from "redux-thunk";
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
export const fetchTodos = (): ThunkAction<any, any, any> => {
  return (dispatch: IDispatch, getState: () => any) => {
    return fetch("http://localhost:3000/api/todos")
      .then(response => response.json(), error => console.log("an error occurred"))
      .then(json => dispatch(recieveTodos(json)));
  };
};
