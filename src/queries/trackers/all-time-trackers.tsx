import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type Params = {};

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

export const getAllTimeTrackersHandler = async (
  params: Params
): Promise<Response> => {
  const { data } = await axios.get<Response>(`/api/trackers/income-expense`, {
    params,
  });
  return data;
};

export const useGetAllTimeTrackers = (
  params: Params,
  options?: Partial<
    UseQueryOptions<Response, AxiosError<Omit<Response, "data">>>
  >
) => {
  return useQuery({
    queryKey: ["all-time-trackers", params],
    queryFn: () => getAllTimeTrackersHandler(params),
    ...options,
  });
};
