import React from 'react';
import '../styles/todo.scss';
import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import TodoFilter from '../components/todo/TodoFilter';

const TodoPage = () => {
  return (
    <div className ="todoapp">
      <TodoInput />
      <TodoList />

      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong><span> items left</span>
        </span>
        <TodoFilter />
      </footer>
    </div>
  );
};

export default TodoPage;
