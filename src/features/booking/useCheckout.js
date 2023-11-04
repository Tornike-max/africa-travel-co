import { useMutation, useQueryClient } from "@tanstack/react-query";
import { checkout as checkoutApi } from "../../services/bookingsApi";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading } = useMutation({
    mutationFn: checkoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success("Successfully update status");
    },
    onError: () => {
      toast.error("Error updating bookings");
    },
  });
  return { checkout, isLoading };
}
