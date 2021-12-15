import React, { useEffect, useState } from "react";
import { Button, Form, Select } from "semantic-ui-react";

const UserForm = (props) => {
  const { editUser, addUser } = props
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
      if (user_id == user.id){
        setUser(user);
        setFirst_name(user.first_name)
        setLast_name(user.last_name)
        setGender(user.gender)
        setAge(user.age)
      } else {
        setUser("");
        setFirst_name("")
        setLast_name("")
        setGender("");
        setAge("");
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
    
      let choices = props.users.map((u) => {
      let uname = `${u.first_name} ${u.last_name}`

      // setUser({key: u.id, value: u.id, text: uname, gender: u.gender, age: u.age});
      return { key: u.id, value: u.id, text: uname, gender: u.gender, age: u.age }
    })

    choices.push({key:0, value:0, text: "New User"})
    return choices;
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
        return editUser({
          first_name: first_name,
          last_name: last_name,
          gender: gender,
          age: age,
          id: user_id
       }) 
      } else {
        return addUser({
          first_name: first_name,
          last_name: last_name,
          gender: gender,
          age: age,
        })
      }
  };

  return (
    <div >
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          {user.id ? (`User Id: ${user.id}`) : "Add User" }
          <label>
            {user.id ? "Edit" : "Add a user below or select a user to Edit with the drop-down menu"}
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
          placeholder={user.first_name ? user.first_name : "First Name"}
          onChange={(e)=>setFirst_name(e.target.value)}
          value={ first_name }
          />
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
          <Form.Input
               placeholder={user.last_name ? user.last_name : "Last Name"}
               onChange={(e)=>setLast_name(e.target.value)}
               value={ last_name }
               name="last_name"
               />
        </Form.Field>
        <Form.Field>
        <label>Gender</label>
          <Form.Input
               placeholder={user.gender ? user.gender : "Gender"}
               onChange={(e)=>setGender(e.target.value)}
               value={ gender }
               />
        </Form.Field>
        <Form.Field>
        <label>Age</label>
          <Form.Input
               placeholder={user.age ? user.age : "Age"}
               onChange={(e)=>setAge(e.target.value)}
               value={ age }
               />
        </Form.Field>
        <Button>{user.id ? "Edit" : "Add"}</Button>
      </Form>
    </div>
  )

}

export default UserForm;