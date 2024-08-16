import React from 'react';
import "./index.scss"
interface IUser {
    user: {
        username: string;
        password: string;
        email: string;
        address: string;
    }
}
const Userdata = ({user}:IUser) => {
  return (
    <div className='container'>
          <h2>username:  {user.username}</h2>
          <h2>password: {user.password}</h2>
          <h2>  email:  {user.email}</h2>
          <h2 className='lastchild'> address: {user.address}</h2>
    </div>
  )
}

export default Userdata
