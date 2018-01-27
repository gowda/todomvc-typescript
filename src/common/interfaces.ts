import { Action } from "redux";

// app sepcific
export interface ITodo {
  id: string;
  text: string;
}

export interface ITodosList {
  todos: ITodo[];
}

// redux actions
export interface IReduxAction extends Action {
  type: string;
  [key: string]: any;
}
