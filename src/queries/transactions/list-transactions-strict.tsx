import { Transaction, User } from "@prisma/client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type Params = {
  monthly: string;
  q?: string | null;
};

type Response = {
  meta: {
    status: number;
    success: boolean;
    message: string;
  };
  data: (Transaction & { user: Pick<User, "name" | "nrp"> })[];
};

export const getListTransactionsStrict = async (
  params: Params
): Promise<Response> => {
  const { data } = await axios.get<Response>(`/api/transactions/strict`, {
    params,
  });
  return data;
};

export const useListTransactionsStrict = (
  params: Params,
  options?: Partial<
    UseQueryOptions<Response, AxiosError<Omit<Response, "data">>>
  >
) => {
  return useQuery({
    queryKey: ["list-transactions-strict", params],
    queryFn: () => getListTransactionsStrict(params),
    ...options,
  });
};
