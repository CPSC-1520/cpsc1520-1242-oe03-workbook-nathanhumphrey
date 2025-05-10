const baseUrl = 'http://localhost:3000';

/**
 *
 * @returns
 */
async function fetchTodos() {
  const res = await fetch(`${baseUrl}/todos`);
  const todos = await res.json();

  return todos;
}

export { fetchTodos };
