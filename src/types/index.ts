export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  github: string;
  highlights?: string[];
  stars?: number;
}

export type ProjectCategory =
  | 'E-commerce'
  | 'Security'
  | 'Healthcare'
  | 'Banking'
  | 'Full-Stack';

export type ProjectFilter = 'All' | ProjectCategory;

export type ExperiencePhaseType =
  | 'Learning & Building'
  | 'Phase 1'
  | 'Phase 2'
  | 'Phase 3'
  | 'Phase 4';

export interface Skill {
  name: string;
  icon: string;
  brandColor: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  github: string;
  email: string;
  linkedin: string;
  typewriterRoles: string[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  duration?: string;
  title: string;
  type: ExperiencePhaseType;
  description: string;
  highlights: string[];
}
