function Tableofcostomer({custy}){
    const cellsofCostomer=custy.map((costomer)=>{
        return(
          <tr id="bodytable">
          <td>{costomer.name}</td>
          <td>{costomer.email}</td>
          <td>{costomer.phone_number}</td>
          </tr>
        )
    })
    return (
      <table id="tableCost">
        <thead>
          <th>Full Name</th>
          <th>E-mail</th>
          <th>Phone number</th>
        </thead>
        <tbody id="content">
         {cellsofCostomer}
        </tbody>
      </table>
    );
}

export default Tableofcostomer