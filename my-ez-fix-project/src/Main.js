import { Container, Row, Col} from 'react-bootstrap';
function Main (){
return(
  <div id="landing">
    {/* <div id="praise-1">
      <h2>Customer Testimonials!</h2>
      <h4>John says:</h4>
      <p>"EZ Fix is the best shop I have ever been to! The mechanics really know their stuff and always give the BEST price!</p>
      <h4>Donna says:</h4>
      <p>"The hype about EZ Fix is real, I got an oil change in less than 10 minutes! I have never been to a quicker auto shop."</p>
      <h4>Willy says:</h4>
      <p>"Man, Jim Jones swapped my whole transmission for only $25!! I dont even know what to say, THANK YOU EZ Fix!!"</p>
    </div>
    <div id="guarantee">
      <h1>The EZ Fix  Guarantee:</h1>
      <h2>"If your not happy with your service or if anything goes wrong with your vehicle within 7 days after your visit, IT'S YOUR MONEY BACK!!"</h2>
    </div> */}
     
  <Container>
     
  <Row>
      
  <Col md={4}>
    
    <div id="comments">
      <div class="box sb3">
          <h4>Willy says:</h4>
          <p>"Man, Jim Jones swapped my whole transmission for only $25!! I dont even know what to say, THANK YOU EZ Fix!!"</p>
      </div>
      <div class = "box sb3">
        <h4>John says:</h4>
        <p>"EZ Fix is the best shop I have ever been to! The mechanics really know their stuff and always give the BEST price!</p>
      </div>
      <div class ="box sb3">
      <h4>Donna says:</h4>
        <p>"The hype about EZ Fix is real, I got an oil change in less than 10 minutes! I have never been to a quicker auto shop."</p>
      </div>
      
    </div>
   </Col>
  <Col md={{ span: 4, offset: 4 }}>
<div id="text">
<h1 id="text2">EZ Fix</h1>

<p id="text1">
    Welcome to EZ Fix: Manager, an EZ tool to help improve and organize your business! The EZ Fix: Manager app is designed to help autoshop managers keep track of their shop. 
    The app includes a way to book appointments and an interactive dashboard to help manager keep up with their busy day to day. 
    Get rid of spreadsheets and physcial records with EZ Fix Manager! 
</p>
</div>

<h1 class="tee">The EZ Fix  Guarantee:</h1>
<h2 class="guar">"If your not happy with your service or if anything goes wrong with your vehicle within 7 days after your visit, IT'S YOUR MONEY BACK!!"</h2>
</Col>

</Row>
<div id="footer">

<img id="ase" src="https://www.prescottimportcar.com/wp-content/uploads/2014/02/ase-logo-350.jpg"/>
<p> 📞 Call us: 888-711-5074 &nbsp; &nbsp; 💬 Text Us: 949-899-1055 &nbsp; &nbsp;📧 Email: info@ezfix.com</p>
</div>
</Container>
</div>


)
}

    


export default Main


 
