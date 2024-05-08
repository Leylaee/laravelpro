import { Link } from "@inertiajs/react"
import EnrollmentForm from "../../components/EnrollmentForm"

export default function Index({user}){
    return(
        <>
          {user ?  (
               <EnrollmentForm />
             ) : ( 
                <div>
                    <p>Je moet ingelogd zijn om je in te schrijven.</p>
                    <Link href="/login">Ga naar de inlogpagina</Link>
                </div>
              )
          }
          </>
    )
}