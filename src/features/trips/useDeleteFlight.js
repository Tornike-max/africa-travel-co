import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFlight as deleteFlightApi } from "../../services/tripApi";
import toast from "react-hot-toast";

export function useDeleteFlight() {
  const queryClient = useQueryClient();
  const { mutate: deleteFlight, isLoading } = useMutation({
    mutationFn: (id) => deleteFlightApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      toast.success("Successfully deleted");
    },
    onError: () => {
      toast.error("Failed to delete");
    },
  });
  return { deleteFlight, isLoading };
}
