import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatus } from "../../services/bookingsApi";
import toast from "react-hot-toast";

export function useCheckin() {
  const queryClient = useQueryClient();
  const { mutate: checkin, isLoading } = useMutation({
    mutationFn: updateStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Successfully update status");
    },
    onError: () => {
      toast.error("Error updating bookings");
    },
  });
  return { checkin, isLoading };
}
