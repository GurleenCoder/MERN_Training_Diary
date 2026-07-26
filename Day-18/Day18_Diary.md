# Day 18 - React Components and Props

## Overview

The eighteenth day of the MERN Stack training focused on React Components and Props, two fundamental concepts used to build modular and reusable user interfaces. The session introduced functional components, component organization, importing and exporting components, and passing data between components using props. These concepts help improve code reusability, readability, and maintainability in React applications.

---

## Topics Covered

### 1. Introduction to Components

Studied React Components, which are reusable building blocks used to create different parts of a user interface. Each component represents an independent piece of the application and can be reused multiple times.

---

### 2. Functional Components

Learned how to create functional components using JavaScript functions.

**Example:**

```jsx
function Home() {
    return <h1>Home Component</h1>;
}
```

Functional components are the most commonly used type of components in modern React applications.

---

### 3. Importing and Exporting Components

Studied how components are exported from one file and imported into another using ES6 modules.

**Keywords Covered:**

- `export default`
- `import`

This allows different components to work together within a React project.

---

### 4. Props (Properties)

Learned how to pass data from a parent component to a child component using props.

**Example:**

```jsx
<Home name="Gagandeep" age={20} />
```

Props make components dynamic and reusable by allowing them to receive different data.

---

### 5. Using Props inside Components

Studied how to access and display prop values within a component.

**Example:**

```jsx
function Home(props) {
    return <h2>{props.name}</h2>;
}
```

Also practiced using destructuring for cleaner code.

---

### 6. Component Reusability

Understood how a single component can be reused multiple times by passing different prop values.

This reduces code duplication and improves maintainability.

---

## Task Assigned

No specific programming task was assigned during the session. The instructor encouraged us to create multiple React components and practice passing different values using props to understand component reusability and parent-to-child communication.

---

## Work Done

- Created multiple functional components.
- Imported and exported React components.
- Passed data using props.
- Displayed dynamic content using props.
- Practiced component reusability by passing different values.
- Successfully executed and tested the React application using the Vite development server.

---

## Practical Implementation

| Implementation | File |
|----------------|------|
| Home Component | `Home.jsx` |
| About Component | `About.jsx` |
| Props Example | `Card.jsx` |
| Main Application | `App.jsx` |

---

## Learning Outcomes

- Understood the concept of reusable React components.
- Learned how to create functional components.
- Gained practical experience in importing and exporting components.
- Learned how to pass and access data using props.
- Understood parent-to-child communication in React.
- Improved code organization by building modular components.

---

## Conclusion

The session provided a comprehensive understanding of React Components and Props. Through practical implementation, I learned how reusable components improve application structure and how props enable communication between components by passing dynamic data. These concepts are fundamental for building scalable and maintainable React applications.
