import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
// import { useNavigate } from "react-router"

const DoctorForm = (props) => {
  const {addDoctor} = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");
  // Optional
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    let DoctorData = {first_name: firstName, last_name: lastName, specialty: specialty};
    let docRes = await axios.post(`/api/doctors`, DoctorData);
    addDoctor(docRes.data);
  }

  return (
    <div>
      <h1>Add New Doctor</h1>
      <Form onSubmit = {handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input 
            placeholder='First Name' 
            value = {firstName} 
            onChange = {(e) => {
              setFirstName(e.target.value)
            }} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input 
            placeholder='Last Name' 
            value = {lastName} 
            onChange = {(e) => {
              setLastName(e.target.value)
            }
            }/>
        </Form.Field>
        <Form.Field>
          <label>Specialty</label>
          <input 
          placeholder='Specialty' 
          value = {specialty} 
          onChange = {(e) => {
            setSpecialty(e.target.value)
          }}/>
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default DoctorForm;