import React from "react";
import FullCalendar from '@fullcalendar/react';
import { EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import { MissionCalendar } from "@/types/mission"

const Calendar: React.FC<MissionCalendar> = ({missionRecords}) => {
  const events = missionRecords.map(record => ({
    id: record.id.toString(),
    title: record.title,
    start: record.created_at,
    allDay: true
  }));

  const handleEventClick = (clickInfo: EventClickArg) => {
    const targetElement = document.getElementById(`record${clickInfo.event.id}`);

    // 要素が存在する場合、ミッション記録を画面の一番上にスクロールする
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
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
    locale="ja"
    events={events}
    eventClick={handleEventClick}
    eventDidMount={(info) => {
      // イベント要素にスタイルを適用して、マウスポインターを指に変更
      info.el.style.cursor = 'pointer';
    }}
  />
  );
};

export default Calendar;