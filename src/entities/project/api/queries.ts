import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { projectApi } from './requests';
import type { GetProjectsQueryParams, CreateProjectDto } from '../model/types';
import { projectKeys } from './queryKeys';

export const useProjects = (params?: GetProjectsQueryParams) => {
  return useQuery({
    queryKey: projectKeys.lists(params),
    queryFn: () => projectApi.getProjects(params),
  });
};

export const useProjectDetails = (id: string) => {
  return useQuery({
    queryKey: projectKeys.details(id),
    queryFn: () => projectApi.getProjectById(id),
    enabled: !!id,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newProject: CreateProjectDto) => projectApi.createProject(newProject),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: projectKeys.lists() });
    },
  });
};