import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import { fetchTodos} from '../actions/todoActions';

class Todos extends Component {
  componentWillMount() {
    this.props.fetchTodos();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo);
    }
  }
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
  newTodo: state.todos.todo
});

export default connect(mapStateToProps, { fetchTodos })(Todos);
