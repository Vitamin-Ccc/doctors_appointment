import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "semantic-ui-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let usersRes = await axios.get("/api/users");
    setUsers(usersRes.data);
    console.log(usersRes.data);
  }

  const renderUsers = () => {
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
              <Button basic color='red'>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
    </div>
      )
    })
  }


  return (
    <div> 
      <h1> List of Users </h1>
      <Card.Group>{renderUsers()}</Card.Group>
    </div>
  )
};

export default Users;