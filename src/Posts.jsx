import React, { use } from 'react'
import Post from './Post';

function Posts({ postPromise }) {
    const posts = use(postPromise);
  return (
    <div  className='card'>
          <h2>All Posts are here.</h2>
          <h2>Total count of the post : {posts.length}</h2>
          {
              posts.map(post => <Post key={post.id} post = {post} /> )
          }
    </div>
  )
}

export default Posts
