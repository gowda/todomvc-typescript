import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "connectedComponents/app/reducer";
import App from "connectedComponents/app";

let store = createStore(todoApp);

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
