import { connect } from "react-redux";
import { addTodo } from "./actions";
import App from "components/app";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => {
      dispatch(addTodo(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
