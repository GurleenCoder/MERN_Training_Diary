# Day 23 - Introduction to MongoDB

## Overview

The twenty-third day of the MERN Stack training focused on MongoDB, a popular NoSQL database used to store and manage application data. The session introduced the fundamentals of MongoDB, its architecture, collections and documents, basic database operations, and the use of MongoDB Compass for database management. These concepts provide the foundation for storing and retrieving data in MERN Stack applications.

---

## Topics Covered

### 1. Introduction to MongoDB

Studied MongoDB, a NoSQL document-oriented database that stores data in the form of BSON (Binary JSON) documents. Unlike relational databases, MongoDB provides a flexible schema, making it suitable for modern web applications.

---

### 2. Features of MongoDB

Learned the major features of MongoDB, including:

- NoSQL Database
- Document-Oriented Storage
- Flexible Schema
- High Performance
- Scalability
- Cross-Platform Support

These features make MongoDB an efficient database for handling large volumes of data.

---

### 3. Collections and Documents

Studied the basic structure of MongoDB.

- **Database** – Stores collections.
- **Collection** – A group of related documents.
- **Document** – A single record stored in JSON-like format.

**Example Document:**

```json
{
  "name": "Gagandeep",
  "age": 20,
  "course": "MERN Stack"
}
```

---

### 4. MongoDB Compass

Learned how to use MongoDB Compass, the graphical interface for MongoDB.

Using Compass, we practiced:

- Creating databases
- Creating collections
- Inserting documents
- Viewing stored documents
- Updating records
- Deleting records

---

### 5. CRUD Operations

Studied the four basic database operations:

- **Create** – Insert new documents
- **Read** – Retrieve documents
- **Update** – Modify existing documents
- **Delete** – Remove documents

These operations are the foundation of database management.

---

### 6. MongoDB Shell Commands

Practiced basic MongoDB commands.

**Commands Covered:**

```javascript
show dbs
use studentDB
db.createCollection("students")
show collections
```

Also learned basic CRUD commands:

```javascript
db.students.insertOne()
db.students.find()
db.students.updateOne()
db.students.deleteOne()
```

---

## Task Assigned

No specific programming task was assigned during the session. The instructor encouraged us to explore MongoDB Compass, create databases and collections, and practice CRUD operations to understand how data is stored and managed in MongoDB.

---

## Work Done

- Installed and configured MongoDB Compass.
- Created a new database and collection.
- Inserted sample documents.
- Retrieved documents using MongoDB queries.
- Updated existing records.
- Deleted selected documents.
- Successfully performed all CRUD operations using MongoDB Compass.

---

## Practical Implementation

| Implementation | File |
|----------------|------|
| MongoDB CRUD Commands | `mongodb-crud.js` |
| Sample Documents | `students.json` |

---

## Learning Outcomes

- Understood the fundamentals of MongoDB.
- Learned the difference between SQL and NoSQL databases.
- Gained practical experience in creating databases and collections.
- Learned how documents are stored in MongoDB.
- Practiced CRUD operations using MongoDB Compass.
- Developed a strong foundation for integrating MongoDB with Node.js applications.

---

## Conclusion

The session provided a comprehensive introduction to MongoDB and its role in the MERN Stack. Through practical implementation using MongoDB Compass, I learned how to create databases, manage collections, and perform CRUD operations on documents. These concepts establish the database foundation required for developing full-stack MERN applications and will be extended further using Mongoose in the next session.
