import { useQuery } from "@tanstack/react-query";
import { getHotel } from "../../services/hotelsApi";
import toast from "react-hot-toast";

export function useGetHotel(id) {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getHotel(id),
    queryKey: ["hotels", id],
  });

  if (error) {
    toast.error(error.message);
  }

  return { data, isLoading };
}
