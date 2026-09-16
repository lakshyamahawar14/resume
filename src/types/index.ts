export interface ItemDetail {
  title: string;
  description: string[];
}

export interface ExperienceItem {
  start: string;
  end: string;
  period: number;
  role: string;
  organization: string;
  score?: string;
  details: ItemDetail;
  tools?: string[];
}

export interface ProjectItem {
  start: string;
  end: string;
  period: number;
  organization?: string;
  details: ItemDetail;
  tools?: string[];
  link?: string;
  imageSrc?: string;
}

export interface EducationItem {
  year: number;
  examination: string;
  institution: string;
  score: string;
}

export interface SkillGroup {
  name: string;
  values: string[];
}

export interface SocialLinkItem {
  icon: string;
  name: string;
  route: string;
}