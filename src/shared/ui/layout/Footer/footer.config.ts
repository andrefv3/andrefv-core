import { ComponentType } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  ariaLabel: string;
  Icon: ComponentType<{ size?: number | string; strokeWidth?: number }>;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/andrefv3',
    ariaLabel: 'Visit my GitHub profile to see my repositories',
    Icon: FaGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/andrefv3',
    ariaLabel: 'Connect with me on LinkedIn professionally',
    Icon: FaLinkedinIn,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com/andrefv03',
    ariaLabel: 'Follow my personal Instagram profile',
    Icon: FaInstagram,
  },
] as const;