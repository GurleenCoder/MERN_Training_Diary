# Day 21 - Introduction to Express.js

## Overview

The twenty-first day of the MERN Stack training focused on Express.js, a lightweight and flexible web application framework built on top of Node.js. The session introduced the process of creating a web server, handling client requests, defining routes, and sending responses using Express. These concepts simplify server-side development and provide the foundation for building RESTful APIs.

---

## Topics Covered

### 1. Introduction to Express.js

Studied Express.js, a fast and minimal web framework for Node.js that simplifies server-side application development by providing powerful routing and middleware features.

---

### 2. Installing Express

Learned how to install Express using npm and include it in a Node.js project.

**Command:**

```bash
npm install express
```

Imported Express into the project using:

```javascript
const express = require("express");
```

---

### 3. Creating an Express Server

Learned how to initialize an Express application and start a web server.

**Example:**

```javascript
const app = express();

app.listen(3000, () => {
    console.log("Server is running...");
});
```

---

### 4. Routing in Express

Studied routing, which determines how the server responds to client requests for different URLs.

**Methods Covered:**

- `app.get()`
- `app.post()`

These methods define how the server handles incoming HTTP requests.

---

### 5. Request and Response Objects

Learned about the request (`req`) and response (`res`) objects used by Express.

Common response methods practiced include:

- `res.send()`
- `res.json()`

These methods send text or JSON data back to the client.

---

### 6. Middleware (Introduction)

Studied middleware functions, which execute before the final request handler. Middleware is commonly used for logging, authentication, and processing incoming requests.

**Example:**

```javascript
app.use((req, res, next) => {
    console.log("Request Received");
    next();
});
```

---

## Task Assigned

No specific programming task was assigned during the session. The instructor encouraged us to create a basic Express server, define multiple routes, and practice sending responses using different HTTP methods.

---

## Work Done

- Installed Express using npm.
- Created an Express server.
- Started the server on a specified port.
- Implemented basic GET and POST routes.
- Practiced sending text and JSON responses.
- Explored the use of middleware for processing requests.
- Successfully tested the server using a web browser and Postman.

---

## Practical Implementation

| Implementation | File |
|----------------|------|
| Express Server | `server.js` |
| Routing Example | `routes.js` |
| Middleware Example | `middleware.js` |

---

## Learning Outcomes

- Understood the purpose and advantages of Express.js.
- Learned how to install and configure Express.
- Gained practical experience in creating an Express server.
- Learned how routing handles client requests.
- Understood the usage of request and response objects.
- Gained basic knowledge of middleware in Express.

---

## Conclusion

The session provided a strong introduction to Express.js and its role in server-side web development. Through practical implementation, I learned how to create a server, define routes, send responses, and use middleware for request processing. These concepts form the foundation for developing RESTful APIs and full-stack MERN applications.
