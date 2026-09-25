import { Project } from '../types';

/**
 * PRODUCTION PROJECTS CONFIGURATION FOR LEO (leolabs.com.et)
 * -------------------------------------------------------------
 * No demo or non-existent applications are listed here.
 * Add your real projects below, or use the "+ Add Application" 
 * button in the web interface to populate them when ready.
 */
export const PROJECTS: Project[] = [
  // Leave empty for real applications to be added
];

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI & Automation' },
  { id: 'web', label: 'Web Apps' },
  { id: 'cli', label: 'CLI & Tools' }
] as const;
