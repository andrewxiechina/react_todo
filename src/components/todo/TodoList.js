import React, {Component} from 'React';

export default class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox"/>

        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <li>
              <input className="toggle" type="checkbox" checked={todo.completed ? "checked" : null}/>
              <label>{todo.content}</label>
            </li>
          ))}

        </ul>
      </section>
    )
  }
}
