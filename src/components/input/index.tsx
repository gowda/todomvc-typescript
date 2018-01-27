import * as React from "react";

export interface ITodoInputProps {
  addTodo: (text: string) => void;
}

export interface ITodoInputState {
  value: string;
}

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.onChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoInput;
