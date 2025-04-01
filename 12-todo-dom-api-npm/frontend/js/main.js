import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchTodos } from './utils.js';

fetchTodos();

`
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label" for="flexCheckDefault">
        Default checkbox
      </label>
    </div>
    <span>
      <button class="btn">Up</button>
      <button class="btn">Down</button>
      <button class="btn btn-danger>Delete</button>
    </span>
  </li>
</ul>
`;
