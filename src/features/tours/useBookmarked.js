import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { bookmarkedHotel } from "../../services/hotelsApi";

export function useBookmarked() {
  const queryClient = useQueryClient();
  const { mutate: bookmarked, isLoading } = useMutation({
    mutationFn: ({ isBookmarked, id }) => bookmarkedHotel(isBookmarked, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
    onError: () => {
      toast.error("Error");
    },
  });
  return { bookmarked, isLoading };
}
