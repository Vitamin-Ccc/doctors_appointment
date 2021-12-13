import React, { useEffect, useState } from "react";
import { Button, Form, Select } from "semantic-ui-react";

const UserForm = (props) => {
  const { editUser } = props
  const [user, setUser] = useState([]);
  const [user_id, setUser_id] = useState([]);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  
  useEffect(() => {
      setPlaceholder()
  }, [user_id]);

  const setPlaceholder = () => {
    return props.users.filter((user)=>{
      if (user_id === user.id){
        setUser(user);
      }
    })
  }

  // const handleChange = (e) => {
  //   if (e.target.first_name === "first_name") {
  //     setFirst_name({ first_name: e.target.value });
  //   }
  //   if (e.target.last_name === "last_name") {
  //     setLast_name({ last_name: e.target.value });
  //   }
  //   // this.setState({ [e.target.name]: e.target.value });
  // };

  const normalizeUsers = () => {
    return props.users.map((u) => {
      let uname = `${u.first_name} ${u.last_name}`
      // setUser({key: u.id, value: u.id, text: uname, gender: u.gender, age: u.age});
      return { key: u.id, value: u.id, text: uname, gender: u.gender, age: u.age }
    })
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    return editUser({
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      age: age,
      id: user_id
    })
  };

  return (
    <div >
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          user id: {user_id}
          <label>
          Choose Your Name to Edit
          </label>
          <Select 
            options={normalizeUsers()}
            onChange={
              (e, {value}) => setUser_id(value)}
             
          />
        </Form.Field>
        <Form.Field>
        <label>First Name</label>
          <Form.Input
          placeholder={"First Name"}
          onChange={(e)=>setFirst_name(e.target.value)}
          value={ first_name }
          />
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
          <Form.Input
               placeholder={"Last Name"}
               onChange={(e)=>setLast_name(e.target.value)}
               value={ last_name }
               name="last_name"
               />
        </Form.Field>
        <Form.Field>
        <label>Gender</label>
          <Form.Input
               placeholder={"Gender"}
               onChange={(e)=>setGender(e.target.value)}
               value={ gender }
               />
        </Form.Field>
        <Form.Field>
        <label>Age</label>
          <Form.Input
               placeholder={"Age"}
               onChange={(e)=>setAge(e.target.value)}
               value={ age}
               />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  )

}

export default UserForm;