export const deleteTodoMutation = /* GraphQL */ `
  mutation DeleteTodo($deleteTodoId: Int!) {
    deleteTodo(id: $deleteTodoId) {
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
