export const getTodosQuery = /* GraphQL */ `
  query GetTodos {
    getTodos {
      id
      createdAt
      updatedAt
      title
      status
      user {
        id
        name
      }
      userId
    }
  }
`;
