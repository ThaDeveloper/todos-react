import { FETCH_TODOS, NEW_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/todoTypes';

const initialState = {
  todos: [],
  todo: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    case NEW_TODO:
      return {
        ...state,
        todo: action.payload
      };
    case DELETE_TODO:
    return {
      ...state,
      todos: [...state.todos.filter(todo => todo.id !== action.id)]
    }
    case TOGGLE_TODO:
    return {
      ...state,
      todo: action.payload
    }
    default:
      return state;
  }
}
