import React from 'react'

function Post({ post }) {
    const { userId, id, title, body } = post;
  return (
    <div>
          <h4>User Id : {userId}</h4>
          <h4>Id :{id}</h4>
          <h4>Title: {title}</h4>
          <h5>Body: {body}</h5>
          <h4></h4>
    </div>
  )
}

export default Post
