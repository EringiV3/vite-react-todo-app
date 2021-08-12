import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQuery } from 'urql';
import { createUserMutation } from '../graphql/mutation/createUser';
import { getUserQuery } from '../graphql/query/getUser';
import {
  CreateUserMutation,
  CreateUserMutationVariables,
  GetUserQuery,
  GetUserQueryVariables,
} from '../types/generated/graphql';

const CallbackScreen: React.FC = () => {
  const history = useHistory();
  const { user } = useAuth0();
  const [{ data, fetching }] = useQuery<GetUserQuery, GetUserQueryVariables>({
    query: getUserQuery,
    pause: !user,
  });
  const [_, createUser] = useMutation<
    CreateUserMutation,
    CreateUserMutationVariables
  >(createUserMutation);

  console.log({ user, data });

  useEffect(() => {
    if (fetching) return;
    if (!user) return;
    if (!data?.getUser) {
      createUser({
        createUserId: user.sub as string,
        createUserInput: {
          name: user.name as string,
        },
      })
        .then((data) => {
          console.log({ user: data.data?.createUser });
          history.push('/todo');
        })
        .catch((e) => console.error(e));
    }
  }, [data, fetching]);
  return <div>Loading...</div>;
};

export default CallbackScreen;
