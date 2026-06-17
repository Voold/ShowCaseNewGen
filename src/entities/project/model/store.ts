import { create } from 'zustand';
import type { ProjectDirection, ProjectFormat } from './types';

interface ProjectFiltersState {
  search: string;
  direction: ProjectDirection | null;
  format: ProjectFormat | null;
  setSearch: (search: string) => void;
  setDirection: (direction: ProjectDirection | null) => void;
  setFormat: (format: ProjectFormat | null) => void;
  reset: () => void;
}

export const useProjectFiltersStore = create<ProjectFiltersState>((set) => ({
  search: '',
  direction: null,
  format: null,
  setSearch: (search) => set({ search }),
  setDirection: (direction) => set({ direction }),
  setFormat: (format) => set({ format }),
  reset: () => set({ search: '', direction: null, format: null }),
}));