import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card } from "semantic-ui-react";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let doctorsRes = await axios.get("/api/doctors");
    setDoctors(doctorsRes.data);
    console.log(doctorsRes.data);
  }

  const renderDoctors = () => {
    return doctors.map ((doctor)=> {
      return (
        <div>
        <Card>
          <Card.Content>
            <Card.Header>{doctor.first_name} {doctor.last_name}</Card.Header>
            <Card.Meta>{doctor.specialty}</Card.Meta>
            <Card.Description>
            Doctor ID: {doctor.id}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Edit
              </Button>
              <Button basic color='red'>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
    </div>
      )
    })
  }


  return (
    <div> 
      <h1> List of Doctors </h1>
      <Card.Group>{renderDoctors()}</Card.Group>
    </div>
  )
};

export default Doctors;