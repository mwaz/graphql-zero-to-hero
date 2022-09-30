const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("../schema");
const { Query } = require("../resolvers/Query");
const { Mutation } = require("../resolvers/Mutation");
const { db } = require("../db");

describe("test product functionalities", () => {
  // create a test server to test against, using our production typeDefs,
  // resolvers, and context.

  const testServer = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
    },
    context: {
      db,
    },
  });

  // Begin individual test cases

  // test fetching all products
  it("returns a list of products", async () => {
    const result = await testServer.executeOperation({
      query: `
            query{
             todos {
               title
               description
             }
            }
        `,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data.todos).toBeDefined();
    expect(result.data.todos.length).toBe(2);
  });
  // test fetching a single product
  it("fetch a single product using an id", async () => {
    const result = await testServer.executeOperation({
      query: `
            query($todoId: ID!){
                todo(id: $todoId) {
                  title
                  description
                }
              }
        `,
      variables: {
        todoId: "73a0724c-a416-4cac-ae45-bfaedce1f19f",
      },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data.todo).toBeDefined();
  });

  // test update product
  it("update a product", async () => {
    const result = await testServer.executeOperation({
      query: `
                mutation($updateTodoId: ID!, $input: updateTodoInput!){
                    updateTodo(id: $updateTodoId, input: $input) {
                      title
                    }
                  }
            
            `,
      variables: {
        updateTodoId: "53a0724c-a416-4cac-ae45-bfaedce1f147",
        input: {
          title: "Learn Modern GraphQL",
        },
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data.updateTodo).toBeDefined();
    expect(result.data.updateTodo.title).toBe("Learn Modern GraphQL");
  });
  // test delete product
  it("delete a product", async () => {
    const result = await testServer.executeOperation({
      query: `
                mutation($deleteTodoId: ID!){
                    deleteTodo(id: $deleteTodoId)
                  }
            `,
      variables: {
        deleteTodoId: "73a0724c-a416-4cac-ae45-bfaedce1f19f",
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data.deleteTodo).toBe(true);
  });
});
