function Tableappo({ appts }) {
 
  const cellofTable=appts.map((appointments)=>{
      return(
        <tr id="bodytable">
        <td>{appointments.name}</td>
        <td>{appointments.startDate.split(0, 3)}</td>
    </tr>
      )
  })
  return (
    <table id="tableCost">
      <thead>
        <th>Full Name</th>
        <th>Appointment Date</th>
      </thead>
      <tbody id="content">
       {cellofTable}
      </tbody>
    </table>
  );
}

export default Tableappo;
