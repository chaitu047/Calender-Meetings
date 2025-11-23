import events from "../events";
export default function Events() {
  return events.map((event) => {
    const startTime = event.split("-")[0];
    const endTime = event.split("-")[1];
    const startHour = parseInt(startTime.split(":")[0]);
    const startMin = parseInt(startTime.split(":")[1]);
    const endHour = parseInt(endTime.split(":")[0]);
    const endMin = parseInt(endTime.split(":")[1]);
    const top = startHour * 5 + (startMin / 60) * 5;
    const height = (endHour - startHour) * 5 + ((endMin - startMin) / 60) * 5;
    console.log(top, height);
    return (
      <div
        className="event"
        style={{ top: `${top}rem`, height: `${height}rem` }}
      >
        Meeting
      </div>
    );
  });
}
