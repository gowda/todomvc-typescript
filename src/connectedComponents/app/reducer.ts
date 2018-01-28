import { Action, combineReducers } from "redux";
import { ITodo } from "common/interfaces";
import { RECIEVE_TODOS } from "connectedComponents/list/actions";

interface IReduxAction extends Action {
  type: string;
  [key: string]: any;
}

const todos = (state: ITodo[] = [], action: IReduxAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case RECIEVE_TODOS:
      return [...state, ...action.todos];
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos
});

export default todoApp;
