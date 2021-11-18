import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";

function AppointmentsCard({
  info,
  deleteAppointment,
  handleEdditAppointment,
  isEditing,
  setIsEditing,
}) {
  const { id, startDate } = info;

  const formatDate = (string) => {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toUTCString("en-US", options).slice(0, 17);
  };


  return (
    <div id="appcard">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Email: {info.email}</ListGroupItem>
          <ListGroupItem>Car Model: {info.carmodel}</ListGroupItem>
          <ListGroupItem>Issue: {info.issue}</ListGroupItem>
          <ListGroupItem>Date: {formatDate(startDate)}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button
            variant="outline-primary"
            onClick={() => setIsEditing((isEditing) => !isEditing)}
          >
            Go To Eddit
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => handleEdditAppointment(info)}
          >
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => deleteAppointment(id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default AppointmentsCard;
