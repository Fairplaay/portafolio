# Astro Portfolio Template

Template de portafolio personal construido con Astro, diseñado para ser fácil de personalizar y desplegar.

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/elstron/astro-portfolio.git

# Instalar dependencias
pnpm install
```

## Comandos

```bash
# Iniciar servidor de desarrollo en puerto 4321
pnpm dev

# Generar build de producción
pnpm build

# Previsualizar build de producción
pnpm preview
```

## Personalización

Todo el contenido del portafolio se gestiona mediante archivos TypeScript ubicados en `src/data/`. Edita estos archivos para personalizar tu información:

### src/data/aboutMe.ts

Información personal y de contacto:

- `name`: Nombre y título principal
- `profession`: Profesión actual
- `description`: Descripción breve
- `bio.paragraphs`: Array de párrafos para la sección "About"
- `skills`: Array de habilidades técnicas
- `hobbies`: Array de hobbies personales
- `profile.picture`: Ruta de la imagen de perfil
- `banner.image`: URL o ruta de la imagen del banner
- `contact`: Email y teléfono
- `socialMedia`: Enlaces a redes sociales

### src/data/experience.ts

Array de experiencias laborales. Cada entrada contiene:

- `company`: Nombre de la empresa
- `position`: Cargo o posición
- `duration`: Período de tiempo
- `responsibilities`: Array de responsabilidades

### src/data/projects.ts

Array de proyectos. Cada proyecto incluye:

- `title`: Nombre del proyecto
- `description`: Descripción del proyecto
- `image`: URL de la imagen del proyecto
- `link`: Enlace al proyecto
- `stack`: Array de tecnologías utilizadas

### src/data/skills.ts

Array de habilidades técnicas con iconos SVG. Añade o elimina habilidades modificando este archivo. Los iconos SVG se almacenan en `src/assets/icons/`.

## Arquitectura

```
str-portfolio/
├── public/                    # Archivos estáticos
│   ├── profile.jpg           # Imagen de perfil
│   └── screenshot_*.png      # Screenshots
├── src/
│   ├── Layouts/
│   │   └── Layout.astro      # Layout principal con meta tags y estructura HTML
│   ├── assets/
│   │   ├── icons/            # Iconos SVG para skills
│   │   └── social/           # Iconos de redes sociales
│   ├── components/
│   │   ├── Experience/
│   │   │   └── ExperienceCard.astro    # Card individual de experiencia
│   │   ├── projects/
│   │   │   └── ProjectCard.astro       # Card individual de proyecto
│   │   ├── sections/
│   │   │   ├── About.astro             # Sección "Sobre mí"
│   │   │   ├── Experience.astro        # Sección de experiencia laboral
│   │   │   ├── Hero.astro              # Sección hero con banner y perfil
│   │   │   ├── Projects.astro          # Sección de proyectos
│   │   │   └── Skills.astro            # Sección de habilidades
│   │   └── Footer.astro                # Footer del sitio
│   ├── data/
│   │   ├── aboutMe.ts        # Datos personales y contacto
│   │   ├── experience.ts     # Datos de experiencia laboral
│   │   ├── projects.ts       # Datos de proyectos
│   │   └── skills.ts         # Datos de habilidades técnicas
│   ├── pages/
│   │   └── index.astro       # Página principal que compone todas las secciones
│   └── styles.css            # Estilos globales con CSS variables
├── astro.config.mjs          # Configuración de Astro (modo server)
├── tsconfig.json             # Configuración de TypeScript
└── package.json              # Dependencias y scripts
```

### Flujo de Datos

1. Los datos se definen en archivos TypeScript (`src/data/`)
2. Las secciones (`src/components/sections/`) importan y consumen estos datos
3. Los componentes de card (`ExperienceCard`, `ProjectCard`) renderizan elementos individuales
4. La página principal (`src/pages/index.astro`) compone todas las secciones
5. El Layout (`src/Layouts/Layout.astro`) proporciona la estructura HTML y meta tags

### Estilos

El proyecto utiliza:
- CSS variables para temas claro/oscuro automáticos mediante `light-dark()`
- Estilos scoped en componentes Astro
- Fuente `Roboto Mono Variable` de Fontsource
- Grid CSS para layout principal
- Variables CSS personalizables en `styles.css`

### Modo de Renderizado

El proyecto está configurado en modo `server` (SSR) en `astro.config.mjs`. Para generar un sitio estático, cambia `output: 'server'` a `output: 'static'`.

## Tecnologías

- Astro 6.0.8
- TypeScript
- CSS con variables nativas
- Roboto Mono Variable font
- Prettier para formateo de código

## Licencia

ISC
