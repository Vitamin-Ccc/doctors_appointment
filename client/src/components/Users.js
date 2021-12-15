import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Divider } from "semantic-ui-react";
import UserForm from "./UserForm";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
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
    let doctorsRes = await axios.get("/api/doctors");
    setDoctors(doctorsRes.data);
    let appointmentsRes = await axios.get("/api/appointments");
    setAppointments(appointmentsRes.data);
  };
    // console.log(usersRes.data
  

  const addUser = async (addedUser) => {
    console.log("addUser hit")
    const newUser = {first_name: new_first_name, last_name: new_last_name, gender: new_gender, age: new_age}
    let res = await axios.post("/api/users", addedUser);
    setUsers([addedUser, ...users])
  }
  
  const deleteUser = async (id) => {
    let res = await axios.delete(`/api/users/${id}`)
    setUsers(users.filter((u) => u.id !== id))
    console.log(res)
  }

  const editUser = async (editedUser) => {
    let res = await axios.put(`/api/users/${editedUser.id}`, editedUser);
    let updatedUsers = users.map((u) => (u.id === editedUser.id ? editedUser : u));
    setUsers(updatedUsers);
  }
  console.log(users)

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
            <Card.Description>
            ID: {user.id}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              <Button onClick={()=> deleteUser(user.id)} basic color='red'>
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
       <UserForm users={users} editUser={editUser} addUser={addUser}/>
      <Divider />
      
      <Card.Group>{renderUsers()}</Card.Group>
    </div>
  )
  };

export default Users;