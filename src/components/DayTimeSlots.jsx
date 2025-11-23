export default function DateTimeSlots() {
  const slots = Array.from({ length: 24 });
  return slots.map((_, index) => {
    return <div className="slot">{index}:00</div>;
  });
}
