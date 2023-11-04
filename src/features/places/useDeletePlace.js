import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlace as deletePlaceApi } from "../../services/placeApi";
import toast from "react-hot-toast";

export function useDeletePlace() {
  const queryClient = useQueryClient();
  const { mutate: deletePlace, isLoading: isLoading3 } = useMutation({
    mutationFn: (id) => deletePlaceApi(id),
    onSuccess: () => {
      queryClient.refetchQueries(["places"]);
    },
    onError: () => {
      toast.error("Error while deleting");
    },
  });
  return { deletePlace, isLoading3 };
}
