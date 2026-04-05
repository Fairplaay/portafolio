import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

import Typescript from '@/assets/icons/typescript.svg';
import React from '@/assets/icons/reactjs.svg';
import Node from '@/assets/icons/typescript.svg'; // reusing - no node icon
import Astro from '@/assets/icons/astro.svg';
import Python from '@/assets/icons/python.svg';

type Skill = {
  name: string;
  icon: SvgComponent & ImageMetadata 
}

export const skills = [
  {
    name: 'TypeScript',
    icon: Typescript,
  },
  {
    name: 'React',
    icon: React,
  },
  {
    name: 'Node.js',
    icon: Node,
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