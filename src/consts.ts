import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "hara's blog",
  description:
    'Cybersecurity competition writeups and achievements by Harabagiu Robert-Andrei',
  href: 'https://astro-erudite.vercel.app',
  author: 'hara',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/writeups',
    label: 'writeups',
  },
  {
    href: '/achievements',
    label: 'achievements',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/HarabagiuRobert-Andrei',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/robert-andrei-harabagiu-b708241a4/',
    label: 'LinkedIn',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
