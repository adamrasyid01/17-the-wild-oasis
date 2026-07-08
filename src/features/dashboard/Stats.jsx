import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";
import Stat from "./Stat";
import PropTypes from "prop-types";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

export default function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  console.log(confirmedStays);
  // 1.
  const numBookings = bookings?.length ?? 0;
  //   2.
  const sales = (bookings || []).reduce((acc, cur) => acc + cur.totalPrice, 0);

  //   3
  const checkins = confirmedStays?.length ?? 0;

  console.log(numDays);
  console.log(cabinCount);

  //   4
  const totalNights = (confirmedStays || []).reduce((acc, cur) => acc + (cur.numNights ?? 0), 0);
  const totalCapacity = (numDays || 0) * (cabinCount || 0);
  const occupation = totalCapacity === 0 ? 0 : totalNights / totalCapacity;
  //   num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat title="Bookings" color="blue" icon={<HiOutlineBriefcase />} value={numBookings}></Stat>
      <Stat title="Sales" color="green" icon={<HiOutlineBanknotes />} value={formatCurrency(sales)}></Stat>
      <Stat title="Check ins" color="indigo" icon={<HiOutlineCalendarDays />} value={checkins}></Stat>
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      ></Stat>
    </>
  );
}

Stats.propTypes = {
  bookings: PropTypes.array,
  confirmedStays: PropTypes.array,
  numDays: PropTypes.number,
  cabinCount: PropTypes.number,
};
