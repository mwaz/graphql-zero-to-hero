// Query.js
exports.Query = {
  todos: (parent, args, { db }) => db.todos,
  todo: (parent, { id }, { db }) => {
    return db.todos.find((todo) => todo.id === id);
  }
};
