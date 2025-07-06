# Node.js Learning – Day 2



This repository documents my learning progress for Day 2 of my Node.js journey. Today, I focused on understanding and working with core modules in Node.js, performing file operations, parsing URLs, and creating a basic HTTP server with routing functionality.



## Topics Covered

### 1. Built-in Modules

I explored some of Node.js's built-in modules, including:

- `fs`: for file system operations like creating, reading, updating, and deleting files.
- `url`: for parsing and formatting URL strings.
- `http`: for creating a basic HTTP server and handling client requests.

---

### 2. File Operations

Using the `fs ` module, I practiced:

- Creating files asynchronously and synchronously.
- Reading file contents.
- Appending data to existing files.
- Deleting files.

These operations helped me understand both the callback pattern and how Node.js interacts with the system's file storage.

---

### 3. URL Handling

WiWith the `url` module, I learned to extract components such as the pathname, host, and query parameters from a given URL. This is useful for route management and request handling in server-side logic.

---

### 4. HTTP Server and Routing

I created a basic HTTP server using the `http` module. The server was able to:

- Respond to specific routes such as `/`, `/about`, `/contact`, and `/users`.
- Send different content types like HTML and JSON based on the route.
- Handle undefined routes with a custom 404 message.

This helped me understand how routing logic works, how to send responses, and how content-type headers affect browser interpretation.

---

## Key Takeaways

- Built-in modules in Node.js are powerful and do not require external installation.
- Understanding `res.writeHead`, `res.write`, and `res.end` is essential for sending structured responses.
- Proper use of content-type headers (e.g., `text/html`, `application/json`) is crucial for communication between server and client.
- JSON responses must be stringified before sending to ensure valid format.
- Creating and routing a basic server manually helps in building a strong foundation before moving to frameworks like Express.js.

















