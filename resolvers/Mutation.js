// Mutation.js:
const { v4: uuid } = require("uuid");

exports.Mutation = {
  addTodo: (parent, { input }, { db }) => {
    const { title, description, isDone, date } = input;
    const newTodo = {id: uuid(),title,description,isDone,date};
    db.todos.push(newTodo);
    return newTodo;
  },
  // Delete methods

  deleteTodo: (parent, { id }, { db }) => {
    const todoIndex = db.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) return false;
    db.todos = db.todos.filter((todo) => todo.id !== id);
    return true;
  },

  // Update methods

  updateTodo: (parent, { id, input }, { db }) => {
    const todoIndex = db.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) return false;
    db.todos[todoIndex] = {
      ...db.todos[todoIndex],
      ...input,
    };
    return db.todos[todoIndex];
  },
};
