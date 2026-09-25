export type ProjectCategory = 'all' | 'ai' | 'web' | 'cli';

export interface ProjectMetric {
  label: string;
  value: string;
  detail?: string;
}

export interface ArchitectureStep {
  title: string;
  description: string;
  tech: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'ai' | 'web' | 'cli';
  categoryLabel: string;
  description: string;
  problemSolved: string;
  techStack: string[];
  subdomain: string;
  liveDemoUrl: string;
  githubUrl: string;
  hasDownloadRelease: boolean;
  releaseUrl?: string;
  releaseVersion?: string;
  image?: string | null;
  featured: boolean;
  status: 'production' | 'stable' | 'beta';
  metrics: ProjectMetric[];
  architectureDetails: {
    overview: string;
    flow: ArchitectureStep[];
    concurrencyModel: string;
    throughputBenchmark: string;
  };
}

export interface TechItem {
  name: string;
  category: 'languages' | 'databases_ai' | 'infra';
  iconName?: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  experienceYears: number;
  highlight: string;
  associatedProjects: string[]; // project ids
}

export interface TerminalCommandOutput {
  command: string;
  output: string | string[];
  type?: 'text' | 'success' | 'error' | 'table' | 'banner';
}
