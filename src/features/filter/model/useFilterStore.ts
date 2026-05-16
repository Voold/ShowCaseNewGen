import { create } from 'zustand';

type FilterMap = Record<string, boolean>;

interface FilterState {
  projectTypes: FilterMap;
  tags: FilterMap;
  competencies: FilterMap;

  toggleProjectType: (value: string) => void;
  toggleTag: (value: string) => void;
  toggleCompetency: (value: string) => void;
  reset: () => void;
}

const toggle = (map: FilterMap, value: string): FilterMap => ({
  ...map,
  [value]: !map[value],
});

export const useFilterStore = create<FilterState>((set) => ({
  projectTypes: {},
  tags: {},
  competencies: {},

  toggleProjectType: (value) =>
    set((state) => ({ projectTypes: toggle(state.projectTypes, value) })),
  toggleTag: (value) =>
    set((state) => ({ tags: toggle(state.tags, value) })),
  toggleCompetency: (value) =>
    set((state) => ({ competencies: toggle(state.competencies, value) })),
  reset: () => set({ projectTypes: {}, tags: {}, competencies: {} }),
}));