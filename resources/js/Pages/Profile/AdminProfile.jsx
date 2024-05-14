import LessonForm from "../../components/LessonForm";
import {Link} from "@inertiajs/react"
import'../../../css/admin.css'
import MainNav from "../../components/MainNav";
import Footer from "../../components/Footer"

export default function AdminProfile({user}) {


    return (
    <div>
        <MainNav />
        <div className="admin-page container-m">
           <h1>Welkom, {user.name}</h1>
           <div className="admin-content">
              <p>Wat wil je doen ?</p>
               <Link href='/lessons' className="link1">Bekijk Lessen</Link>
               <Link href='/enrollment/show' className="link2">Bekijk inschrijvingen</Link>
           </div>
        </div>
        <Footer />
    </div>
    )
}