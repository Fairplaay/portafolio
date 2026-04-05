import Linkedin from '@/assets/social/linkedin.svg'
import Twitter from '@/assets/social/x.svg'
import Youtube from '@/assets/social/youtube.svg'
import Github from '@/assets/social/github.svg'
import Facebook from '@/assets/social/facebook.svg'
import Instagram from '@/assets/social/instagram.svg'
import Website from '@/assets/social/website.svg'

import type { ImageMetadata } from 'astro';
import type { SvgComponent } from 'astro/types';

export const socialMediaIcons = {
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
  facebook: Facebook,
  instagram: Instagram,
  website: Website,
  x: Twitter,

} satisfies Record<string, SvgComponent & ImageMetadata>; 
