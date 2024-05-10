import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import '../../css/calendar.css'

export default function Calendar({lessons}){
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