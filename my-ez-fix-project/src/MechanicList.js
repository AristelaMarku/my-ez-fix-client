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
                setStaffData(data)});
	}, []);

    const renderStaff=staffData.map((photo)=>{
       return <MechanicCard photo={photo}/>
    })

    return (
        <div>
            <h1 id="titleStaff">Meet our Staff</h1>
        <div className="cards">
            {renderStaff}
            
            </div>
            </div>
    )
}

export default MechanicList