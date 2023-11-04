import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../services/placeApi";

export function useGetPlaces() {
  const { data, isLaoding } = useQuery({
    queryFn: getPlaces,
    queryKey: ["places"],
  });

  return { data, isLaoding };
}
