import AppointmentsCard from "./AppointmentsCard"

function Appointments({appointments}){
   
   const appointmentToRender= appointments.map((info)=>{
       return <AppointmentsCard info={info}/>
   })

    return (

        <div>{appointmentToRender}</div>
    )
}

export default Appointments