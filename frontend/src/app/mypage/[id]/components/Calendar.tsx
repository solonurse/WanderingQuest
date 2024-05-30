import React from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

const Calendar = () => {
  return (
    <FullCalendar
    plugins={[dayGridPlugin, interactionPlugin]}
    headerToolbar={{
      left: 'prev',
      center: 'title',
      right: 'next'
    }}
    initialView="dayGridMonth"
    contentHeight="auto"
  />
  )
}

export default Calendar;