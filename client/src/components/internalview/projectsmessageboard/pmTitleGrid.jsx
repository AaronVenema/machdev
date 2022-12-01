import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
// project name 
// pmBoard
// employees
const PmTitleGrid = ({title}) => (
  <Comment.Group>
    <Header className="text-white" as='h3' dividing>
      {title}
    </Header>
    {/*{single.title} */}
    </Comment.Group>
)

export default PmTitleGrid