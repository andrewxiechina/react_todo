import React, {Component} from 'react';
import '../styles/todo.scss';

import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import TodoFilter from '../components/todo/TodoFilter';

export default class TodoPage extends Component{
  constructor() {
    super()
    this.state = {
      filter: "ALL",
      todo: "",
      todos:[
        {
          id: 1,
          content: "Buy birthday gift for my girl.",
          completed: true,
        },
        {
          id: 2,
          content: "Call my girl and tell her I love her.",
          completed: false,
        },
        {
          id: 3,
          content: "Wake up early.",
          completed: false,
        },
        {
          id: 4,
          content: "Be bright, be early.",
          completed: false,
        },
      ]
    }
  }
  render() {
    return (
      <div className ="todoapp">
        <TodoInput />
        <TodoList todos={this.state.todos}/>

        <footer className="footer">
          <span className="todo-count">
            <strong>{this.state.todos.length}</strong><span> items left</span>
          </span>
          <TodoFilter filter={this.state.filter}/>
        </footer>
      </div>
    );
  }
};
