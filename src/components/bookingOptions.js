import BookingItem from "./bookingItem";
import TitleOnFilter from "./titleOnFilter";
const text1 = "Listings you can book without waiting for Host approval";
const text2 = "Easy access to the property once you arrive";

export default function BookingOptions() {
  return (
    <div className="px-6">
      <div className="pt-8 pb-c20 border-b-c1 border-solid border-gray-300">
        <TitleOnFilter title="Booking options" />
        <BookingItem title={"Instant Book"} content={text1} />
        <BookingItem title={"Self check-in"} content={text2} />
      </div>
    </div>
  );
}
