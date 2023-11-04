import { useQuery } from "@tanstack/react-query";
import { getPlace } from "../../services/placeApi";

export function useGetPlace(id) {
  const { data, isLoading } = useQuery({
    queryFn: () => getPlace(id),
    queryKey: ["places", id],
  });
  const dataObj = data?.[0];
  return { dataObj, isLoading };
}
