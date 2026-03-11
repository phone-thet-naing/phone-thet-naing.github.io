
// Import React to provide access to React types like ReactNode
import React from 'react';

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}
