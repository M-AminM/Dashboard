import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

const Calendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState<never[]>([]);

  const clickHandler = (e: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${e.event.title}'`
      )
    ) {
      e.event.remove();
    }
  };

  const handleDateClick = (e: any) => {
    const title = prompt("Please enter a new title for your event ");
    const calendarApi = e.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${e.dateStr}-${title}`,
        title,
        start: e.startStr,
        end: e.endStr,
        allDay: e.allDay,
      });
    }
  };

  return (
    <section className="px-8 py-6 md:p-2">
      <div className="flex gap-6 md:flex-col">
        <div className="p-4 rounded-lg w-1/4 md:w-full md:p-0">
          <h2 className="text-base font-semibold pb-2 pl-0.5 dark:text-white">
            Events
          </h2>
          <div>
            {currentEvents.map((event: any) => (
              <div
                className="rounded-lg bg-midBlue mb-2 p-2 dark:bg-red dark:text-white font-semibold"
                key={event.id}
              >
                <div className="flex gap-2 flex-col">
                  <h3 className="text-sm">{event.title}</h3>
                  <p className="text-sm">
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full dark:text-white">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            eventClick={clickHandler}
            select={handleDateClick}
            eventsSet={(events: any) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1",
                title: "All-day event",
                date: "2022-12-14",
              },
              {
                id: "2",
                title: "Timed event",
                date: "2022-12-28",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
