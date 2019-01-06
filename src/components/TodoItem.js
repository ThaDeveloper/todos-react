import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delTodo } from '../actions/todoActions';
import { markComplete} from '../actions/todoActions';

export class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      completed: this.props.todo.completed
    }
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleComplete() {
    this.props.markComplete(this.props.todo.id, this.props.completed)
    this.setState({
      checked: !this.state.checked

    })
  }
  handleDelete() {
    this.props.delTodo(this.props.todo.id)
  }
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  render() {
    const { title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" defaultChecked={this.state.completed}
         required={true} onClick={this.handleComplete}/> {' '}
          { title }
          <button style={btnStyle} onClick=
        {this.handleDelete}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default connect(null, { delTodo, markComplete })(TodoItem);
