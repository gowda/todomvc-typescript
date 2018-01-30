import * as React from "react";

export interface ITodoInputProps {
  addTodo: (text: string) => void;
}

export interface ITodoInputState {
  value: string;
}

const initialState: ITodoInputState = {
  value: ""
};

class TodoInput extends React.Component<ITodoInputProps, ITodoInputState> {
  state = initialState;

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value.trim();
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
