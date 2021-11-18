import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {useState} from 'react'
function Main (){

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
          <div id="welcome">
            <img id="header" src = 'https://marinosautorepair.com/wp-content/uploads/2020/05/69camero-min.jpg' />
            <h1>Welcome to EZ FIX Repair Shop management helper!</h1>
            <p>We everything you need to help you be the BEST manager!  </p>
          </div>
        
       

       

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

    


export default Main


 {/* <Card className="bg-dark text-white position-absolute bottom-0 end-0 " style={{ width: '30rem', height: '57.3rem' }}> */}
  {/* <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Z915ng1HISMMiKraTnXbSVYorAQ-lYqCfg&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title id="title">EZ Fiks</Card.Title>
    <Card.Text id="text1">
    We are your full service automotive repair shop.
    We proudly service all makes and models, minor and major repairs. 
    The mechanics at our shop have over 35 years of experience between them.
    If you’re having problems with your vehicle, we invite you to call our friendly team today. 
    Honest quality service is our top priority.
    </Card.Text>
  </Card.ImgOverlay> */}
{/* </Card> */}
{/* <Card className="bg-dark text-white position-absolute bottom-0 start-0 " style={{ width: '25rem' }}>
  <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03f-oSsBfYwk9vXFVT7m5XT7AXaoUztvNJA&usqp=CAU" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Contact Us</Card.Title>
    <Card.Text id="text2">
    📞 Call us: 888-711-5074
    🗨️ Text Us: 949-899-1055
    📧 Email: info@ezfix.com
    </Card.Text>
  </Card.ImgOverlay>
</Card> */}