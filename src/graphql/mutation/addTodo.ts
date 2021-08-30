export const addTodoMutation = /* GraphQL */ `
  mutation AddTodo($addTodoInput: AddTodoInput!) {
    addTodo(input: $addTodoInput) {
      id
      createdAt
      updatedAt
      title
      description
      status
      user {
        id
        name
      }
      userId
    }
  }
`;
