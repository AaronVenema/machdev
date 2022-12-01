import React from 'react'
import {  Comment } from 'semantic-ui-react'
// project name 
// pmBoard
// employees
const PmThreadGrid = () => (
    <Comment>
      {/* dynamically generated from comment
      avatar=icon of user
      author fName + Lname
      Text 
     */}
      <Comment.Content>
        <Comment.Author className="text-white"as='a'> employee name ph</Comment.Author>
        {/* {single.employee} */}
        <Comment.Text className="text-white"> text placeholder</Comment.Text>
        {/* {single.text} */}
      </Comment.Content>
    </Comment>
)

export default PmThreadGrid