
import './App.css';
import Main from "./Main"
import NavBarr from "./NavBarr"
import MechanicList from "./MechanicList"
import BookAppointment from "./BookAppointment"
import Appointments from "./Appointments"
import { Route, Switch } from 'react-router-dom';
// import { useState } from 'react';

function App() {
  
 

  return (
  <div className="App">
   
    <NavBarr/>

    <Switch>

    <Route exact path="/mechaniclist">
    <MechanicList/>
    </Route>

    <Route exact path="/bookappointments">
    <BookAppointment />
    </Route>

    <Route exact path="/appointments">
    <Appointments />
    </Route>

    <Route exact path="/">
    <Main/>
    </Route>
    </Switch>
  </div>
  );
}

export default App;
