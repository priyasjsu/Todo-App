# Todo-App

A simple Todo application built with React, Node.js, and TypeScript. This application allows users to add, edit, delete, and toggle the completion status of todo items. The backend is powered by Node.js and MongoDb and serves as an API for CRUD operations, while the frontend is built with React and TypeScript for a robust and type-safe user interface.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new todo items
- Edit existing todo items
- Delete todo items
- Toggle the completion status of todos
- Persistent storage with a Node.js backend
- Type-safe frontend using TypeScript

## Technologies

- **Frontend:**
  - React
  - TypeScript
  - CSS Modules (or other styling solutions)
  - React Router (for routing)

- **Backend:**
  - Node.js
  - Express.js
  - TypeScript
  - MongoDB (or other database solutions)

## Installation

### Backend 
Note: Setup a MongoDb cluster and add the credential to nodemon.json file
```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
npm install
npm start
```
### Frontend

1. Clone the repository:
```bash
  
   cd todo-app/client/my-app
   npm install
   npm start
```
### Usage
Open your browser and navigate to http://localhost:3000 to access the frontend application.
Use the UI to add, edit, delete, and manage your todo items.
The backend API handles CRUD operations and persists data.

### API Endpoints
Todos
GET /todos - Retrieve all todos
POST /add-todo - Create a new todo
PUT /edit-todo/
- Update an existing todo
DELETE /delete-todo/
- Delete a todo

### Contributing
Contributions are welcome! Please follow these steps:
Fork the repository.
Create a feature branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.

   
