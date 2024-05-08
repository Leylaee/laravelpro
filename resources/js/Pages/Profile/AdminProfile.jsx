import LessonForm from "../../components/LessonForm";
import {Link} from "@inertiajs/react"

export default function AdminProfile({user}) {


    return (
        <>
           <h1>Welcome, {user.name}</h1>
           <Link href='/lessons'>Bekijk Lessen</Link>
           <Link href='/enrollment/show'>Bekijk inschrijvingen</Link>

        </>
    )
}