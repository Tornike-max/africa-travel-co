import { useQuery } from "@tanstack/react-query";
import { getSignleTrip } from "../../services/tripApi";

export function useSingleTrip(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getSignleTrip(id),
    queryKey: ["trips", id],
  });
  const dataObj = data?.[0];
  return { dataObj, isLoading };
}
