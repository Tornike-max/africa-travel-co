import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/bookingsApi";
import { useSearchParams } from "react-router-dom";
import { NUM_PAGE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const curPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const { data: { data: bookings, count } = {}, isLoading } = useQuery({
    queryFn: () => getBookings(curPage),
    queryKey: ["bookings", curPage],
  });

  const pageSize = count / NUM_PAGE;

  if (pageSize > curPage) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", curPage + 1],
      queryFn: () => getBookings(curPage + 1),
    });
  }

  if (curPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", curPage + 1],
      queryFn: () => getBookings(curPage + 1),
    });
  }

  return { bookings, isLoading, count };
}
