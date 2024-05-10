import '../../../css/profile.css'
import { useState } from "react";
import { router } from "@inertiajs/react";
import Calendar from "../../components/Calendar"
import Unsubscribe from "../../components/Unsubscribe";
import MainNav from "../../components/MainNav";



export default function UserProfile({user,lessons}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userLessons, setUserLessons] = useState(lessons);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }


  const handleUnsubscribe = (lessonId) => {
   router.delete(`/user/${user.id}/unsubscribe`, lessonId)
   const updatedLessons = userLessons.filter((lesson) => lesson.id !== lessonId);
   setUserLessons(updatedLessons);
   setShowDropdown(false);
  }


  return (
    <div>
       <MainNav />
        <div className='container-m'>
         <div className="title padding-right-150 padding-left-150">
            <h1 className=''>Welcome, {user.name}</h1>
         </div>

         <div className="d-flex padding-right-150 padding-left-150 profile-content">  
            <div className='calendar padding-right-50'>
              <Calendar lessons={lessons} />
            </div> 
            <div className='settings'>
              <div>
              {showDropdown ? (
                <Unsubscribe 
                       onUnsubscribe={handleUnsubscribe}
                />
                ) : (
                 <button onClick={toggleDropdown} className='button-1 unsub'>Uitschrijven</button>
                )
              }
              </div>

              <div className='meldingen'>
                <h2>Meldingen:</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}