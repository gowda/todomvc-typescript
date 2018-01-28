import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

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

export type IDispatch = Dispatch<ThunkAction<any, any, any> | IReduxAction>;
