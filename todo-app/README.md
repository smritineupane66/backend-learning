
# To-Do List App 

A simple Node.js and Express-based To-Do List application to practice backend fundamentals like routing, form handling, file storage (JSON), and dynamic EJS rendering.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persistent data using `todos.json`

## Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- File System (for local JSON storage)

## How to Run

1. Clone the repository
2. Run `npm install`
3. Start the server:
   ```bash
   node server.js
````

4. Visit `http://localhost:3000` in your browser

## Folder Structure

```
.
├── views/         # EJS templates
├── todos.json     # Stores all tasks
├── server.js      # Main backend logic
├── package.json   # Dependencies
```

