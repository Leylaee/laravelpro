export default function EnrollmentList({ enrollments, handleStatusChange}) {
    return ( 
        <>
          <table>
            <thead>
                <tr>
                    <th>Naam</th>
                    <th>Geboortedatum</th>
                    <th>Telefoon</th>
                    <th>Email</th>
                    <th>Categorie</th>
                    <th>Niveau</th>
                    <th>Registratie voor</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {enrollments.map((enrollment) => (
                <tr key={enrollment.id}>
                    <td>{enrollment.name}</td>
                    <td>{enrollment.birthdate}</td>
                    <td>{enrollment.tel}</td>
                    <td>{enrollment.email}</td>
                    <td>{enrollment.category}</td>
                    <td>{enrollment.description}</td>
                    <td>{enrollment.registration_for}</td>
                    <td>{enrollment.status}</td>
                    <td>
                        <button onClick={() => handleStatusChange(enrollment.id, enrollment.status)}>
                            Verander status
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
         </table>  
        </>
    )
}