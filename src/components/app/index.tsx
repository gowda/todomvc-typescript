import * as React from "react";
import List from "connectedComponents/list";
import Input from "connectedComponents/input";

class App extends React.Component<{}, {}> {
  render() {
    return [<Input key="input" />, <List key="list" />];
  }
}

export default App;
