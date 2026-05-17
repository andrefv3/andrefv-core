export type TechStack = 'React 19' | 'TypeScript' | 'NestJS' | 'PostgreSQL' | 'TailwindCSS' | 'Zustand' | 'Docker';

export interface ArchitecturalMetric {
  label: string;      // ej. "Latencia de Carga" o "Reducción de Bundle"
  value: string;      // ej. "< 80ms" o "-42%"
  description: string;
}

export interface ProjectChallenge {
  problem: string;
  solution: string;
  architectureDecision: string; // El "Por qué" detrás de la ingeniería
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  role: 'Lead Architect' | 'Senior Fullstack Engineer';
  organization: string;
  status: 'Production' | 'Archived' | 'Scale Phase';
  description: string;
  stack: TechStack[];
  metrics: ArchitecturalMetric[];
  challenge: ProjectChallenge;
  links: {
    live?: string;
    repository?: string;
    whitepaper?: string;
  };
}