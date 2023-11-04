import { useQuery } from "@tanstack/react-query";
import { getHotels } from "../../services/hotelsApi";
import toast from "react-hot-toast";

export function useGetHotels() {
  const { data, isLoading, error } = useQuery({
    queryFn: getHotels,
    queryKey: ["hotels"],
  });
  if (error) {
    toast.error("Errow while getting hotels data");
  }

  return { data, isLoading };
}
