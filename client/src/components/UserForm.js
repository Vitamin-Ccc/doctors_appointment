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
    <div>
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
    </div>
  )

}

export default UserForm;



// import axios from 'axios';
// import React, {useState, useEffect} from 'react';
// import { useParams, useNavigate } from 'react-router';


// const UserForm = () => {


//   const handleSubmit = async (e) => {
//     // this prevents a reload
//     e.preventDefault();
//     console.log({ name: name, location: location, move: move, poketype: poketype });
//     const pokemon = { name: name, location: location, move: move, poketype: poketype };

//     if (params.id) {
//       // update logic here
//       try {
//         let response = await axios.put(`/api/pokemons/${params.id}`, pokemon);
//         console.log(response.data);
//         // need update UI (update response.data in items)
//         navigate("/");
//       } catch (err) {
//         alert(`${err.response.data.errors}`);
//         console.log(err);
//         console.log(err.response);
//         console.log(err.response.data.errors);
//       }
//     } else {
//       // creaete logic here
//       // axios call here
//       // save to database DONE
//       try {
//         let response = await axios.post("/api/pokemons", pokemon);
//         navigate("/");
//         // need update  (add response.data to items)
//       } catch (err) {
//         alert("err occured");
//         console.log(err);
//         console.log(err.response);
//       }
//     }
//   };
//   return (
//     <div>
//       <h1>{params.id ? "Edit" : "New"} Pokemon </h1>
//       <form onSubmit={handleSubmit}>
//         <p>Name</p>
//         <input value={name} onChange={(e) => setFirst_name(e.target.value)} />
//         <p>Location</p>
//         <input value={location} onChange={(e) => setLast_name(e.target.value)} />
//         <p>Move</p>
//         <input value={move} onChange={(e) => setAge(e.target.value)} />
//         <p>Type</p>
//         <input value={poketype} onChange={(e) => setType(e.target.value)} />
//         <p>Type</p>
//         <input value={poketype} onChange={(e) => setGender(e.target.value)} />
//         <button>{params.id ? "Update" : "Create"} </button>
//       </form>
//     </div>
//   );
// };


// export default UserForm;