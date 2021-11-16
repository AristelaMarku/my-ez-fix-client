import { Card,Button,ListGroupItem,ListGroup } from "react-bootstrap"

function AppointmentsCard ({info}){
    return(
      <div id="appcard" >
          {/* <h2>Name :{info.name}</h2>
          <p>Issue :{info.issue}</p>
          <p>Car Model:{info.carmodel}</p>
          <p>Date:{}</p> */}

    {/* <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Name :{info.name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Issue :{info.issue}</Card.Subtitle>
    <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    <Button variant="primary">Eddit</Button>
    <Button variant="danger">Delete</Button>
  </Card.Body>
</Card> */}

<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{info.name}</Card.Title>
    {/* <Card.Subtitle className="mb-2 text-muted">Issue :{info.startDate}</Card.Subtitle> */}
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Email:{info.email}</ListGroupItem>
    <ListGroupItem>Car Model:{info.carmodel}</ListGroupItem>
    <ListGroupItem>Issue:{info.issue}</ListGroupItem>
    <ListGroupItem>Date: {info.startDate.toDateString()}</ListGroupItem>
    {/* <ListGroupItem>Date: {info.startDate}</ListGroupItem> */}
  </ListGroup>
  <Card.Body>
    <Button variant="primary">Eddit</Button>
    <Button variant="danger">Delete</Button>
  </Card.Body>
</Card>

      </div>
    )
}
export default AppointmentsCard