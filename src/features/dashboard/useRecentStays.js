import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { getStaysAfterDate } from "../../services/apiBookings";

export default function useRecentStays() {
  const [searchParams] = useSearchParams();

  const numDays = !searchParams.get("last") ? 7 : Number(searchParams.get("last"));
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: stays, isLoading } = useQuery({
    queryKey: ["stays", `last-${numDays}`],
    queryFn: () => getStaysAfterDate(queryDate),
  });

  // console.log(stays);

  const confirmedStays = stays?.filter((item) => item.status === "checked-in" || item.status === "checked-out");
  // console.log(confirmedStays);

  return { isLoading, stays, confirmedStays, numDays };
}
