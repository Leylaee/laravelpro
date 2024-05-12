import LessonForm from "../../components/LessonForm";
import {Link} from "@inertiajs/react"
import'../../../css/admin.css'

export default function AdminProfile({user}) {


    return (
        <div className="admin-page">
           <h1>Welkom, {user.name}</h1>
           <div className="admin-content">
              <p>Wat wil je doen ?</p>
               <Link href='/lessons' className="link1">Bekijk Lessen</Link>
               <Link href='/enrollment/show' className="link2">Bekijk inschrijvingen</Link>
           </div>
        </div>
    )
}