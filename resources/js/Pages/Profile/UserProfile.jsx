import '../../../css/profile.css'
import { useState } from "react";
import { router } from "@inertiajs/react";
import Calendar from "../../components/Calendar"
import Unsubscribe from "../../components/Unsubscribe";
import MainNav from "../../components/MainNav";
import CancelLesson from '../../components/CancelLesson';
import moment from 'moment';
import Footer from '../../components/Footer';



export default function UserProfile({user,lessons}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [userLessons, setUserLessons] = useState(lessons);
  const [cancelDate, setCancelDate] = useState('');
  const [showDate, setShowDate] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const toggleDate = () => {
    setShowDate(!showDate)
  }
 
  const handleDateChange = (event) => {
    const selectedDate = (event.target.value)
    setCancelDate(selectedDate);
   
  }

  const handleUnsubscribe = (lessonId) => {
     router.delete(`/user/${user.id}/unsubscribe`, lessonId)
     const updatedLessons = userLessons.filter((lesson) => lesson.id !== lessonId);
     setUserLessons(updatedLessons);
     setShowDropdown(false);
  }

  const handleCancel = (event) => {
    const selectedDate = (event.target.value)
    setCancelDate(selectedDate);
  }




  return (
    <>
    <MainNav />
    <div className='profile'>
        <div className='container-m'>
         <div className="title padding-right-150 padding-left-150">
            <h1 className='profileTitle'>Welkom, {user.name}</h1>
         </div>

         <div className="d-flex padding-right-150 padding-left-150 profile-content">  
            <div className='calendar padding-right-50'>
              <Calendar lessons={lessons}  />
            </div> 
            <div className='settings'>

              <div>
                 {user.role === 'leerling' && (
                   showDropdown ? (
                   <Unsubscribe 
                       onUnsubscribe={handleUnsubscribe}
                   />
                   ) : (
                   <button onClick={toggleDropdown} className='button-1 unsub'>Uitschrijven</button>
                   )
                   )}

                 {user.role === 'docent' && (
                  showDate ? (
                    <CancelLesson cancelDate={cancelDate} handleDateChange={handleDateChange} handleCancel={handleCancel} />
                      
                  ): (
                  <button onClick={toggleDate} className='button-1 unsub'>Les annuleren</button>
                 )  )}
              
              
              </div>

              <div className='meldingen'>
                <h2>Meldingen:</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
    <Footer />
    </>
  )
}