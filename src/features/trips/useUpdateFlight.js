import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateFlight } from "../../services/tripApi";
import toast from "react-hot-toast";

export function useUpdateFlight() {
  const queryClient = useQueryClient();
  const { mutate: edit, isLoading: isEditing } = useMutation({
    mutationFn: ({ newFlight, flightId }) => updateFlight(newFlight, flightId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["trips"] });
      toast.success("Successfully edit flight");
    },
    onError: () => {
      toast.error("Failed to edit flight");
    },
  });
  return { edit, isEditing };
}
