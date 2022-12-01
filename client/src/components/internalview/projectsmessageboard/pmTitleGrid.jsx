import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
// project name 
// pmBoard
// employees
const PmTitleGrid = ({title}) => (
  <Comment.Group>
    <Header className="w-100 text-white text-center" as='h1' >
      {title} Message Board
    </Header>
    {/*{single.title} */}
  </Comment.Group>
)

export default PmTitleGrid