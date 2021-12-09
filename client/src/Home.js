import React from "react";
import './App.css';
import Users from './components/Users';
import Doctors from './components/Doctors';
import { Divider } from 'semantic-ui-react';
import Appointments from './components/Appointments';

function App() {
  return (
    <div className="App">
      <Users />
      <Divider/>
      <Doctors />
      <Divider/>
      <Appointments/>
    </div>
  );
}

export default App;
