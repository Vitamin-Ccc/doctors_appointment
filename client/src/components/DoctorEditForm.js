import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form } from "semantic-ui-react";

const DoctorEditForm = (props) => {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [specialty, setSpecialty] = useState("")
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    let res = await axios.get(`/api/doctors/${params.id}`)
    setFirstName(res.data.first_name)
    setLastName(res.data.last_name)
    setSpecialty(res.data.specialty)
  }

  const handleSubmit = async (e) => {
    let doctorData = {first_name, last_name, specialty}
    let res = await axios.put(`/api/doctors/${params.id}`, doctorData);
    console.log(doctorData)
    navigate(`/doctors`)
  }

  return(
    <div>
    <h1>Edit Doctor</h1>
    <Form onSubmit = {handleSubmit}>
      <Form.Field>
        <label>First Name</label>
        <input 
          value = {first_name} 
          onChange = {(e) => {
            setFirstName(e.target.value)
          }} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input 
          value = {last_name} 
          onChange = {(e) => {
            setLastName(e.target.value)
          }
          }/>
      </Form.Field>
      <Form.Field>
        <label>Specialty</label>
        <input 
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

export default DoctorEditForm;