import './App.css';
import Users from './components/Users';
import Doctors from './components/Doctors';
import Appointments from './components/Appointments';
import {Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path = "/" element = {<Users />} />
        <Route path = "/doctors" element = {<Doctors />} />
        <Route path = "/appointments" element = {<Appointments />} />
      </Routes>
    </div>
  );
}

export default App;
