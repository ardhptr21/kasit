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
  data: {
    income: {
      saweria: number;
      cash: number;
      all: number;
    };
    expense: number;
    count: number;
  };
};

export const getMonthlyTrackersHandler = async (
  params: Params
): Promise<Response> => {
  const { data } = await axios.get<Response>(
    `/api/trackers/income-expense/monthly`,
    {
      params,
    }
  );
  return data;
};

export const useGetMonthlyTrackers = (
  params: Params,
  options?: Partial<
    UseQueryOptions<Response, AxiosError<Omit<Response, "data">>>
  >
) => {
  return useQuery({
    queryKey: ["monthly-trackers", params],
    queryFn: () => getMonthlyTrackersHandler(params),
    ...options,
  });
};
