import { useState } from "react";
import { Button ,Form,Row,Container} from "react-bootstrap";

function Appointments() {
  const [stats, setStats] = useState(false)
  const[emps, setEmps] = useState(false)
  const[newEmp, setNewEmp] = useState(false)
  const[quickView, setQuickView] = useState(false)
  const[cust,setCust] = useState(false)
  const[totals, setTotals] = useState([])
  const[staffList, setStaffList] = useState([])
  const[appts, setAppts] = useState([])
  const[custy,setCusty] = useState([])
  const[newStaff,setNewStaff] = useState([])
  const[formData, setFormData] = useState({
    name: '',
    specialty: '',
    picture: '',
  })
  const handleStats = e => {
    fetch('http://localhost:9292/').then(r=>r.json()).then( numbers => setTotals(numbers))
    setStats(!stats)
  }
  const handleEmps = e => {
    fetch('http://localhost:9292/mechanics').then(r => r.json()).then(mechans => setStaffList(mechans))
    setEmps(!emps)
  }
  const handleView = e => {
    fetch('http://localhost:9292/appointments').then(r => r.json()).then(appt => setAppts(appt))
    setQuickView(!quickView)
  }
  const handleCust = e => {
    fetch('http://localhost:9292/customers').then(r => r.json()).then(data => setCusty(data))
    setCust(!cust)
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
      setNewStaff([newEmp, ...newStaff])
      setFormData({name:'', specialty:'', picture:'' })
      alert('New Employee hired.')
    })
  }
  const HandleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    HandleNewEmp(formData)
  }
  return (
    <div>

      <div id="biz-totals">
        <button onClick = {handleStats}>View Dashboard!</button>
        {stats ? <div id="totals">
        <div id="tot-cust">
          <h3>Total Customers</h3>
          <div id="all-cust">{totals.all_customers}</div>
          <button onClick={handleCust}>Manage Customers</button>
        </div>
        <div id="tot-appt">
          <h3>Total Appointments</h3>
          <div id="all-appt">{totals.all_appointments}</div>
          <button onClick = {handleView}>Manage appointments</button>
        </div>
        <div id="tot-mech">
          <h3>Total Mechanics</h3>
          <div id="all-mech">{totals.all_mechanics}</div>
          <button onClick ={handleEmps}>Manage Staff</button>
        </div>
        </div> : <div>Press 'Manage' to see business totals</div>}
      </div>
      <div id="emp-list">
        {/* EMPLOYEE  LIST */}
        {
        emps ?
        <div id="emp-list">
          <h3>Current Employees:</h3>
          <ul id="staff">
            {staffList.map(staff =>  <div id="staff-list">{staff.name}</div>)}
          </ul>
          <ul id="special">
            {}
          </ul>
          <button onClick={addNewEmp}>Add new employee</button>
          <div id="mech=appts">
              {/* {totals.each_mechanic_appointments[0]} */}
          </div>
        </div>
        :
        <div></div>
        }
        {/* FORM */}
        {
          newEmp ?
          <div>
            <form onSubmit={HandleSubmit}>
              <ul>
                <label>Enter new mechanic name:</label>
                    <input type="text" name='name' value={formData.name} onChange={HandleChange}></input>
                <label>Enter mechanic specialty:</label>
                    <input type="text" name="specialty" value={formData.specialty} onChange={HandleChange}></input>
                <label>Insert picture url:</label>
                    <input type="text" name='picture' value={formData.picture} onChange={HandleChange}></input>
                <button>Hire Employee!</button>
              </ul>
            </form>
          </div>
          :
          <div></div>
        }
        {/* QUICKVIEW OF APPTS */}
        {
          quickView ?
          <div>
            All Appointments:{appts.map(appointment => <li>Customer Name:{appointment.name}, Appointment Date:{appointment.startDate}</li>)}
            {/* {totals.completed_appointments} */}
          </div>
          :
          <div></div>
        }
        {/* QUICKVIEW OF CUSTOMERS */}
        {
          cust ?
          <div>All Customers:{custy.map(customer => <li>Customer Name:{customer.name},Customer E-mail:{customer.email}, Customer Phone number: {customer.phone_number}</li>)}</div>
          :
          <div></div>
        }
      </div>
  </div>
  );
}

export default Appointments;
