import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteHotel as deleteHotelApi } from "../../services/hotelsApi";
import toast from "react-hot-toast";

export function useDeleteHotel() {
  const queryClient = useQueryClient();
  const { mutate: deleteHotel, isLoading } = useMutation({
    mutationFn: deleteHotelApi,
    onSuccess: () => {
      toast.success("Delete Hotel");
      queryClient.invalidateQueries({ queryKey: ["hotels"] });
    },
    onError: () => {
      toast.error("Error deleting hotel");
    },
  });
  return { deleteHotel, isLoading };
}
