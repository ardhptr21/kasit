import { User } from "@prisma/client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type Response = {
  meta: {
    status: number;
    success: boolean;
    message: string;
  };
  data: Omit<User, "password">[];
};

export const listUsersHandler = async (): Promise<Response> => {
  const { data } = await axios.get<Response>(`/api/users`);
  return data;
};

export const useListUsers = (
  options?: Partial<
    UseQueryOptions<Response, AxiosError<Omit<Response, "data">>>
  >
) => {
  return useQuery({
    queryKey: ["list-users"],
    queryFn: () => listUsersHandler(),
    ...options,
  });
};
