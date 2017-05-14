import React, {Component} from 'React';

export default class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox"/>

        <ul className="todo-list">
          <li>
            <input className="toggle" type="checkbox" />
            <label>Hello</label>
          </li>
        </ul>
      </section>
    )
  }
}
