

function MechanicCard ({photo}){
console.log(photo)
    return (
        <div className="card" id="photocard">
           <img styles={{ width: 50, height: 50 }} src={photo.picture} img="name" alt="pic" />
           <h2>Name:{photo.name} </h2>
           <p>Specialty:{photo.specialty}</p>
        </div>
    )
}

export default MechanicCard