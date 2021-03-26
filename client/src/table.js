import _ from 'lodash';
import React from 'react';
import Posts from './postsModel';
import { Table } from 'semantic-ui-react';


// function Reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_SORT':
//       if (state.column === action.column) {
//         return {
//           ...state,
//           data: state.data.slice().reverse(),
//           direction:
//             state.direction === 'ascending' ? 'descending' : 'ascending',
//         }
//       }

//       return {
//         column: action.column,
//         data: _.sortBy(state.data, [action.column]),
//         direction: 'ascending',
//       }
//     default:
//       throw new Error()
//   }
// }

function DataTable (){
  //   const [state, dispatch] = React.useReducer(Reducer, {
  //     column: null,
  //     data: PostsRaw(),
  //     direction: null,
  //   })
  // const { column, data, direction } = state
return (
<Table inverted>
  <Table.Header>
  <Table.Row>
    <Table.HeaderCell>Post ID</Table.HeaderCell>
    <Table.HeaderCell>User ID</Table.HeaderCell>
    <Table.HeaderCell>Post Title</Table.HeaderCell>
    <Table.HeaderCell>Post Body</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
  <Posts></Posts>

  {/* { data.map(({id,userId, title, body})=>(
      <Table.Row key={id}><Table.Cell>{id}</Table.Cell><Table.Cell>{userId}</Table.Cell><Table.Cell>{title}</Table.Cell><Table.Cell>{body}</Table.Cell></Table.Row>
  ))}; */}
  </Table.Body>
</Table>
)
}

export default DataTable;