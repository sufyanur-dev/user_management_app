import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import toast from "react-hot-toast";
import { createUser, deleteUser, getAllUser } from "../services/userServices";

export const useUserQueries = () => {
  return useQuery({
    queryFn: getAllUser,
    queryKey: [queryKeys.user],
  });
};

export const useCreateUserQueries = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (response) => {
      console.log("response", response);
      queryClient.invalidateQueries(queryKeys.user);
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      console.log(error);
    },
  });
};

export const useDeleteUserQueries = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: (response) => {
      console.log("response", response);
      queryClient.invalidateQueries(queryKeys.user);
      toast.success(response.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
      console.log(error);
    },
  });
};
