export const createUserMutation = /* GraphQL */ `
  mutation CreateUser($createUserId: String!, $createUserInput: UserInput!) {
    createUser(id: $createUserId, input: $createUserInput) {
      id
    }
  }
`;
