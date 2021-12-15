import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";



const AppointmentEditForm = (props) => {
  const { addAppointment, updateAppointment, appointments, users, doctors } = props;
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");
  const [user, setUser] = useState("");
  const [doctor_id, setDoctor_Id] = useState("");
  const [user_id, setUser_Id] = useState("");



  useEffect(() => {
    getData();
  }, [])

  const getData = async (appointment) => {
    let res = await axios.get(`/api/appointments/${props.appointment.id}`)
    setDoctor_Id(res.data.doctor_id)
    setUser_Id(res.data.user_id)
    setDate(res.data.date)
    setDescription(res.data.description)
  }


  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log({ doctor_id, user_id, date, description });
    return updateAppointment( {doctor_id, user_id, description, date} );
    
  };
  // console.log(updateAppointment());
  return (
    <Form onSubmit={handleSubmit}>
      <h1> Appointment Edit Form </h1>
      <Form.Field>
        <label>user id</label>
        <Form.Input
          value={user_id}
          onChange={(e) => setUser_Id(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>doctor id</label>
        <Form.Input
          value={doctor_id}
          onChange={(e) => setDoctor_Id(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>date</label>
        <Form.Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>description</label>
        <Form.Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Field>

      <Button type='submit'>Edit</Button>
    </Form>
  );
};

export default AppointmentEditForm;