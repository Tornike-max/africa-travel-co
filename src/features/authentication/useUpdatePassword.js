import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword } from "../../services/userApi";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutate: updatePass, isLoading: isUpdating } = useMutation({
    mutationFn: ({ password }) => updatePassword({ password }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      toast.success("Successfully updated password");
    },
    onError: () => {
      toast.error("Error while updating password");
    },
  });

  return { updatePass, isUpdating };
}
