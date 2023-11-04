import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/userApi";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, error } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["auth"] });
    },
    onError: () => {
      throw new Error(error.message);
    },
  });
  return { mutate, isLoading };
}
