import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchTodos } from './utils.js';

init();

async function init() {
  const todos = await fetchTodos();
  const todosList = document.querySelector('#todos');
  todosList.innerHTML = todos.map(renderTodo).join('');

  // Add event listeners
  todosList.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('up')) {
      const parent = target.parentElement.parentElement;
      if (parent.previousElementSibling != null) {
        todosList.insertBefore(parent, parent.previousElementSibling);
      }
    }
    else if (target.classList.contains('down')) {
      const parent = target.parentElement.parentElement;
      if (parent.nextElementSibling != null) {
        todosList.insertBefore(parent.nextElementSibling, parent);
      }
    }
    else if (target.classList.contains('delete')) {
      // TODO: confirm that the user wants to delete
      target.parentElement.parentElement.remove();
    }
  });
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
