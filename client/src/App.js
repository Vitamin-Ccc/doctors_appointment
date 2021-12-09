import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Doctors from './Doctors';
import { Divider } from 'semantic-ui-react';
import Appointments from './Appointments';

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
