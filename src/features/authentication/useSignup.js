import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp } from "../../services/userApi";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signUp({ email, password, fullName }),
    onSuccess: () => {
      //   queryClient.invalidateQueries({ queryKey: ["auth"] });
      queryClient.refetchQueries({ queryKey: ["auth"] });
      toast.success("Successfully registered");
    },
    onError: () => {
      toast.error("Error while registering");
    },
  });
  return { mutate, isLoading };
}
