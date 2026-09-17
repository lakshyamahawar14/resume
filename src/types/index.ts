export interface SocialLinkItem {
  name: string;
  icon: string;
  link: string;
}

export interface PersonalItem {
  name: string;
  role: string;
  organization: string;
  about: string;
  email: string;
  phone: string;
  image: string;
}

export interface InterestItem {
  name: string;
}

export interface EducationItem {
  year: number;
  title: string;
  subtitle: string;
  score: string;
}

export interface SkillCategoryItem {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  start: string;
  end: string;
  period: number;
  role: string;
  organization: string;
  title: string;
  description: string[];
  skills: string[];
}

export interface ProjectItem {
  start: string;
  end: string;
  period: number;
  title: string;
  description: string[];
  skills: string[];
  image?: string;
  link?: string;
}