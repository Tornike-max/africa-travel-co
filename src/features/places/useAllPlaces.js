import { useQuery } from "@tanstack/react-query";
import { getAllPlaces } from "../../services/placeApi";

export function useAllPlaces() {
  const { data, isLaoding } = useQuery({
    queryFn: getAllPlaces,
    queryKey: ["placesAll"],
  });

  return { data, isLaoding };
}
