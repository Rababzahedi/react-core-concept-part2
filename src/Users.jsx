import React from 'react'
import {use} from "react"

function Users({fetchUsers}) {
    const users = use(fetchUsers);
  return (
    <div className='card'>
      <h3>Users: {users.length} </h3>
    </div>
  )
}

export default Users
