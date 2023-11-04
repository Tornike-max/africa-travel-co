import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../services/userApi";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["auth"] });
      queryClient.refetchQueries({ queryKey: ["auth"] });
      toast.success("Successfully loging in");
    },
    onError: () => {
      toast.error("An error occurred");
    },
  });
  return { mutate, isLoading };
}
