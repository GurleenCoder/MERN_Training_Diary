# Day 16 - Asynchronous JavaScript

## Overview

The sixteenth day of the MERN Stack training focused on Asynchronous JavaScript, a programming approach that enables multiple tasks to execute without blocking the main thread. The session introduced asynchronous execution, callback functions, promises, `async`/`await`, and browser timer functions. These concepts are essential for handling tasks such as API requests, file operations, and delayed execution in modern JavaScript applications.

---

## Topics Covered

### 1. Synchronous vs Asynchronous JavaScript

Studied the difference between synchronous and asynchronous execution. Understood that synchronous code executes sequentially, while asynchronous code allows certain operations to run independently without blocking the execution of other statements.

---

### 2. Callback Functions

Learned how callback functions are passed as arguments to other functions and executed after the completion of a task.

**Example:**

```javascript
function greet(callback) {
    console.log("Hello");
    callback();
}
```

Callbacks are commonly used to perform operations after asynchronous tasks are completed.

---

### 3. JavaScript Promises

Studied Promises as a modern approach to handling asynchronous operations more efficiently than callbacks.

**Promise States:**

- Pending
- Fulfilled
- Rejected

**Methods Covered:**

- `.then()`
- `.catch()`
- `.finally()`

Promises improve code readability and help avoid deeply nested callback functions.

---

### 4. Async and Await

Learned the `async` and `await` keywords, which simplify asynchronous programming by allowing asynchronous code to be written in a more readable and synchronous-like manner.

**Syntax:**

```javascript
async function fetchData() {
    const result = await promise;
}
```

---

### 5. Timer Functions

Studied JavaScript timer functions used to execute code after a specified delay or repeatedly at fixed intervals.

**Functions Covered:**

- `setTimeout()`
- `setInterval()`
- `clearTimeout()`
- `clearInterval()`

These functions are useful for scheduling tasks and creating time-based functionality.

---

## Task Assigned

No specific programming task was assigned during the session. Instead, the instructor encouraged us to implement each asynchronous JavaScript concept individually, including callback functions, promises, `async`/`await`, and timer functions, to gain practical understanding through implementation.

---

## Work Done

- Implemented callback functions.
- Practiced creating and handling JavaScript promises.
- Implemented asynchronous functions using `async` and `await`.
- Practiced delayed execution using `setTimeout()`.
- Implemented repeated execution using `setInterval()`.
- Successfully executed and tested all programs using Visual Studio Code and the browser console.

---

## Practical Implementation

| Implementation | File |# Day 16 - Asynchronous JavaScript

## Overview

The sixteenth day of the MERN Stack training focused on Asynchronous JavaScript, a programming approach that enables multiple tasks to execute without blocking the main thread. The session introduced asynchronous execution, callback functions, promises, `async`/`await`, and browser timer functions. These concepts are essential for handling tasks such as API requests, file operations, and delayed execution in modern JavaScript applications.

---

## Topics Covered

### 1. Synchronous vs Asynchronous JavaScript

Studied the difference between synchronous and asynchronous execution. Understood that synchronous code executes sequentially, while asynchronous code allows certain operations to run independently without blocking the execution of other statements.

---

### 2. Callback Functions

Learned how callback functions are passed as arguments to other functions and executed after the completion of a task.

**Example:**

```javascript
function greet(callback) {
    console.log("Hello");
    callback();
}
```

Callbacks are commonly used to perform operations after asynchronous tasks are completed.

---

### 3. JavaScript Promises

Studied Promises as a modern approach to handling asynchronous operations more efficiently than callbacks.

**Promise States:**

- Pending
- Fulfilled
- Rejected

**Methods Covered:**

- `.then()`
- `.catch()`
- `.finally()`

Promises improve code readability and help avoid deeply nested callback functions.

---

### 4. Async and Await

Learned the `async` and `await` keywords, which simplify asynchronous programming by allowing asynchronous code to be written in a more readable and synchronous-like manner.

**Syntax:**

```javascript
async function fetchData() {
    const result = await promise;
}
```

---

### 5. Timer Functions

Studied JavaScript timer functions used to execute code after a specified delay or repeatedly at fixed intervals.

**Functions Covered:**

- `setTimeout()`
- `setInterval()`
- `clearTimeout()`
- `clearInterval()`

These functions are useful for scheduling tasks and creating time-based functionality.

---

## Task Assigned

No specific programming task was assigned during the session. Instead, the instructor encouraged us to implement each asynchronous JavaScript concept individually, including callback functions, promises, `async`/`await`, and timer functions, to gain practical understanding through implementation.

---

## Work Done

- Implemented callback functions.
- Practiced creating and handling JavaScript promises.
- Implemented asynchronous functions using `async` and `await`.
- Practiced delayed execution using `setTimeout()`.
- Implemented repeated execution using `setInterval()`.
- Successfully executed and tested all programs using Visual Studio Code and the browser console.

---

## Practical Implementation

| Implementation | File |
|----------------|------|
| Callback Functions | `callbacks.js` |
| JavaScript Promises | `promises.js` |
| Async and Await | `async-await.js` |
| Timer Functions | `timers.js` |

---

## Learning Outcomes

- Understood the difference between synchronous and asynchronous execution.
- Learned how callback functions are used in asynchronous programming.
- Gained practical experience in creating and handling JavaScript promises.
- Learned to simplify asynchronous code using `async` and `await`.
- Understood the purpose and usage of JavaScript timer functions.
- Improved the ability to write efficient and responsive JavaScript applications.

---

## Conclusion

The session provided a comprehensive understanding of asynchronous programming in JavaScript. Through the implementation of callback functions, promises, `async`/`await`, and timer functions, I gained practical experience in handling operations that execute independently of the main program flow. These concepts form the foundation for working with APIs and other asynchronous operations in modern web development.
|----------------|------|
| Callback Functions | `callbacks.js` |
| JavaScript Promises | `promises.js` |
| Async and Await | `async-await.js` |
| Timer Functions | `timers.js` |

---

## Learning Outcomes

- Understood the difference between synchronous and asynchronous execution.
- Learned how callback functions are used in asynchronous programming.
- Gained practical experience in creating and handling JavaScript promises.
- Learned to simplify asynchronous code using `async` and `await`.
- Understood the purpose and usage of JavaScript timer functions.
- Improved the ability to write efficient and responsive JavaScript applications.

---

## Conclusion

The session provided a comprehensive understanding of asynchronous programming in JavaScript. Through the implementation of callback functions, promises, `async`/`await`, and timer functions, I gained practical experience in handling operations that execute independently of the main program flow. These concepts form the foundation for working with APIs and other asynchronous operations in modern web development.
