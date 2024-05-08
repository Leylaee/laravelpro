import { useState } from "react";
import { router } from "@inertiajs/react";
import Calendar from "../../components/Calendar"
import Unsubscribe from "../../components/Unsubscribe";


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
       <h1>Welcome, {user.name}</h1>
          <Calendar lessons={lessons} /> 
            {showDropdown ? (
                <Unsubscribe 
                       onUnsubscribe={handleUnsubscribe}
                />
               ) : (
                 <button onClick={toggleDropdown}>Uitschrijven</button>
               )
            }
    </div>
  )
}