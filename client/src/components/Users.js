import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Divider } from "semantic-ui-react";
import UserForm from "./UserForm";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [new_first_name, setNew_first_name] = useState("");
  const [new_last_name, setNew_last_name] = useState("");
  const [new_age, setNew_age] = useState("");
  const [new_gender, setNew_gender] = useState("");
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let usersRes = await axios.get("/api/users");
    setUsers(usersRes.data);
    // console.log(usersRes.data
  }

  const addUser = async () => {
    const newUser = {first_name: new_first_name, last_name: new_last_name, gender: new_gender, age: new_age}
    let res = await axios.post("/api/users", newUser);
  }
  
  const deleteUser = async (user) => {
    let res = await axios.delete(`/api/users/${user.id}`)
    setUsers([ ...users])
    console.log(users.type)
  }

  const editUser = async (editedUser) => {
    let res = await axios.put(`/api/users/${editedUser.id}`, editedUser);
    // let updatedUsers = users.map((u) => (u.id === editedUser.id ? editedUser : u));
    setUsers([editedUser, ...users ]);
  }

  const renderUsers = () => {
    console.log(users)
    return users.map ((user)=> {
      return (
        <div>
        <Card>
          <Card.Content>
            <Card.Header>{user.first_name} {user.last_name}</Card.Header>
            <Card.Meta>Gender: {user.gender}</Card.Meta>
            <Card.Description>
            Age: {user.age}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              <Button onClick={()=> deleteUser(user)} basic color='red'>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
    </div>

      )
    })
  }

  // console.log(users)

  return (
    <div> 
      
      <h1> List of Users </h1>
        
      <Divider />
       <UserForm users={users} editUser={editUser}/>
      <Divider />
      
      <Card.Group>{renderUsers()}</Card.Group>
    </div>
  )
};

export default Users;