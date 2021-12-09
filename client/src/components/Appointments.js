import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Label, Table } from "semantic-ui-react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let appointmentsRes = await axios.get("/api/appointments");
    setAppointments(appointmentsRes.data);
    console.log(appointmentsRes.data);
  }

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
              <Button basic color='red'>
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
    </div>
  )
};

export default Appointments;

<Table celled>
<Table.Header>
  <Table.Row>
    <Table.HeaderCell>Patient Name</Table.HeaderCell>
    <Table.HeaderCell>Doctor Name</Table.HeaderCell>
    <Table.HeaderCell>Date</Table.HeaderCell>
    <Table.HeaderCell>Description</Table.HeaderCell>
  </Table.Row>
</Table.Header>

<Table.Body>
  <Table.Row>
    <Table.Cell>
      <Label ribbon></Label>
    </Table.Cell>
    <Table.Cell>Cell</Table.Cell>
    <Table.Cell>Cell</Table.Cell>
  </Table.Row>
</Table.Body>


</Table>