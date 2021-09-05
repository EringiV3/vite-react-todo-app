export const updateTodoMutation = /* GraphQL */ `
  mutation UpdateTodo($updateTodoId: Int!, $updateTodoInput: UpdateTodoInput!) {
    updateTodo(id: $updateTodoId, input: $updateTodoInput) {
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
