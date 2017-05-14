import React, {Component} from 'React';

export default class TodoInput extends Component {
  render() {
    return (
      <header>
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
    )
  }
}
