import { Container,Row,Form,Col,Button } from "react-bootstrap"
import { useState} from "react";

function Newpostform({addAppointment}){

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [carmodel,setCarmodel]=useState("")
    const [issue,seyIssue]=useState("")
    const [startDate, setStartDate] = useState(" ")
    const [text,setText]=useState("")

    function handleSubmit(e){
        e.preventDefault();
        const newObj={
            name: name,
            email: email,
            carmodel:carmodel,
            issue: issue,
            startDate: startDate,
            text: text,
            completed: false,
        }
    fetch("http://localhost:9292/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((r) => r.json())
      .then((newAppointment) => 
      addAppointment(newAppointment));
        
    }

return (
<div>
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
        <Form.Label>Pick a Date</Form.Label><br />
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
    )
}

export default Newpostform