import { useQuery } from "@tanstack/react-query";
import { statBookings } from "../../services/bookingsApi";

export function useStateBookings() {
  const { data, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: statBookings,
  });

  return { data, isLoading };
}
