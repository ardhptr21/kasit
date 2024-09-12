import { User } from "@prisma/client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type Params = {
  nrp: number | null;
};

type Response = {
  meta: {
    status: number;
    success: boolean;
    message: string;
  };
  data: Omit<User, "password">;
};

export const getUserByNRPHandler = async (
  params: Params
): Promise<Response> => {
  const { data } = await axios.get<Response>(`/api/users/${params.nrp}/nrp`);
  return data;
};

export const useGetUserByNRP = (
  params: Params,
  options?: Partial<
    UseQueryOptions<Response, AxiosError<Omit<Response, "data">>>
  >
) => {
  return useQuery({
    queryKey: ["user-by-nrp", params.nrp],
    queryFn: () => getUserByNRPHandler(params),
    ...options,
  });
};
