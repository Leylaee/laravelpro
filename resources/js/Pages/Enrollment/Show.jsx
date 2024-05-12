import EnrollmentList from "../../components/EnrollmentList";
import { router,Link } from "@inertiajs/react";
import '../../../css/enrolShow.css'

export default function Show({enrollments}) {

const handleStatusChange = (enrollmentId, currentStatus) => {
    let newStatus;

    if(currentStatus === 'In afwachting') {
        newStatus = 'Afgehandeld';
    } else {
         newStatus = 'In afwachting';
    }  
    router.put(`/enrollment/${enrollmentId}/status` , {status: newStatus});
}

 return(
    <div className="container-m">
      <div className="enrolListContainer">
        <Link href='/profile'><button className="back">Terug</button></Link>
        <h1>Beheer inschrijvingen</h1>
        <EnrollmentList enrollments={enrollments} handleStatusChange={handleStatusChange} />
     </div>
    </div>
 )
}