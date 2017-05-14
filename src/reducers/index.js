import { combineReducers } from 'redux';
import todos from './todosReducer';

const rootReducer = combineReducers({
  todos: todos
});

export default rootReducer;
