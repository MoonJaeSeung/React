import React, { useEffect } from 'react'
import axios from 'axios';

const Users = () => {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            console.log(response)
        })
    }, []);
    
  return (
    <div>Users1</div>
  )
}

export default Users
