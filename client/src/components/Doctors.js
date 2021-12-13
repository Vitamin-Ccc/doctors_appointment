import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Divider } from "semantic-ui-react";
import DoctorForm from "./DoctorForm";
import { Link } from "react-router-dom";

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

  const deleteDoctor = async (id) => {
    await axios.delete(`/api/doctors/${id}`);
    setDoctors(doctors.filter((d) => d.id !== id));
  };

  const addDoctor = (doctor) => {
    setDoctors([doctor, ...doctors]);
  };

  const renderDoctors = () => {
    return doctors.map((doctor) => {
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
                  <Link to={`/doctors/${doctor.id}/edit`} state = {{doctor}}>
                    Edit
                  </Link>
                </Button>
                <Button basic color='red' onClick={() => deleteDoctor(doctor.id)}>
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
      <DoctorForm addDoctor={addDoctor} />
      <Divider />
      <h1> List of Doctors </h1>
      <Card.Group>{renderDoctors()}</Card.Group>
    </div>
  )
};

export default Doctors;