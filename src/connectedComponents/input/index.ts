import TodoInput from 'components/input';
import { addTodo } from 'connectedComponents/app/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch  => {
  return {
    addTodo: (text:string):void => {
      dispatch(addTodo(text));
    }
  }
}

const Input = connect(null, mapDispatchToProps)(TodoInput);
export default Input;