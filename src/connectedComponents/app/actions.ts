import * as uuid from "uuid/v1";
import { IReduxAction } from "common/interfaces";

interface IAddTodoAction extends IReduxAction {
  id: string;
  text: string;
}

export const addTodo = (text: string): IAddTodoAction => {
  return {
    type: "ADD_TODO",
    id: uuid(),
    text
  };
};
