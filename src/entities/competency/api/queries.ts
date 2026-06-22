import { useQuery } from "@tanstack/react-query"
import { queryKeys } from "./queryKeys"
import { getCompetencies } from "./requests"

export const useCompetencies = () => {
  return useQuery({
    queryKey: queryKeys.all,
    queryFn: getCompetencies,
    staleTime: 1000 * 60
  })
}