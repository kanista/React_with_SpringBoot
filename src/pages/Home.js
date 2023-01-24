import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users,setUsers]=useState([]);

    const {id}= useParams();

    useEffect(()=>{
        loadUsers();
    },[]);


    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users");
       
        console.log(result.data);
        setUsers(result.data);
    };

    const deleteUser=async(id)=>{
       await axios.delete(`http://localhost:8080/user/${id}`);
       loadUsers();

    }

  return (
    <div ClassName='container'>
        <div className="p-4">
            <table className="table border shadow text-center">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                users.map((user,index)=>(
                <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className='btn btn-primary mx-2' to={`view/${user.id}`} >View</Link>
                        <Link className='btn btn-outline-primary mx-2'
                        to={`edit/${user.id}`}>Edit</Link>
                        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Detele</button>
                    </td>
                </tr>
                ))
                }
            
            </tbody>
            </table>
        </div>
        
    </div>
  )
}
