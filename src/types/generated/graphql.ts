export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type AddTodoInput = {
  title: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  addTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  deleteTodo?: Maybe<Todo>;
  createUser?: Maybe<User>;
  updateUser?: Maybe<User>;
};


export type MutationAddTodoArgs = {
  input: AddTodoInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['Int'];
  input: UpdateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Int'];
};


export type MutationCreateUserArgs = {
  id: Scalars['String'];
  input: UserInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  input: UserInput;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  getTodos: Array<Todo>;
  getTodoById?: Maybe<Todo>;
};


export type QueryGetTodoByIdArgs = {
  id: Scalars['Int'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  title: Scalars['String'];
  status: TodoStatus;
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type TodoStatus =
  | 'done'
  | 'pending';

export type UpdateTodoInput = {
  title: Scalars['String'];
  status: TodoStatus;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  todos?: Maybe<Array<Maybe<Todo>>>;
};

export type UserInput = {
  name: Scalars['String'];
};

export type AddTodoMutationVariables = Exact<{
  addTodoInput: AddTodoInput;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', addTodo?: Maybe<{ __typename?: 'Todo', id: number, createdAt?: Maybe<any>, updatedAt?: Maybe<any>, title: string, status: TodoStatus, userId: string, user?: Maybe<{ __typename?: 'User', id?: Maybe<string>, name?: Maybe<string> }> }> };

export type CreateUserMutationVariables = Exact<{
  createUserId: Scalars['String'];
  createUserInput: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: Maybe<{ __typename?: 'User', id?: Maybe<string> }> };

export type DeleteTodoMutationVariables = Exact<{
  deleteTodoId: Scalars['Int'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo?: Maybe<{ __typename?: 'Todo', id: number, createdAt?: Maybe<any>, updatedAt?: Maybe<any>, title: string, status: TodoStatus, userId: string, user?: Maybe<{ __typename?: 'User', id?: Maybe<string>, name?: Maybe<string> }> }> };

export type UpdateTodoMutationVariables = Exact<{
  updateTodoId: Scalars['Int'];
  updateTodoInput: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: Maybe<{ __typename?: 'Todo', id: number, createdAt?: Maybe<any>, updatedAt?: Maybe<any>, title: string, status: TodoStatus, userId: string, user?: Maybe<{ __typename?: 'User', id?: Maybe<string>, name?: Maybe<string> }> }> };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', getTodos: Array<{ __typename?: 'Todo', id: number, createdAt?: Maybe<any>, updatedAt?: Maybe<any>, title: string, status: TodoStatus, userId: string, user?: Maybe<{ __typename?: 'User', id?: Maybe<string>, name?: Maybe<string> }> }> };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', getUser?: Maybe<{ __typename?: 'User', id?: Maybe<string>, name?: Maybe<string>, todos?: Maybe<Array<Maybe<{ __typename?: 'Todo', id: number, createdAt?: Maybe<any>, updatedAt?: Maybe<any>, title: string, status: TodoStatus }>>> }> };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "addTodo",
            "type": {
              "kind": "OBJECT",
              "name": "Todo",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateTodo",
            "type": {
              "kind": "OBJECT",
              "name": "Todo",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteTodo",
            "type": {
              "kind": "OBJECT",
              "name": "Todo",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "getUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "getTodos",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Todo",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "getTodoById",
            "type": {
              "kind": "OBJECT",
              "name": "Todo",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Todo",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "todos",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "Todo",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;