import { Container, Row, Col} from 'react-bootstrap';
function Main (){
return(
  <div id="landing">
  <Container>
  <Row>
  <Col md={4}>
    <div>
    <h4>John says:</h4>
    <p>"EZ Fix is the best shop I have ever been to! The mechanics really know their stuff and always give the BEST price!</p>
    <h4>Donna says:</h4>
      <p>"The hype about EZ Fix is real, I got an oil change in less than 10 minutes! I have never been to a quicker auto shop."</p>
      <h4>Willy says:</h4>
      <p>"Man, Jim Jones swapped my whole transmission for only $25!! I dont even know what to say, THANK YOU EZ Fix!!"</p>
    </div>
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


 
