import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";


const AppointmentForm = (props) => {
  const { addAppointment} = props;
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState({});
  const [user, setUser] = useState({});
  const [doctor_id, setDoctor_Id] = useState("");
  const [user_id, setUser_Id] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props.users)
    console.log({ doctor_id, user_id, date, description });
    let u = props.users.filter((u)=> u.id == user_id);
    setUser(u[0])
    let d = props.doctors.filter((d)=> d.id == doctor_id)
    setDoctor(d[0]);
    return addAppointment( {doctor_id, user_id, description, date, user, doctor} );
    
  };

  console.log(props.users);
  return (
    <Form onSubmit={handleSubmit}>
      <h1> Appointment Form </h1>
      <Form.Field>
        <label>user id</label>
        <Form.Input
          value={user_id}
          onChange={(e, { value }) => setUser_Id(value)}
        />
      </Form.Field>
      <Form.Field>
        <label>doctor id</label>
        <Form.Input
          value={doctor_id}
          onChange={(e, { value }) => setDoctor_Id(value)}
        />
      </Form.Field>
      <Form.Field>
        <label>date</label>
        <Form.Input
          value={date}
          onChange={(e, { value }) => setDate(value)}
        />
      </Form.Field>
      <Form.Field>
        <label>description</label>
        <Form.Input
          value={description}
          onChange={(e, { value }) => setDescription(value)}
        />
      </Form.Field>

      <Button type='submit'>add</Button>
    </Form>
  );
};

export default AppointmentForm;