import { useQuery } from "@tanstack/react-query";
import { getBookingDetails } from "../../services/bookingsApi";

export function useBookingDetails(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getBookingDetails(id),
    queryKey: ["bookings", id],
  });
  return { data, isLoading };
}
