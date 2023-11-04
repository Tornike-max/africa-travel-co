import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { bookmarkedPlace } from "../../services/placeApi";

export function usePlaceBookmarked() {
  const queryClient = useQueryClient();
  const { mutate: bookmarked, isLoading } = useMutation({
    mutationFn: ({ isBookmarked, id }) => bookmarkedPlace(isBookmarked, id),
    onSuccess: () => {
      queryClient.refetchQueries(["places"]);
    },
    onError: () => {
      toast.error("Error");
    },
  });
  return { bookmarked, isLoading };
}
