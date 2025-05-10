# TODO List with Backend and npm

1. Setup a backend json server in `backend/`
  - Will serve todo items
  - Init an npm project
  - Install json server as a dev dependency
  - Create the sample todo data in `data/todos.json`
  - Create a script to run the server, serving the `todos.json` data
2. Setup a frontend application in `frontend/`
  - Will be a UI that will fetch todos and allow for todo management (e.g. filter and ordering)
  - Init an npm project
  - Install eslint and parcel as dev dependencies
  - Install bootstrap as a dependency
  - Create a script to run the parcel server and one to build the project
  - Create a function to fetch todos in `js/utils.js`
  - Export the function for use
  - Import the fetch function in `js/main.js`
  - On page load, fetch the existing todos and render them
  - Allow the user to reorder the todos
  - Allow the user to remove a todo
  - Allow the user to fileter complete todos
