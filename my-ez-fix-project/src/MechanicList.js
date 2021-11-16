import { useEffect,useState } from "react"
import MechanicCard from "./MechanicCard"

function MechanicList(){
    
    const[staffData,setStaffData]=useState([])
    console.log(staffData)

    useEffect(() => {
		fetch('http://localhost:9292/mechanics')
			.then((r) => r.json())
			.then((data) => {
                console.log(data)
                setStaffData(data.mechanics)});
	}, []);

    const renderStaff=staffData.map((photo)=>{
       return <MechanicCard photo={photo}/>
    })

    return (
        <div className="cards">{renderStaff}</div>
    )
}

export default MechanicList