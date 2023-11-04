import { useQuery } from "@tanstack/react-query";
import { getTrips } from "../../services/tripApi";

export function useTrips() {
  const { data, isLoading } = useQuery({
    queryFn: getTrips,
    queryKey: ["trips"],
  });

  return { data, isLoading };
}
