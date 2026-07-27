# Day 22 - Building REST APIs with Express.js

## Overview

The twenty-second day of the MERN Stack training focused on developing RESTful APIs using Express.js. The session introduced REST architecture, HTTP request methods, route handling, and Express Router. Practical implementation included creating API endpoints for performing CRUD (Create, Read, Update, Delete) operations and testing them using Postman. These concepts are fundamental for building back-end services that communicate with front-end applications.

---

## Topics Covered

### 1. Introduction to REST APIs

Studied REST (Representational State Transfer), an architectural style used for designing web services. REST APIs enable communication between client applications and servers using standard HTTP methods.

---

### 2. HTTP Request Methods

Learned the purpose of different HTTP methods used in RESTful applications.

**Methods Covered:**

- `GET` – Retrieve data
- `POST` – Create new data
- `PUT` – Update existing data
- `DELETE` – Remove data

Each request method performs a specific operation on server resources.

---

### 3. Creating API Routes

Learned how to define API endpoints using Express route methods.

**Example:**

```javascript
app.get("/users", (req, res) => {
    res.send("User List");
});
```

Practiced creating multiple routes for different HTTP methods.

---

### 4. Express Router

Studied Express Router, which helps organize application routes into separate files, making projects more modular and easier to maintain.

**Example:**

```javascript
const router = express.Router();
```

---

### 5. Request Body Handling

Learned how to receive JSON data from the client using Express middleware.

**Middleware Used:**

```javascript
app.use(express.json());
```

This middleware parses incoming JSON request bodies.

---

### 6. API Testing

Practiced testing API endpoints using Postman by sending GET, POST, PUT, and DELETE requests and observing the server responses.

---

## Task Assigned

No specific programming task was assigned during the session. The instructor encouraged us to build REST API endpoints using different HTTP methods, organize routes using Express Router, and test all endpoints using Postman.

---

## Work Done

- Created REST API endpoints using Express.
- Implemented GET, POST, PUT, and DELETE requests.
- Organized routes using Express Router.
- Parsed incoming JSON data using Express middleware.
- Tested all API endpoints successfully using Postman.

---

## Practical Implementation

| Implementation | File |
|----------------|------|
| REST API Server | `server.js` |
| Express Router | `routes.js` |
| CRUD API Example | `crud-api.js` |

---

## Learning Outcomes

- Understood the concept of RESTful APIs.
- Learned the purpose of different HTTP request methods.
- Gained practical experience in building API endpoints using Express.
- Learned how to organize routes using Express Router.
- Understood how JSON data is handled on the server.
- Improved knowledge of API testing using Postman.

---

## Conclusion

The session provided practical experience in developing RESTful APIs using Express.js. Through the implementation of different HTTP methods, Express Router, and JSON request handling, I gained a strong understanding of server-side API development. These concepts are essential for connecting React front-end applications with MongoDB databases in the MERN Stack.
