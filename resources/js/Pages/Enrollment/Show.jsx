import EnrollmentList from "../../components/EnrollmentList";
import { router } from "@inertiajs/react";

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
    <>
      <EnrollmentList enrollments={enrollments} handleStatusChange={handleStatusChange} />
    </>
 )
}