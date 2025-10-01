import React from 'react'
function Friend({friend}) {
  const { name, email, phone, address} = friend;
  return (
    <div className='card'>
          <h4>Name:{name} </h4>
          <h4>Email : {email}</h4>
          <h4>Phone : {phone}</h4>
          <h4>Address : Street : {address.street}, City : {address.city}</h4>
        <h4>Full Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</h4>
    </div>
  )
}

export default Friend
