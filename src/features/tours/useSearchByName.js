import { useQuery } from "@tanstack/react-query";
import { searchHotels } from "../../services/hotelsApi";

export function useSearchByName(hotelName) {
  const { data: search, isLoading: isSearching } = useQuery({
    queryKey: ["hotels", hotelName],
    queryFn: () => searchHotels(hotelName),
  });

  return { search, isSearching };
}
