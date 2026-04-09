# Dra. Silvia Romero — Sitio Web

Sitio web institucional de la **Dra. Silvia Romero**, cirujana plástica estética y reconstructiva (Medellín, Colombia). Landing page de una sola vista con secciones ancladas: hero, doctora, servicios, galería de resultados, testimonios, journey del paciente, FAQ y contacto.

Soporta **dos idiomas** (Español / Inglés) mediante un sistema de traducciones centralizado.

---

## Stack técnico

- **[Next.js 15](https://nextjs.org/)** (App Router, Turbopack)
- **[React 18](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[HeroUI v2](https://heroui.com/)** — librería de componentes UI
- **[Tailwind CSS v4](https://tailwindcss.com/)**
- **[Framer Motion](https://www.framer.com/motion/)** y **[GSAP](https://gsap.com/)** — animaciones
- **[next-themes](https://github.com/pacocoursey/next-themes)** — tema claro/oscuro
- **[iconsax-reactjs](https://iconsax.io/)** y **[flag-icons](https://flagicons.lipis.dev/)** — iconografía

---

## Requisitos previos

- **Node.js** ≥ 18.17
- **pnpm** ≥ 8 (recomendado) — también funciona con `npm`, `yarn` o `bun`

Si usas `pnpm`, asegúrate de tener el siguiente archivo `.npmrc` en la raíz (ya está configurado):

```
public-hoist-pattern[]=*@heroui/*
```

---

## Cómo correr en local

```bash
# 1. Instalar dependencias
pnpm install

# 2. Levantar servidor de desarrollo (http://localhost:3000)
pnpm dev
```

## Build de producción

```bash
pnpm build    # compila la aplicación
pnpm start    # sirve el build en http://localhost:3000
```

## Linter

```bash
pnpm lint     # corre ESLint con --fix
```

---

## Estructura de carpetas

```
dra-silvia-romero/
├── app/                    # Rutas del App Router (Next.js 15)
│   ├── layout.tsx          # Layout raíz (navbar, footer, providers)
│   ├── page.tsx            # Landing page (home)
│   ├── providers.tsx       # HeroUI + Theme + Language providers
│   ├── error.tsx           # Pantalla de error global
│   ├── blog/               # Blog (placeholder)
│   ├── contact/            # Página de contacto
│   ├── pricing/            # Página de precios
│   ├── services/           # Página de servicios
│   ├── results/            # Galería de resultados
│   ├── testimonials/       # Testimonios
│   ├── faq/                # FAQ
│   └── allies/             # Aliados
├── components/
│   ├── navbar.tsx          # Navbar principal
│   ├── footer.tsx          # Footer
│   ├── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   ├── theme-switch.tsx    # Toggle de tema
│   ├── icons.tsx           # Iconos personalizados
│   ├── primitives.ts       # Estilos tipográficos compartidos (tailwind-variants)
│   ├── home/               # Secciones de la landing
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Results.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   ├── CustomerJourney.tsx
│   │   ├── DoctorFlipCard.tsx
│   │   ├── DoctorBioModal.tsx
│   │   ├── EmotionalMessage.tsx
│   │   └── TechTicker.tsx
│   └── react-bits/         # Componentes decorativos (menús animados, etc.)
├── config/
│   ├── site.ts             # Nombre del sitio y menú de navegación
│   ├── translations.ts     # Todos los textos ES / EN
│   └── fonts.ts            # Configuración de fuentes
├── context/
│   └── LanguageContext.tsx # Provider de idioma + hook useLanguage()
├── public/
│   ├── img/                # Imágenes (hero, servicios, resultados, doctora, etc.)
│   ├── services/           # Iconos de servicios
│   ├── vid/                # Videos
│   └── logo.png
├── styles/                 # Estilos globales Tailwind
├── types/                  # Tipos TypeScript compartidos
├── docs/
│   ├── TYPOGRAPHY_GUIDE.md # Guía de tipografía del proyecto
│   └── client-brief/       # Información original provista por la clienta
└── tailwind.config.js
```

---

## Cómo editar el contenido del sitio

### 1. Textos (ES / EN)

Todos los textos visibles del sitio viven en **un único archivo**:

```
config/translations.ts
```

Está organizado por idioma y luego por sección:

```ts
export const translations = {
  en: {
    nav: { doctor: "Doctor", services: "Services", ... },
    hero: { title: "...", subtitle: "...", ... },
    services: { ... },
    // ...
  },
  es: {
    nav: { doctor: "Doctora", services: "Servicios", ... },
    // ...
  },
};
```

**Para cambiar cualquier texto**, edita el string correspondiente en ambos idiomas y el cambio se refleja inmediatamente.

### 2. Menú de navegación

Los enlaces del navbar se definen en:

```
config/site.ts
```

Cada item tiene un `label` (clave que se traduce automáticamente) y un `href` (ancla o ruta).

### 3. Imágenes

Todas las imágenes viven en `public/img/` y sus subcarpetas. Para reemplazar una imagen:

1. Sube la nueva imagen a la carpeta correspondiente de `public/img/...` con el **mismo nombre** que la anterior, **o**
2. Cambia la ruta en el componente que la usa (por ejemplo `components/home/Results.tsx` o `components/home/Services.tsx`).

Las rutas en el código siempre empiezan con `/img/...` (relativas a `public/`).

### 4. Videos

Los videos se almacenan en `public/vid/`.

### 5. Tema (colores, tipografías)

- Colores y tokens de HeroUI: `tailwind.config.js`
- Fuentes: `config/fonts.ts`
- Estilos globales: `styles/globals.css`
- Guía tipográfica: `docs/TYPOGRAPHY_GUIDE.md`

---

## Internacionalización (i18n)

El sitio usa un contexto simple (`context/LanguageContext.tsx`) que expone el hook `useLanguage()`:

```tsx
import { useLanguage } from "@/context/LanguageContext";

const { language, setLanguage, t } = useLanguage();
// t es el objeto de traducciones del idioma actual
// Ejemplo: t.hero.title
```

El toggle de idioma vive en el navbar (botón con banderas).

---

## Despliegue

El proyecto está listo para desplegarse en **[Vercel](https://vercel.com/)** sin configuración extra:

1. Conecta el repositorio de GitHub a Vercel.
2. Vercel detecta automáticamente Next.js y usa los comandos por defecto:
   - Build: `pnpm build`
   - Output: `.next`
3. Haz click en **Deploy**.

También se puede desplegar en Netlify, Cloudflare Pages o cualquier host que soporte Next.js 15.

### Variables de entorno

Actualmente el proyecto **no requiere variables de entorno**. Si en el futuro se agregan integraciones (formulario de contacto con email, analytics, etc.), deberán documentarse aquí y añadirse a un archivo `.env.local` (ya ignorado por git).

---

## Scripts disponibles

| Script        | Descripción                                 |
| ------------- | ------------------------------------------- |
| `pnpm dev`    | Servidor de desarrollo con Turbopack        |
| `pnpm build`  | Build de producción                         |
| `pnpm start`  | Sirve el build de producción                |
| `pnpm lint`   | Ejecuta ESLint con `--fix`                  |

---

## Notas para el mantenimiento

- **Añadir una nueva sección a la landing**: crea el componente en `components/home/` y úsalo desde `app/page.tsx`. Agrega sus textos en `config/translations.ts` y, si necesita un ancla en el menú, añádela en `config/site.ts`.
- **Añadir un idioma nuevo**: duplica el bloque `en` dentro de `config/translations.ts`, traduce los valores y agrega el nuevo código en `context/LanguageContext.tsx`.
- **Cambiar logo o favicon**: reemplaza `public/logo.png` y `public/favicon.ico`.

---

## Créditos

Desarrollado sobre el [next-app-template](https://github.com/heroui-inc/next-app-template) de HeroUI, modificado y extendido para este proyecto.
