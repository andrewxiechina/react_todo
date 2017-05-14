import React, {Component} from 'react';
import '../styles/todo.scss';
import {connect} from 'react-redux';

import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import TodoFilter from '../components/todo/TodoFilter';

class TodoPage extends Component{
  constructor() {
    super();
  }
  render() {
    return (
      <div className ="todoapp">
        <TodoInput />
        <TodoList todos={this.props.todos.todos}/>

        <footer className="footer">
          <span className="todo-count">
            <strong>{this.props.todos.todos.length}</strong><span> items left</span>
          </span>
          <TodoFilter filter={this.props.todos.filter}/>
        </footer>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { todos: state.todos }
}
TodoPage = connect(mapStateToProps)(TodoPage)

export default TodoPage
