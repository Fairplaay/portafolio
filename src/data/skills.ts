import type { SvgComponent } from 'astro/types';
import type { ImageMetadata } from 'astro';

import Typescript from '../assets/icons/typescript.svg';
import React from '../assets/icons/reactjs.svg';
import Vue from '../assets/icons/vue.svg';
import Node from '../assets/icons/nodejs.svg';
import Docker from '../assets/icons/docker.svg';
import MongoDB from '../assets/icons/mongodb.svg';
import Express from '../assets/icons/express.svg';
import JavaScript from '../assets/icons/javascript.svg';

type Skill = {
  name: string;
  icon: SvgComponent & ImageMetadata 
}

export const skills: Skill[] = [
  {
    name: 'JavaScript',
    icon: JavaScript,
  },
  {
    name: 'TypeScript',
    icon: Typescript,
  },
  {
    name: 'Vue.js',
    icon: Vue,
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
    name: 'Express',
    icon: Express,
  },
  {
    name: 'MongoDB',
    icon: MongoDB,
  },
  {
    name: 'Docker',
    icon: Docker,
  },
  {
    name: 'Vue Router',
    icon: Vue,
  },
  {
    name: 'Vuex',
    icon: Vue,
  },
  {
    name: 'Redux',
    icon: React,
  },
  {
    name: 'ESLint',
    icon: JavaScript,
  },
  {
    name: 'Prettier',
    icon: JavaScript,
  },
];