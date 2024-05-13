import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import '../../css/calendar.css'
import { useEffect } from "react"
import { useState } from "react"

export default function Calendar({lessons, cancelDate}){
    const events = [];
    lessons.forEach((lesson) => {

    const lessonStartDate = new Date(lesson.startdate);
    const lessonEndDate = new Date(lesson.enddate);

    for (
      let date = lessonStartDate;
      date <= lessonEndDate;
      date.setDate(date.getDate() + 1)
    ) {
      if (date.getDay() === lesson.day_of_week) {
        events.push({
          title: lesson.category,
          start: date.toISOString().slice(0, 10) + "T" + lesson.starttime,
          end: date.toISOString().slice(0, 10) + "T" + lesson.endtime,
          
        });
      }
    }
  });

  const [eventSources, setEventSources] = useState([]);

  // Effect hook om de evenementbronnen bij te werken
  useEffect(() => {
    const updatedEventSources = lessons.map(lesson => ({
      title: lesson.category,
      start: lesson.startdate,
      end: lesson.enddate,
    }));

    setEventSources(updatedEventSources);
  }, [lessons]);


  const eventContent = (arg) => {
    if (arg.event.start.toISOString().slice(0, 10) === cancelDate.toISOString().slice(0, 10)) {
      return { backgroundColor: 'red' };
    }
  };
  
 
    return(
        <>
           <FullCalendar
                   plugins={[dayGridPlugin, timeGridPlugin,interactionPlugin]}
                   initialView="dayGridMonth"
                   headerToolbar={
                    {
                        start: 'today prev,next',
                        center: 'title',
                        end: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }
                   }
                   events={eventSources}
                   eventContent={eventContent}
           />
        </>
    )
}