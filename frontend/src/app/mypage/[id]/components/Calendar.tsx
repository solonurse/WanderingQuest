import React, { useContext } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { userContext } from "@/context/UserContext";

const Calendar = () => {
  const user = useContext(userContext);
  // const userEvent =user?.missionrecord.result
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
    // events={userEvent}
  />
  )
}

export default Calendar;