import React, { useEffect, useState } from "react";
import { Button, Form, Select } from "semantic-ui-react";

const UserForm = (props) => {
  const { editUser } = props;
  const { addUser } = props;
  const { users } = props;
  const { users } = props;
  const [user_id, setUser_id] = useState("");
  const [user_id, setUser_id] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [form, setForm] = useState(true);
  // const [firstNameForm, setFirstNameForm] = useState("");
  // const [lastNameForm, setLastNameForm] = useState("");
  // const [genderForm, setGenderForm] = useState("");
  // const [ageForm, setAgeForm] = useState("");

  const normalizeUsers = () => {
    return props.users.map((u) => {
      let uname = `${u.first_name} ${u.last_name}`
      // setUser({key: u.id, value: u.id, text: uname, gender: u.gender, age: u.age});
      return { key: u.id, value: u.id, text: uname, gender: u.gender, age: u.age, first_name, last_name }
    })
  const newForm = () => {
      setForm({ form: !form }); 
  };
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   return updateUser({
  //     first_name: first_name,
  //     last_name: last_name,
  //     gender: gender,
  //     age: age,
  //     id: user_id
  //   })
  // };
  const handleEditSubmit = (e) => {
  const newForm = () => {
     try {
      setForm({ form: !form }); 
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   return updateUser({
      });
    } catch (err) {
      alert("error updating user")
    } };
    // return editUser({
    //   first_name: first_name,
    //   last_name: last_name,
    //   gender: gender,
    //   age: age,
    //   id: user_id
    // })
    const handleAddSubmit = (e) => {
      try {
      return addUser({
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        age: age,
      }); 
    } catch (err) {
      alert("error adding user")
    }};
  //     gender: gender,
  //     age: age,
  //     id: user_id
      <Button onClick={newForm}>Add New User</Button>
      
      <Form onSubmit={handleAddSubmit}>
        <Form.Field>
        <label>First Name</label>
          <Form.Input
          value={first_name}
          onChange={(e)=>setFirst_name(e.target.value)}
          placeholder={ user.first_name ? user.first_name : "First Name"}
          />
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
          <Form.Input
               value={last_name}
               onChange={(e)=>setLast_name(e.target.value)}
               placeholder={ user.first_name ? user.last_name : "Last Name"}
               />
        </Form.Field>
        <Form.Field>
        <label>Gender</label>
          <Form.Input
               value={gender}
               onChange={(e)=>setGender(e.target.value)}
               placeholder={ user.first_name ? user.gender : "Gender"}
               />
        </Form.Field>
        <Form.Field>
        <label>Age</label>
          <Form.Input
               value={age}
               onChange={(e)=>setAge(e.target.value)}
               placeholder={ user.first_name ? user.age : "Age"}
               />
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    
      <Form onSubmit={handleEditSubmit}>
  // };
  const handleEditSubmit = (e) => {
    e.preventDefault();
     try {
      return editUser({
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        age: age,
        id: user_id
      });
    } catch (err) {
      alert("error updating user")
    } };
    // return editUser({
    //   first_name: first_name,
    //   last_name: last_name,
    //   gender: gender,
    //   age: age,
    //   id: user_id
    // })
    const handleAddSubmit = (e) => {
      try {
      return addUser({
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        age: age,
      }); 
    } catch (err) {
      alert("error adding user")
    }};

  return (
    <div>
      <Button onClick={newForm}>Add New User</Button>
      
      <Form onSubmit={handleAddSubmit}>
        <Form.Field>
        <label>First Name</label>
          <Form.Input
          value={first_name}
          onChange={(e)=>setFirst_name(e.target.value)}
          placeholder={ user.first_name ? user.first_name : "First Name"}
          />
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
          <Form.Input
               value={last_name}
               onChange={(e)=>setLast_name(e.target.value)}
               placeholder={ user.first_name ? user.last_name : "Last Name"}
               />
      </Form>
    </div>
  )

}

export default UserForm;

