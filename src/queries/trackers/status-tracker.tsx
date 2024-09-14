import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

type Params = {
  userId: string;
};

type Response = {
  meta: {
    status: number;
    success: boolean;
    message: string;
  };
  data: { status: boolean };
};

export const getStatusTrackerHandler = async (
  params: Params
): Promise<Response> => {
  const { data } = await axios.get<Response>(
    `/api/trackers/status/${params.userId}`
  );
  return data;
};

export const useGetStatusTracker = (
  params: Params,
  options?: Partial<
    UseQueryOptions<Response, AxiosError<Omit<Response, "data">>>
  >
) => {
  return useQuery({
    queryKey: ["status-tracker", params],
    queryFn: () => getStatusTrackerHandler(params),
    ...options,
  });
};
