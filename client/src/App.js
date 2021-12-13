import './App.css';
import Users from './components/Users';
import Doctors from './components/Doctors';
import Appointments from './components/Appointments';
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import AppointmentForm from './components/Appointment Form';
import DoctorEditForm from './components/DoctorEditForm';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path = "/" element = {<Users />} />
        <Route path = "/doctors" element = {<Doctors />} />
        <Route path = "/doctors/:id/edit" element = {<DoctorEditForm />} />
        <Route path = "/appointments" element = {<Appointments />} />
        <Route path = "/appointments/:id/edit" element = {<AppointmentForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
