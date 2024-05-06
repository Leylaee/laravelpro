import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"


export default function Calendar({lessons}){
    const events = [];

  // Itereer over elke les
  lessons.forEach((lesson) => {
    // Haal de startdatum en einddatum op van de les
    const lessonStartDate = new Date(lesson.startdate);
    const lessonEndDate = new Date(lesson.enddate);

    // Itereer over de dagen van de week tussen de start- en einddatum van de les
    for (
      let date = lessonStartDate;
      date <= lessonEndDate;
      date.setDate(date.getDate() + 1)
    ) {
      // Controleer of de huidige dag van de week overeenkomt met de dag van de week van de les
      if (date.getDay() === lesson.day_of_week) {
        // Voeg een evenement toe voor deze dag
        events.push({
          title: lesson.category,
          start: date.toISOString().slice(0, 10) + "T" + lesson.starttime,
          end: date.toISOString().slice(0, 10) + "T" + lesson.endtime,
        });
      }
    }
  });
 
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
                   events={events}
           />
        </>
    )
}