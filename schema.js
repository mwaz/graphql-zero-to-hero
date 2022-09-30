const { gql } = require("apollo-server");

// This is where we define the structure of our data, similar to a schema

exports.typeDefs = gql`
  type Query {
    todos: [Todo!]!
    todo(id: ID!): Todo!
  }
  type Mutation {
    addTodo: Todo!
    updateTodo(id: ID!, input: updateTodoInput!): Todo!
    deleteTodo(id: ID!): Boolean!
  }
  # Default schemas
  type Todo {
    id: ID!
    title: String!
    description: String!
    isDone: Boolean!
    date: String!
  }
  # Add schemas
  input addTodoInput {
    title: String!
    description: String!
    isDone: Boolean!
    date: String!
  }
  # Update schemas
  input updateTodoInput {
    title: String!
  }
`;