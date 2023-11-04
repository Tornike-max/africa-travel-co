import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../services/userApi";
import toast from "react-hot-toast";

export function useUpdateAccount() {
  const queryClient = useQueryClient();
  const { mutate: updateName, isLoading: isUpdating } = useMutation({
    mutationFn: ({ email, fullName }) => updateUser({ email, fullName }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
      toast.success("Successfully updated user name");
    },
    onError: () => {
      toast.error("Error while updating user name");
    },
  });

  return { updateName, isUpdating };
}
