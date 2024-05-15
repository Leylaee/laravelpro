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
          <div className="d-flex content-height">
           <h1 className="padding-top-50">Welkom, {user.name}</h1>
           <div className="admin-content">
              <p>Wat wil je doen ?</p>
               <Link href='/lessons' className="link1">Bekijk Lessen</Link>
               <Link href='/enrollment/show' className="link2">Bekijk inschrijvingen</Link>
           </div>
           </div>
        </div>
        <Footer />
    </div>
    )
}