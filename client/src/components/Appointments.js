import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Label, Table, TableRow } from "semantic-ui-react";
import AppointmentForm from "./Appointment Form";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let appointmentsRes = await axios.get("/api/appointments");
    setAppointments(appointmentsRes.data);
    let doctorsRes = await axios.get("/api/doctors");
    setDoctors(doctorsRes.data);
    let usersRes = await axios.get("/api/users");
    setUsers(usersRes.data);
    console.log(appointmentsRes.data);
    console.log(doctorsRes.data);
    console.log(usersRes.data);
  }

    const addAppointment = async (appointment) => {
    try {
      let res = await axios.post(`/api/appointments`, appointment);
      setAppointments([res.data,
        ...appointments,
      ]);
    } catch (err) {
      console.log(err);
      console.log(err.response);
    }
  };

  const deleteAppointment = async (id) => {
    let res = await axios.delete(`/api/appointments/${id}`)
    setAppointments(appointments.filter((a) => a.id !== id))
  };

  const renderAppointments = () => {
    return appointments.map ((appointment)=> {
      return (
        
        <Table.Row>
          <Table.Cell>
            <Label ribbon>{appointment.id}</Label>
          </Table.Cell>
          <Table.Cell>{appointment.user.first_name} {appointment.user.last_name}</Table.Cell>
          <Table.Cell>{appointment.doctor.first_name} {appointment.doctor.last_name}</Table.Cell>
          <Table.Cell>{appointment.date}</Table.Cell>
          <Table.Cell>{appointment.description}</Table.Cell>
          <Table.Cell>            
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              <Button onClick={()=> deleteAppointment(appointment.id)} basic color='red'>
                Delete
              </Button>
            </div></Table.Cell>
        </Table.Row>
    
      )
    })
  }


  return (
    <div> 
      <h1> List of Appointments </h1>
      <Table celled>
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>Appt. ID</Table.HeaderCell>
          <Table.HeaderCell width={4}>Patient Name</Table.HeaderCell>
          <Table.HeaderCell width={4}>Doctor Name</Table.HeaderCell>
          <Table.HeaderCell width={2}>Date</Table.HeaderCell>
          <Table.HeaderCell width={3}>Description</Table.HeaderCell>
          <Table.HeaderCell width={2}>Options</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderAppointments()}</Table.Body>
      </Table>
      <div>
      <AppointmentForm addAppointment = {addAppointment} {...doctors} {...users} {...appointments} />  </div>
    </div>
  )
};

export default Appointments;