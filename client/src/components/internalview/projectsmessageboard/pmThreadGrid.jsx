import React from 'react'
import {  Comment } from 'semantic-ui-react'
// project name 
// pmBoard
// employees
const PmThreadGrid = ({message}) => (
    <Comment>
      {/* dynamically generated from comment
      avatar=icon of user
      author fName + Lname
      Text 
     */}
      <Comment.Content>
            <Comment.Author className="text-white"as='a'> {message.owner.firstName} {message.owner.lastName}</Comment.Author>
          {/* {single.employee} */}
            <Comment.Text className="text-white"> {message.body}</Comment.Text>
          {/* {single.text} */}
        </Comment.Content>
    </Comment>
)

export default PmThreadGrid