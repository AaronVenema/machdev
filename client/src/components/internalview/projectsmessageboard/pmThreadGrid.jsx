import React from 'react'
import {  Comment } from 'semantic-ui-react'
// project name 
// pmBoard
// employees
const PmThreadGrid = ({message}) => (
    <Comment >
      {/* dynamically generated from comment
      avatar=icon of user
      author fName + Lname
      Text 
     */}
      <Comment.Content className='bg-secondary text-center w-25 '>
            <Comment.Author className="text-info fw-bold" as='a'> {message.owner.firstName} {message.owner.lastName}</Comment.Author>
          {/* {single.employee} */}
            <Comment.Text className="text-white"> {message.body}</Comment.Text>
          {/* {single.text} */}
        </Comment.Content>
    </Comment>
)

export default PmThreadGrid