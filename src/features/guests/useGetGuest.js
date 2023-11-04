import { useQuery } from "@tanstack/react-query";
import { getGuest } from "../../services/guestApi";

export function useGetGuest(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getGuest(id),
    queryKey: ["guests", id],
  });
  return { data, isLoading };
}
