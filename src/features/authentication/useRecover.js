import { useMutation, useQueryClient } from "@tanstack/react-query";
import { forgetPassword } from "../../services/userApi";
import toast from "react-hot-toast";

export function useRecover() {
  const queryClient = useQueryClient();
  const { mutate: change, isLoading } = useMutation({
    mutationFn: (email) => forgetPassword(email),

    onSuccess: () => {
      toast.success("Password changed successfully");
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
  return { change, isLoading };
}
