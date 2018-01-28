import { connect } from "react-redux";
import List from "components/list/list";
import { fetchTodos } from "./actions";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => dispatch(fetchTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
