
import './App.css';
import Main from "./Main"
import NavBarr from "./NavBarr"
import MechanicList from "./MechanicList"
import BookAppointment from "./BookAppointment"
import Appointments from "./Appointments"
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

function App() {
  
  const[appointments,setAppointements]=useState([])
  console.log("app appointments",appointments)

  function addAppointment(newAppointment){
    setAppointements([...appointments,newAppointment])
  }

  return (
  <div className="App">
   
    <NavBarr/>

    <Switch>

    <Route exact path="/mechaniclist">
    <MechanicList/>
    </Route>

    <Route exact path="/bookappointments">
    <BookAppointment addAppointment={addAppointment}/>
    </Route>

    <Route exact path="/appointments">
    <Appointments appointments={appointments}/>
    </Route>

    <Route exact path="/">
    <Main/>
    </Route>
    </Switch>
  </div>
  );
}

export default App;
