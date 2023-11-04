import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTrip } from "../../services/tripApi";
import toast from "react-hot-toast";

export function useCreateTrip() {
  const queryCLient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ newFlight }) => createTrip(newFlight),
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["trips"] });
      toast.success("Successfully created");
    },
    onError: () => {
      toast.error("Error creating flight");
    },
  });
  return { mutate, isLoading };
}
