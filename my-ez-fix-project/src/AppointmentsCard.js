import { Card,Button,ListGroupItem,ListGroup } from "react-bootstrap"

function AppointmentsCard ({info, deleteAppointment, handleEdditAppointment}){
  const{id}=info

  return(
      <div id="appcard" >

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{info.name}</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Issue :{info.startDate}</Card.Subtitle> */}
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Email:{info.email}</ListGroupItem>
    <ListGroupItem>Car Model:{info.carmodel}</ListGroupItem>
    <ListGroupItem>Issue:{info.issue}</ListGroupItem>
    <ListGroupItem>Date: {info.startDate}</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Button variant="primary" onClick={()=>handleEdditAppointment(info)}>Eddit</Button>
    <Button variant="danger" onClick={()=>deleteAppointment(id)}>Delete</Button>
  </Card.Body>
</Card>

      </div>
    )
}
export default AppointmentsCard