import { useState } from "react";
import { Button ,Form,Row,Container} from "react-bootstrap";
import Tableappo from "./Tableappo"
import Tableofcostomer from "./Tableofcostomer"

function Appointments() {
  const [stats, setStats] = useState(false)
  const[emps, setEmps] = useState(false)
  const[newEmp, setNewEmp] = useState(false)
  const[quickView, setQuickView] = useState(false)
  const[cust,setCust] = useState(false)
  const[showEach, setShowEach] = useState(false)
  const[showSpecial, setShowSpecial] = useState(false)
  
  
  const[totals, setTotals] = useState([])
  const[staffList, setStaffList] = useState([])
  const[appts, setAppts] = useState([])
  const[custy,setCusty] = useState([])
  const[newStaff,setNewStaff] = useState([])
  const[eachAppt, setEachAppt] = useState([])
  const[special, setSpecial] = useState([])


  const[formData, setFormData] = useState({
    name: '',
    specialty: '',
    picture: '',
  })

  const handleSpecial = e => {
    fetch('http://localhost:9292/').then(r=>r.json()).then( specs => setSpecial(specs.num_mechanics_by_specialty))
    setShowSpecial(!showSpecial)
    setNewEmp(false)
  }

  const getAllMechAppointments = e => {
    fetch('http://localhost:9292/').then(r=>r.json()).then( numbers => setEachAppt(numbers.each_mechanic_appointments))
    setShowEach(!showEach)
    console.log(eachAppt)
  }

  const handleStats = e => {
    fetch('http://localhost:9292/').then(r=>r.json()).then( numbers => setTotals(numbers))
    setStats(!stats)
    setQuickView(false)
    setCust(false)
    setEmps(false)
  }
  const handleEmps = e => {
    fetch('http://localhost:9292/mechanics').then(r => r.json()).then(mechans => setStaffList(mechans))
    setEmps(!emps)
    setQuickView(false)
    setCust(false)
    setNewEmp(false)
    setShowSpecial(false)

  }
  const handleView = e => {
    fetch('http://localhost:9292/appointments').then(r => r.json()).then(appt => setAppts(appt))
    setQuickView(!quickView)
    setEmps(false)
    setNewEmp(false)
    setCust(false)
  }
  const handleCust = e => {
    fetch('http://localhost:9292/customers').then(r => r.json()).then(data => setCusty(data))
    setCust(!cust)
    setEmps(false)
    setQuickView(false)
    setNewEmp(false)

  }

  const handleFire = id => {
    const updateMechanic = staffList.filter(
      (mechanic) => mechanic.id != id
    );
    setStaffList(updateMechanic);
    fetch(`http://localhost:9292/mechanics/${id}`, {
      method: "DELETE", 
      headers: {"Content-Type":"application/json"}
    })
  }


  const addNewEmp = e => {
    setNewEmp(!newEmp)
    
  }


  const HandleNewEmp = (newEmp) => {
   
    fetch('http://localhost:9292/mechanics',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newEmp)
    })
    .then(r=>r.json())
    .then(data => {
      setStaffList([...staffList, data])
      setFormData({name:'', specialty:'', picture:'' })
      alert('New Employee hired.')
    })
  }


  const HandleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("HELOO")
    HandleNewEmp(formData)
  }


  return (
    <div id="mainmanage">

      <div id="biz-totals">
      <Button variant="dark" size="lg" onClick = {handleStats}>
      View Dashboard!
      </Button>
      
        {stats ? <div id="totals">

        <div id="tot-cust">
          <h3>Total Customers</h3>
          <div id="all-cust">{totals.all_customers}</div>
          <Button variant="outline-dark" onClick={handleCust}>Manage Customers</Button>
        </div>

        <div id="tot-appt">
          <h3>Total Appointments</h3>
          <div id="all-appt">{totals.all_appointments}</div>
          <Button variant="outline-dark" onClick = {handleView}>Manage appointments</Button>
        </div>

        <div id="tot-mech">
          <h3>Total Mechanics</h3>
          <div id="all-mech">{totals.all_mechanics}</div>
          <Button variant="outline-dark" onClick ={handleEmps}>Manage Staff</Button>
        </div>

        </div> : <div><img id ="rolls" src ="https://pictures.topspeed.com/IMG/crop/200909/2010-rolls-royce-ghost-20_800x0w.jpg"/></div>}
      </div>
      <div id="emplist">
        {/* EMPLOYEE  LIST */}
        {
        emps ?
        <div id="emp-list">
          <h3>Current Employees:</h3>
          <ul id="staff">
            {staffList.map(staff =>  <div id="staff-list">{staff.name} <Button variant="outline-secondary"size="sm" onClick = {() => handleFire(staff.id)}>Fire Employee</Button> </div>)}
          </ul>
          {/* <ul id="special">
            {}
          </ul> */}
          <Button variant="outline-dark" onClick={addNewEmp}>Add new employee</Button>
          <Button variant="outline-dark" onClick={handleSpecial}>Show Number of mechanics by specialty</Button>
          
          {showSpecial ? 
            <div>
              
              {Object.keys(special).map(function(keyName, keyIndex) {
                return <ul>{keyName} Mechanics: {keyIndex}</ul>
              })}
            </div> 
              : <div> </div>}
            
          <div id="mech=appts">

          </div>
        </div>
        :
        <div></div>
        }
        {/* FORM */}
        {
          newEmp ?
          <div>
          <Container className="p-5">
          <h1>
          Add new employee
          </h1>
          <Row className="mb-3">
          <Form onSubmit={HandleSubmit}>
          <Form.Group className="mb-3">
          <Form.Label>Enter new mechanic name:</Form.Label>
              
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={HandleChange}
              />
             </Form.Group>
             <Form.Group className="mb-3">
             <Form.Label>Enter mechanic specialty:</Form.Label>
            
              <Form.Control
                type="text"
                name="specialty"
                value={formData.specialty}
                onChange={HandleChange}
              />
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Insert picture url:</Form.Label>
              <Form.Control
                type="text"
                name="picture"
                value={formData.picture}
                onChange={HandleChange}
              />
               </Form.Group>
              <Button variant="outline-dark" type="submit">Hire Employee!</Button>
            
          </Form>
          </Row>
          </Container>
          </div>
          :
          <div></div>
        }


        {/* QUICKVIEW OF APPTS */}
        {
          quickView ?
          <div id="appoList">
            <h2 id="tablehedder">All Appointments</h2>
           <Tableappo appts={appts}/>

           {/* All Appointments:{appts.map(appointment => <li>Customer Name:{appointment.name}, Appointment Date:{appointment.startDate}</li>)} */}
           <button onClick={getAllMechAppointments}>Show how many appointments per mechanic</button>
            {showEach ? 
            <ol>
              {Object.keys(eachAppt).map(function(keyName, keyIndex) {
                return <ul><strong>{keyName}</strong> currently has <strong>{keyIndex}</strong> appointments.</ul>
              })}
             </ol> 
             : 
             <div></div>
            }
            
          </div>
          :
          <div></div>
        }
        {/* QUICKVIEW OF CUSTOMERS */}
        {
          cust ?
          <div id="costomerList">
            <h2 id="tablehedder">All Customers</h2>
            <Tableofcostomer custy={custy}/>
          </div>
          // {custy.map(customer => <li>Customer Name:{customer.name},Customer E-mail:{customer.email}, Customer Phone number: {customer.phone_number}</li>)}
          :
          <div></div>
        }
      </div>
  </div>
  );
}

export default Appointments;
