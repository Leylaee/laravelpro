import { usePage } from "@inertiajs/react";
import { useState } from "react"

export default function Unsubscribe({ onUnsubscribe}) {
    const [selectedLessonId, setSelectedLessonId] = useState('');
    
    const {lessons} = usePage().props

    const handleLessonSelection = (e) => {
        setSelectedLessonId(e.target.value);
    }

    const handleUnsubscribe = () => {
        onUnsubscribe(selectedLessonId)
        setSelectedLessonId('')
    }
    
    return(
      <div>
        <p>Kies een les om uit te schrijven:</p>
         <select
           value={selectedLessonId}
           onChange={handleLessonSelection}
         >
           <option value="">Selecteer een les</option>
            {lessons.map((lesson) => (
               <option key={lesson.id} value={lesson.id}>{lesson.category}</option>
             ))}
        </select>
        <button onClick={handleUnsubscribe}>Unsubscribe</button>
      </div>
    )
}