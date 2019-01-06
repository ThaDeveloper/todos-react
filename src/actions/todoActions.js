import { FETCH_TODOS, NEW_TODO, DELETE_TODO, TOGGLE_TODO } from './todoTypes';

export const fetchTodos = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => res.json())
    .then(todos =>
      dispatch({
        type: FETCH_TODOS,
        payload: todos
      })
    );
};

export const createTodo = postData => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(todo =>
    dispatch({
      type: NEW_TODO,
      payload: todo
    })
  );
};
//Toggle Complete
export const markComplete = (id, completed) => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(completed)
  })
  .then(res => res.json())
  .then(todo =>
    dispatch({
      type: TOGGLE_TODO,
      payload: todo
    })
  );
}

// Delete Todo
export const delTodo = id => dispatch => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    },
  })
  .then(res => res.json())
  .then(() =>
    dispatch({
      type: DELETE_TODO,
      id: id
    })
  );
}
