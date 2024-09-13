import { Expense } from "@prisma/client";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type Params = {
  monthly: string;
};

type Response = {
  meta: {
    status: number;
    success: boolean;
    message: string;
  };
  data: Expense[];
};

export const getListExpensesStrict = async (
  params: Params
): Promise<Response> => {
  const { data } = await axios.get<Response>(`/api/expenses/strict`, {
    params,
  });
  return data;
};

export const useListExpensesStrict = (
  params: Params,
  options?: Partial<
    UseQueryOptions<Response, AxiosError<Omit<Response, "data">>>
  >
) => {
  return useQuery({
    queryKey: ["list-expenses-strict", params],
    queryFn: () => getListExpensesStrict(params),
    ...options,
  });
};
