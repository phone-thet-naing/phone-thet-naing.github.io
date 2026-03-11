
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { ExperienceItem, SkillGroup, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Phone Thet Naing",
  email: "phonethetnaing34@gmail.com",
  phone: "(+66) 080-157-838-7",
  location: "Thailand",
  bio: "Highly efficient Software Developer & QA Automation Engineer with extensive experience in architecting scalable workflows, building robust automation frameworks, and enhancing system reliability across diverse tech stacks.",
  education: {
    school: "Myanmar Institute of Information Technology",
    location: "Mandalay, Myanmar",
    degree: "B.E (Electronics and Communication Engineering)",
    years: "2016-2023"
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/phone-thet-naing",
    icon: <Github size={20} />
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/phone-thet-naing-1a5867218/",
    icon: <Linkedin size={20} />
  },
  {
    label: "Email",
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: <Mail size={20} />
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Synergy Solutions",
    location: "Thailand (Remote)",
    role: "Software Developer",
    period: "Dec/2024 - Present",
    bullets: [
      "Designed and delivered a scalable Grant Management System for an NGO, supporting multi-country operations by architecting core workflows and data models using AppSheet and Google Apps Script.",
      "Improved grant processing efficiency by ~40% by automating end-to-end workflows, including approvals, validations, and status transitions through backend Apps Script logic.",
      "Reduced manual data entry and reporting effort by ~60% by implementing document automation that extracted structured data from Google Docs and persisted it into centralized databases for real-time visibility.",
      "Led ownership of application lifecycle management by planning and executing Dev/Test/Prod environment migrations across multiple country offices with minimal downtime.",
      "Enhanced system reliability and maintainability by centralizing business logic, enforcing backend validations, and standardizing automation patterns across the GMS."
    ]
  },
  {
    company: "Smthgood",
    location: "Singapore (Remote)",
    role: "Quality Assurance Engineer",
    period: "Sep/2024 - May/2025",
    bullets: [
      "Improved release stability by ~30% by designing comprehensive test strategies and executing end-to-end test coverage across core e-commerce flows (catalog, cart, checkout, payments).",
      "Reduced regression testing time by ~50% by developing and maintaining automated E2E test suites using Cypress and Robot Framework integrated into the release cycle.",
      "Increased defect detection in pre-production by ~40% by performing structured manual testing and exploratory testing focused on high-risk user journeys and edge cases.",
      "Prevented production downtime and revenue-impacting issues by proactively surfacing critical defects during defined testing cycles and collaborating closely with developers on root-cause analysis.",
      "Enhanced overall product quality and user experience by enforcing consistent QA standards, test documentation, and defect triaging practices across features and releases."
    ]
  },
  {
    company: "Hana Microfinance",
    location: "Yangon, Myanmar (Hybrid)",
    role: "Power Platform Developer",
    period: "May/2023 - September/2024",
    bullets: [
      "Developed a Carpool Tracking Application using SharePoint lists, Power Automate flows, and Canvas apps, streamlining carpool management and reducing travel costs.",
      "Enhanced and extended functionalities for the Call Center Management System, optimizing operational efficiency and user experience.",
      "Created a Digital Help Desk, a model-driven ticketing system with specialized dashboards, improving response times and issue resolution efficiency.",
      "Collaborated with stakeholders to gather requirements, design solutions, and deliver robust applications that streamline business processes and enhance productivity.",
      "Conducted thorough testing and quality assurance to ensure the reliability and performance of applications, leading to a significant reduction in post-release issues."
    ]
  },
  {
    company: "Hana Microfinance",
    location: "Yangon, Myanmar (Hybrid)",
    role: "Quality Assurance Engineer",
    period: "November/2022 - September/2024",
    bullets: [
      "Developed comprehensive test cases from Business Requirement Documents (BRDs), ensuring 100% coverage of functional requirements.",
      "Executed a diverse suite of test cases, significantly improving defect detection rates.",
      "Automated microfinance-related mobile and web applications test suites using Selenium, reducing manual testing by 90% and improving regression testing for every release.",
      "Improved test script efficiency by optimizing existing automation frameworks, leading to a 30% reduction in test execution time.",
      "Performed load and stress testing using Postman and JMeter, ensuring the system can handle a high number of concurrent users.",
      "Collaborated with development and product teams to identify and resolve critical bugs, enhancing overall product quality and user satisfaction."
    ]
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages & Core",
    skills: ["JavaScript", "TypeScript", "Python", "English (Proficiency)", "Burmese (Native)"]
  },
  {
    category: "Automation Frameworks",
    skills: ["Selenium (WebdriverIO)", "Appium", "Cypress", "Playwright", "Robot Framework"]
  },
  {
    category: "Web Development",
    skills: ["React JS", "Next JS", "Node.js", "Express", "AppSheet", "Google Apps Script"]
  },
  {
    category: "Cloud & Devops",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "Agile", "Scrum", "Waterfall"]
  },
  {
    category: "Automation & Productivity",
    skills: ["Power Platform (Power Automate, Power Apps)", "SharePoint", "Google Sheets", "Postman", "JMeter"]
  }
];

export const ICONS = {
  Download,
  Code,
  ShieldCheck,
  Terminal,
  Layers,
  ExternalLink
};
