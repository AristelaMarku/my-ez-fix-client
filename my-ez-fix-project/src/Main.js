import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Main (){

    return (
        
        <div id="position-relative" id="landing">
        <Container className="p-5">
        <Card className="bg-dark text-white" style={{ width: '25rem', height: '20rem' }}>
  <Card.Img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8PDw0PDw8PDw8PDw8PDw0PFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ0NFS0ZFRktKys3LSstKystLSstKy0tLS0tLS0tLS0tNzcrNzctNy0tNzc3LTc3LS0tNy03LTctLf/AABEIAPcAzAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A15QRQRQAAAAAAABAAUAAAAAAAAAAAAAERQFBFAEUAAAAAAQAFRUUAEBQAAAABAAUAEAQVQAAAAAABAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAQVQAAAABARRQAQAFEUAAAAAAEAAAAEUFAAABAAAAUAAAAAAAAAAAEABQAQAFAAABAAUAAAAAAAAAEABQAAAQAAAFAAAAAAAAABAAAAUAAAAAEAAAAABQAAAQAAAFAAAAAAAAAAABAAUAEABQRQABACCgigAAAAAAAAAAAAACAAoCAoAAABAAABBQAAAAAAAAAABFAAAEUAAAAEAIAAKAAAAACAAoAIACgAAAgAKAgKAIACgAAAAAgAKAAAAAAACAAAAoAAAIACgAAigAAAAAAAAAAAAAACKAAAIoAAAAgAAAKAACAiiAKAKioAogIogCgCgAgAD//2Q==" alt="Card image" style={{ width: '25rem', height: '30rem' }} />
  <Card.ImgOverlay>
    <Card.Title id="title">EZ Fiks</Card.Title>
    <Card.Text id="text1">
    We are your full service automotive repair shop.
    We proudly service all makes and models, minor and major repairs. 
    The mechanics at our shop have over 35 years of experience between them.
    If you’re having problems with your vehicle, we invite you to call our friendly team today. 
    Honest quality service is our top priority.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
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

        </Container>
    </div>
);
}

    


export default Main