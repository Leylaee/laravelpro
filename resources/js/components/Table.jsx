export default function Table({ tableData}) {
    return(
        <>
        <table>
          <thead>
            <tr>
              <th>Tijdstip</th>
              <th>Dag</th>
              <th>Wie</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
            <tr key={index}>
                <td>{rowData.time}</td>
                <td>{rowData.day}</td>
                <td>{rowData.who}</td>
                <td>{rowData.type}</td>
            </tr>
            ))}
          </tbody>
        </table>
        </>
    )
}