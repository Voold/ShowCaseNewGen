export type ProjectDirection = 'web' | 'mobile' | 'engineering' | 'ml' | 'fintech' | 'design';

export type ProjectFormat = 'case' | 'real' | 'paid';

export interface ProjectDirectionItem {
  key: ProjectDirection;
  label: string;
}

export interface ProjectCardData {
  id: string;
  title: string;
  directions: ProjectDirectionItem[];
  format: ProjectFormat;
  competencies: string[];
  organization: string;
  extended?: boolean;
  description?: string;
  accentColor?: string;
}