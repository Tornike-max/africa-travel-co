import { useMutation, useQueryClient } from "@tanstack/react-query";
import { searchHotelWithName } from "../../services/bookingsApi";
import toast from "react-hot-toast";

export function useSearchHotel() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: (val) => searchHotelWithName(val),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
    onError: () => {
      toast.error("Couldn't find any hotel");
    },
  });
  return { mutate, isLoading };
}
