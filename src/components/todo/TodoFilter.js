import React, {Component} from 'React';

export default class TodoFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <a href="#/" className={this.props.filter==="ALL" ? "selected" : ""}>
            All
          </a>
        </li>
        <li><a href="#/" className={this.props.filter==="ACTIVE" ? "selected" : ""}>Active</a></li>
        <li><a href="#/" className={this.props.filter==="COMPLETED" ? "selected" : ""}>Completed</a></li>
      </ul>
    )
  }
}
