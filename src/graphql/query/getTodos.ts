export const getTodosQuery = /* GraphQL */ `
  query GetTodos {
    getTodos {
      id
      createdAt
      updatedAt
      title
      status
      userId
    }
  }
`;
