import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import todoApp from "connectedComponents/app/reducer";
import App from "connectedComponents/app";

let store = createStore(todoApp, applyMiddleware(thunk));

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Component />
      </div>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);
