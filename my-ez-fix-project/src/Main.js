import { Container, Row, Col} from 'react-bootstrap';
function Main (){
return(
  <div id="landing">
  <Container>
  <Row>
  <Col md={4}>
  </Col>
  <Col md={{ span: 4, offset: 4 }}>
<div id="text">
<h1 id="text2">EZ Fiks</h1>
<p id="text1">We are your full service automotive repair shop.
We proudly service all makes and models, minor and major repairs. 
The mechanics at our shop have over 35 years of experience between them.
If you’re having problems with your vehicle, we invite you to call our friendly team today. 
Honest quality service is our top priority.</p>
</div>
</Col>
</Row>
<div id="footer">
<p> 📞 Call us: 888-711-5074 &nbsp; &nbsp; 💬 Text Us: 949-899-1055 &nbsp; &nbsp;📧 Email: info@ezfix.com</p>
</div>
</Container>
</div>


)
}

    


export default Main


 
