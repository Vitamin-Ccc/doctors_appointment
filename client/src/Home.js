import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
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
        <h1> {user.first_name}</h1>
      )
    })
  }


  return (
    <div> 
      <h1> Home Here </h1>
      <p>{renderUsers()}</p>
    </div>
  )
};

export default Home;