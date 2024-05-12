import { Link } from "@inertiajs/react"
import { useEffect, useState } from "react";
import EnrollmentForm from "../../components/EnrollmentForm"
import '../../../css/enrollment.css'

export default function Index({user}){
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
      const updateNavHeight = () => {
          const formHeight = document.querySelector('.enrolForm').offsetHeight;
          setNavHeight(formHeight);
      };
      window.addEventListener('resize', updateNavHeight);
      updateNavHeight();

      return () => {
          window.removeEventListener('resize', updateNavHeight);
      };
  }, []);

    return(
        <div className="positio-relative enr-container">
          <div className="linkerNav"></div>
          <div className="enrolForm">
          {user ?  (
               <EnrollmentForm />
             ) : ( 
                <div>
                    <p>Je moet ingelogd zijn om je in te schrijven.</p>
                    <Link href="/login">Ga naar de inlogpagina</Link>
                </div>
              )
          }
          </div>
          </div>
    )
}