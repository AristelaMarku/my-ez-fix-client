import { useState, useEffect } from "react";
import { Container,Row,Form,Col,Button } from "react-bootstrap"
import AppointmentsCard from "./AppointmentsCard"
import Edditpatchform from "./EdditPatchForm";

import "react-datepicker/dist/react-datepicker.css";
import Newpostform from "./NewPostForm";

function BookAppointment({addAppointment}){
    const [isEditing, setIsEditing] = useState(true);

    const[appointments,setAppointements]=useState([])
    console.log("all apointments", appointments)
    
    const [edditAppointement,setEdditAppointment]=useState({})
    //console.log("eddit Appoint",edditAppointement)
    useEffect(() => {
		fetch('http://localhost:9292/appointments')
			.then((r) => r.json())
			.then((data) => {
                 console.log(data)
                setAppointements(data)});
	}, []);
    
  
    function addAppointment(newAppointment){
      setAppointements([...appointments,newAppointment])
    }


      const deleteAppointment=(id)=>{
        const updateAppointment=appointments.filter((appointment)=>appointment.id!=id)
        setAppointements(updateAppointment)
        fetch(`http://localhost:9292/appointments/${id}`, {
         method: "DELETE",
        });
    }

    function handleEdditAppointment(appointmentToEddit){
        console.log(appointmentToEddit)
        setEdditAppointment(appointmentToEddit)

    }


    const appointmentToRender= appointments.map((info)=>{
        return <AppointmentsCard key={info.id}info={info} deleteAppointment={deleteAppointment} handleEdditAppointment={handleEdditAppointment} isEditing={isEditing} setIsEditing={setIsEditing}/>
    })
    

  

   return(
       <div>
           <div className="row">
               <div className="col-8">
    {isEditing ? (
    <Newpostform 
    addAppointment={addAppointment}/>
    ):(
    <Edditpatchform edditAppointement={edditAppointement} appointments={appointments} setAppointements={setAppointements}/>
    )}
</div>

<div className="col-4">
 {appointmentToRender}

</div>

</div>
</div>
   ) 
}

export default BookAppointment