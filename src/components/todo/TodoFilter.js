import React, {Component} from 'React';

export default class TodoFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li><a href="#/" className="selected">All</a></li>
        <li><a href="#/">Active</a></li>
        <li><a href="#/">Completed</a></li>
      </ul>
    )
  }
}
