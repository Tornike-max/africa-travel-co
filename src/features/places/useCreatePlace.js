import { useMutation, useQueryClient } from "@tanstack/react-query";
import { creteNewPlace } from "../../services/placeApi";
import toast from "react-hot-toast";

export function useCreatePlace() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: creteNewPlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["places"] });
      toast.success("Successfully created new place");
    },
    onError: () => {
      toast.error("Error creating new place");
    },
  });

  return { mutate, isLoading };
}
