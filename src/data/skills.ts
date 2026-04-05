import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

import Typescript from '@/assets/icons/typescript.svg';
import React from '@/assets/icons/reactjs.svg';
import Node from '@/assets/icons/nodejs.svg';
import MongoDB from '@/assets/icons/mongodb.svg';
import Vue from '@/assets/icons/vuejs.svg';
import Docker from '@/assets/icons/docker.svg';

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
    name: 'MongoDB',
    icon: MongoDB,
  },
  {
    name: 'Vue.js',
    icon: Vue,
  },
  {
    name: 'Docker',
    icon: Docker,
  },
] as Skill[];