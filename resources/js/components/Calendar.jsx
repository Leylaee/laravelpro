import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"

export default function Calendar(){
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
           />
        </>
    )
}