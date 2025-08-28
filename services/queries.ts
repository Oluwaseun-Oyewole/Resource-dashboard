import { useQuery } from "@tanstack/react-query";
import { getEmployees, getMetrics } from "./dashboard";
import { EmployeeInterface } from "./types";

export const useGetEmployees = (params: EmployeeInterface) => {
  const {
    data: employees,
    isLoading: employeesIsLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-employees", params],
    queryFn: () => getEmployees(params),
    retry: 1,
    refetchOnWindowFocus: false,
  });
  return { employees, employeesIsLoading, refetch };
};

export const useGetMetrics = () => {
  const {
    data: metrics,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-metrics"],
    queryFn: () => getMetrics(),
    retry: 1,
    refetchOnWindowFocus: false,
  });
  return { metrics, isLoading, refetch };
};
