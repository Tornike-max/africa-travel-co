import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookStatus } from "../../services/placeApi";
import toast from "react-hot-toast";

export function useUpdateStatus() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ status, isBooked, id }) =>
      updateBookStatus({ status, isBooked, id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["places"] });
      toast.success("You Successfully booked place");
    },
    onError: () => {
      toast.error("There was a problem");
    },
  });
  return { mutate, isLoading };
}
