import { SVG_ICONS } from '../core/icons';

/** Brand icon registered from `public/icons`, used via `<mat-icon svgIcon>`. */
export type SvgIconName = (typeof SVG_ICONS)[number];

export type ThemeMode = 'light' | 'dark';

/** Ids of the sections that can be rendered on the page (also used as anchor ids). */
export type SectionId = 'about' | 'experience' | 'education' | 'skills' | 'projects' | 'contact';

export interface Link {
  label: string;
  /** Absolute URL, `mailto:` link or in-page anchor like `#contact`. */
  url: string;
  /** Material icon name, e.g. `mail` (see https://fonts.google.com/icons). */
  icon?: string;
  /** Brand icon, takes precedence over `icon`. */
  svgIcon?: SvgIconName;
}

export interface SectionBase {
  enabled: boolean;
  /** Heading shown above the section. */
  title: string;
  /** Optional line shown below the heading. */
  subtitle?: string;
  /** If set, the section is listed in the header navigation with this label. */
  navLabel?: string;
}

export interface ThemeConfig {
  /** Show the light/dark switch in the header. */
  showToggle: boolean;
  /** Optional accent colour override; all accent shades are derived from it. */
  accent?: { light: string; dark: string };
}

export interface HeroSection extends SectionBase {
  /** Text before the highlighted name, e.g. "Hi, I'm". */
  greeting: string;
  name: string;
  intro: string;
  /** Optional avatar image path (relative to `public/`). Falls back to initials. */
  avatar?: string;
  avatarAlt?: string;
  actions: Link[];
}

/** A titled group of bullet points within a timeline entry, e.g. "Frontend". */
export interface ExperienceSubsection {
  title: string;
  highlights: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  companyUrl?: string;
  location?: string;
  description?: string;
  /** Bullet points below the description. */
  highlights?: string[];
  /** Titled groups of bullet points, shown after `highlights`. */
  sections?: ExperienceSubsection[];
  technologies?: string[];
  /** Material icon name for the timeline marker, defaults to the section's icon, then `work`. */
  icon?: string;
}

/** Used for both the experience and the education timeline. */
export interface TimelineSection extends SectionBase {
  /** Default Material icon name for all entries of this timeline. */
  icon?: string;
  entries: ExperienceEntry[];
}

export interface SkillGroup {
  /** Optional group heading; a single unnamed group renders as one row of pills like the design. */
  name?: string;
  /** Optional short sentence below the group name. */
  description?: string;
  skills: string[];
}

export interface SkillsSection extends SectionBase {
  groups: SkillGroup[];
}

export interface Project {
  title: string;
  description: string;
  /** Optional preview image path (relative to `public/`). */
  image?: string;
  imageAlt?: string;
  tags?: string[];
  links?: Link[];
}

export interface ProjectsSection extends SectionBase {
  /** Show a placeholder area for projects without an image, keeping all cards the same height. */
  showImagePlaceholder: boolean;
  items: Project[];
}

export interface ContactSection extends SectionBase {
  text: string;
  action?: Link;
}

export interface FooterConfig {
  socials: Link[];
  /** `{year}` is replaced with the current year. */
  copyright: string;
}

export interface AnimationConfig {
  showSplashAnimation: boolean;
  splashAnimationDuration: number;
}

export interface PortfolioConfig {
  name: string;
  theme: ThemeConfig;
  /** Render order of the sections; the navigation follows the same order. */
  sectionOrder: SectionId[];
  animation: AnimationConfig;
  sections: {
    about: HeroSection;
    experience: TimelineSection;
    education: TimelineSection;
    skills: SkillsSection;
    projects: ProjectsSection;
    contact: ContactSection;
  };
  footer: FooterConfig;
}
