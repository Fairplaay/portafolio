import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

import Typescript from '@/assets/icons/typescript.svg';
import React from '@/assets/icons/reactjs.svg';
import Php from '@/assets/icons/php.svg';
import Astro from '@/assets/icons/astro.svg';
import Tailwind from '@/assets/icons/tailwind.svg';
import Python from '@/assets/icons/python.svg';
import Next from '@/assets/icons/next.svg';

type Skill = {
  name: string;
  icon: SvgComponent & ImageMetadata 
}

export const skills = [
  {
    name: 'Typescript',
    icon: Typescript,
  },
  {
    name: 'React',
    icon: React,
  },
  {
    name: 'Astro',
    icon: Astro,
  },
  {
    name: 'Python',
    icon: Python,
  },
] as Skill[];