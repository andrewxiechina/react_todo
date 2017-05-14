import React from 'react';
import {Link} from 'react-router';
import '../styles/todo.scss'
const TodoPage = () => {
  return (
    <div className ="todoapp">
      <header>
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>

      <section class="main">
        <input className="toggle-all" type="checkbox"/>

        <ul className="todo-list">
          <li>
            <input className="toggle" type="checkbox" />
            <label>Hello</label>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong><span> items left</span>
        </span>
        <ul className="filters">
          <li><a href="#/" className="selected">All</a></li>
          <li><a href="#/">Active</a></li>
          <li><a href="#/">Completed</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default TodoPage;
