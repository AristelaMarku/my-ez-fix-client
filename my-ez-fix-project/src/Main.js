import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {useState} from 'react'
function Main (){

    const [stats, setStats] = useState(false)
    const[emps, setEmps] = useState(false)
    const[newEmp, setNewEmp] = useState(false)


    const[totals, setTotals] = useState([])
    const[staffList, setStaffList] = useState([])
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
        
        <div id="position-relative" >
          <div id="landing">
            <Container className="p-5">
            </Container>
          </div>
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

       

        <div id="biz-totals">

          <button onClick = {handleStats}>Manage</button>
        
          {stats ? <div id="totals"> 
          Total Customers:<div id="tot-cust">{totals.all_customers}</div>
          Total number of appointments:<div id="tot-appt">{totals.all_appointments}</div>
          Mechanics on payroll:<div id="tot-mech">

            {totals.all_mechanics}
            <button onClick ={handleEmps}>Show all employees</button>
            </div> 

          </div> : <div>Press 'Manage' to see business totals</div>}

        </div>
        <div id="emp-list">
          
          {
          emps ?
          <div>
            Current Employees:{staffList.map(staff =>  <div id="staff-list">{staff.name}</div>)}
            <button onClick={addNewEmp}>Add new employee</button>
          </div>  
          :  
          <div></div>
          }

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


        </div>
    </div>
);
}

    


export default Main