import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewHotel } from "../../services/hotelsApi";
import toast from "react-hot-toast";

export function useCreateHotel() {
  const queryClient = useQueryClient();
  const { mutate: create, isLoading } = useMutation({
    mutationFn: createNewHotel,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
      toast.success("Successfully created new hotel");
    },
    onError: () => {
      toast.error("Error creating new hotel");
    },
  });

  return { create, isLoading };
}
