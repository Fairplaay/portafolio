# Portafolio Profesional - Jesus Garcia 🤖

Showroom Digital del desarrollador Full-Stack Jesus Garcia.

## Stack Tecnológico

- **Core:** Astro 6.x (JavaScript)
- **Styling:** Tailwind CSS 3.4 + DaisyUI 4.12
- **CMS:** Sanity.io v3 (local)
- **Deployment:** Cloudflare Pages

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar portafolio
npm run dev

# Iniciar Sanity Studio (en otra terminal)
cd sanity && sanity dev
```

**Sanity Studio:** http://localhost:3333

## Estructura

```
src/
├── components/    # Componentes reutilizables
├── layouts/    # Layouts base
├── pages/       # Páginas Astro
├── lib/        # Utilidades Sanity
sanity/
└── schemas/    # Esquemas de datos Sanity
```

## Variables de Entorno

Copia `.env.local` a `.env` y configura:

```
PUBLIC_SANITY_PROJECT_ID=ix45pdgt
PUBLIC_SANITY_DATASET=production
# SANITY_API_TOKEN=sk...
```

## Despliegue Cloudflare

1. Conectar repositorio a Cloudflare Pages
2. Rama: `dev-portafolio`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Añadir variables de entorno

---

❌ **NO hacer commit del token de API de Sanity**