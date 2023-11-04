import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/userApi";

export function useUser() {
  const { data, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: ["auth"],
  });

  return {
    data,
    isLoading,
    authenticated: data?.role === "authenticated",
    userName: data?.user_metadata?.fullName,
    email: data?.email,
  };
}
