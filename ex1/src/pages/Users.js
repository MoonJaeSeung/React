import React, { useEffect, useState } from 'react'
import axios from 'axios';
import UserList from '../components/UserList'
import Spinner from '../components/Spinner';

const Users = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response)
            setUsers(response.data);
            setLoading(false);
        })
    }, []);

    useEffect(()=>{
        console.log(users)
    },[users])

  return (
    <>
    <h1>Users</h1>
    {loading ? <Spinner/> :
    <UserList users={users}/> }
    </>
  )
}

export default Users
