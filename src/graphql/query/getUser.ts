export const getUserQuery = /* GraphQL */ `
  query GetUser {
    getUser {
      id
      name
      todos {
        id
        createdAt
        updatedAt
        title
        status
      }
    }
  }
`;
