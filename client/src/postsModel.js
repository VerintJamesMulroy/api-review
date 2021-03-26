import { useQuery, gql } from '@apollo/client';
import { Table } from 'semantic-ui-react';

const POSTS = gql`
  query {posts{
    id
    userId
    title
    body
  }}
`;

function Posts() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) return <Table.Row><Table.Cell>Loading..</Table.Cell></Table.Row>;
  if (error) return <Table.Row><Table.Cell>ERROR</Table.Cell></Table.Row>;
  return data.posts.map(({id,userId, title, body})=>(
      <Table.Row key={id}><Table.Cell>{id}</Table.Cell><Table.Cell>{userId}</Table.Cell><Table.Cell>{title}</Table.Cell><Table.Cell>{body}</Table.Cell></Table.Row>
  ));
}
function PostsRaw(){
    const { loading, error, data } = useQuery(POSTS);
    return data;
}

export default Posts;
