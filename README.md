# Portafolio Profesional - Jesus Garcia 🤖

Showroom Digital del desarrollador Full-Stack Jesus Garcia.

## Stack Tecnológico

- **Core:** Astro 5.x (JavaScript)
- **Styling:** Tailwind CSS 3.4 + DaisyUI 4.12
- **CMS:** Sanity.io v3
- **Deployment:** Cloudflare Pages

## Desarrollo Local

```bash
# Instalar dependencias
npm install --legacy-peer-deps

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

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

Copia `.env.example` a `.env` y configura:

```
PUBLIC_SANITY_PROJECT_ID=ix45pdgt
PUBLIC_SANITY_DATASET=production
# SANITY_API_TOKEN=sk...
```

## Despliegue Cloudflare

1. Conectar repositorio a Cloudflare Pages
2. Configurar build command: `npm run build`
3. Output directory: `dist`
4. Añadir variables de entorno en Cloudflare dashboard
5. Deploy hook configurado para rebuild automático al editar en Sanity

## Showroom Demo

Este portafolio incluye un esquema de "Productos" demo para demostrar a clientes cómo funcionaría su catálogo dinámico.

---

❌ **NO hacer commit del token de API de Sanity** — mantener en variables de entorno local.