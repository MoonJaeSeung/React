import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserList from '../components/UserList'

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response)
            setUsers(response.data);
        })
    }, []);

    useEffect(()=>{
        console.log(users)
    },[users])

  return (
    <>
    <div>Users</div>
    <UserList users={users}/>
    </>
  )
}

export default Users
