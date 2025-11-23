import DateTimeSlots from "./DayTimeSlots";
import Events from "./Events";
export default function DayView() {
  return (
    <div className="calender">
      <div className="line"></div>
      <DateTimeSlots />
      <Events />
    </div>
  );
}
