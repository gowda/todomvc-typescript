import * as React from "react";
import List from "connectedComponents/list";
import Input from "connectedComponents/input";

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
