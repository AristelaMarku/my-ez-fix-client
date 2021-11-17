import { useState, useEffect } from "react";
import { Container,Row,Form,Col,Button } from "react-bootstrap"
import AppointmentsCard from "./AppointmentsCard"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function BookAppointment({addAppointment}){

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [carmodel,setCarmodel]=useState("")
    const [issue,seyIssue]=useState("")
    const [startDate, setStartDate] = useState(" ")
    const [text,setText]=useState("")
    
    const[appointments,setAppointements]=useState([])

    const [edditAppointement,setEdditAppointment]=useState({})
    console.log("eddit Appoint",edditAppointement)
    // useEffect(() => {
	// 	fetch('http://localhost:9292/appointments')
	// 		.then((r) => r.json())
	// 		.then((data) => {
    //              console.log(data)
    //             setAppointements(data.appointments)});
	// }, []);
    
    useEffect(() => {
        setName(edditAppointement.name);
        setEmail(edditAppointement.email);
        setCarmodel(edditAppointement.carmodel);
        seyIssue(edditAppointement.issue);
        setStartDate(edditAppointement.startDate)
        setText(edditAppointement.text)
      }, [edditAppointement])

    function addAppointment(newAppointment){
      setAppointements([...appointments,newAppointment])
    }

  
    function handleSubmit(e){
        e.preventDefault();
        const newObj={
            name: name,
            email: email,
            carmodel:carmodel,
            issue: issue,
            startDate: startDate,
            text: text,
        }
        addAppointment(newObj)
    }

    const deleteAppointment=(id)=>{
        console.log(id)
        const updateAppointment=appointments.filter((appointment)=>appointment.id!=id)
        setAppointements(updateAppointment)
        // fetch(`http://localhost:9292/appointments/${id}`, {
        //  method: "DELETE",
        // });
    }

    function handleEdditAppointment(appointmentToEddit){
        setEdditAppointment(appointmentToEddit)
       }

       
    const appointmentToRender= appointments.map((info)=>{
        return <AppointmentsCard info={info} deleteAppointment={deleteAppointment} handleEdditAppointment={handleEdditAppointment}/>
    })
    
  


   
  

   return(
       <div>
           <div className="row">
               <div className="col-8">
    <Container>
    <Row className="px-5">
    <h1>Book Appointment</h1>
    
    <Form  onSubmit={handleSubmit}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First & Last Name</Form.Label>
                <Form.Control
                    onChange={(e)=>setName(e.target.value)}
                    type="text"
                    value={name}
                    placeholder="Enter First & Last Name"
                />
            </Form.Group>
       
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                value={email}
                placeholder="Enter email"
            />
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Car Model</Form.Label>
            <Form.Control
                onChange={(e)=>setCarmodel(e.target.value)}
                name="car"
                type="text"
                value={carmodel}
                placeholder="Ex: '2012 Nissan Rogue'"
            />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Issue with Car</Form.Label>

            <Form.Select
                onChange={(e)=>seyIssue(e.target.value)}
                aria-label="Default select example"
                name="subject"
                value={issue}
            >
                <option>Subject?</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Transmission">Transmission</option>
                <option value="Brakes">Brakes</option>
                <option value="Electrical">Electrical</option>
                <option value="Engine">Engine</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Pick a Date</Form.Label>
        <input 
        id="date"
        type="date"
        name="amount"
         onChange={(e) => setStartDate(e.target.value)}
         value={startDate}

         />
        </Form.Group>

        
        <Form.Group className="mb-3" controlId="ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
                onChange={(e)=>setText(e.target.value)}
                name="message"
                as="textarea"
                rows={3}
                value={text}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
</Row>
</Container>
</div>

<div className="col-4">
 {appointmentToRender}

</div>

</div>
</div>
   ) 
}

export default BookAppointment