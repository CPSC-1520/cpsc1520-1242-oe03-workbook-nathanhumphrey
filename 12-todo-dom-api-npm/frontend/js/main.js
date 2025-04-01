import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchTodos } from './utils.js';

init();

async function init() {
  const todos = await fetchTodos();
  const todosList = document.querySelector('#todos');
  todosList.innerHTML = todos.map(renderTodo).join('');
}

function renderTodo(todo) {
  return `
  <li data-todo-id="${todo.id}" class="list-group-item d-flex justify-content-between align-items-start">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" ${todo.complete ? 'checked' : ''} id="todo${todo.id}">
      <label class="form-check-label" for="todo${todo.id}">
        ${todo.description}
      </label>
    </div>
    <span>
      <button class="btn btn-primary up">Up</button>
      <button class="btn btn-primary down">Down</button>
      <button class="btn btn-danger delete">Delete</button>
    </span>
  </li>
  `;
}
