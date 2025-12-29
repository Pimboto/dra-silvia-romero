# Guía de Tipografía - Dra. Silvia Romero

## 🎨 Fuentes del Proyecto

### Playfair Display (Serif)
- **Uso**: Títulos principales, headings, nombres importantes
- **Personalidad**: Elegante, premium, sofisticada
- **Variable CSS**: `--font-serif`
- **Clase Tailwind**: `font-serif`

### Montserrat (Sans-serif)
- **Uso**: Cuerpo de texto, descripciones, UI elements, botones
- **Personalidad**: Moderna, limpia, legible
- **Variable CSS**: `--font-sans`
- **Clase Tailwind**: `font-sans`

---

## 📐 Jerarquía Tipográfica

### Display (Extra Large Headings)
```tsx
className="font-serif text-6xl md:text-8xl font-bold tracking-tight"
// Uso: Hero principal, títulos de sección principales
```

### H1 (Page Headings)
```tsx
className="font-serif text-5xl md:text-7xl font-bold"
// Uso: Títulos principales de página
```

### H2 (Section Headings)
```tsx
className="font-serif text-4xl md:text-6xl font-bold"
// Uso: Títulos de sección
```

### H3 (Subsection Headings)
```tsx
className="font-serif text-2xl md:text-4xl font-semibold"
// Uso: Subtítulos de sección
```

### H4 (Card Titles)
```tsx
className="font-serif text-xl md:text-2xl font-semibold"
// Uso: Títulos de tarjetas, elementos destacados
```

### Labels (Uppercase Small Text)
```tsx
className="font-sans text-xs uppercase tracking-widest font-bold"
// Uso: Etiquetas, categorías, badges
```

### Body Large
```tsx
className="font-sans text-lg md:text-xl"
// Uso: Párrafos destacados, subtítulos descriptivos
```

### Body Regular
```tsx
className="font-sans text-base"
// Uso: Texto general, contenido principal
```

### Body Small
```tsx
className="font-sans text-sm"
// Uso: Texto secundario, descripciones breves
```

### Buttons
```tsx
className="font-sans font-semibold text-base md:text-lg"
// Uso: Todos los botones
```

### Quotes
```tsx
className="font-serif text-3xl md:text-5xl italic"
// Uso: Citas, testimonios destacados
```

---

## 🎯 Reglas de Aplicación

### ✅ Siempre Serif (Playfair Display)
- Títulos principales (H1, H2, H3)
- Nombres de la doctora
- Títulos de procedimientos
- Citas destacadas
- Números decorativos grandes

### ✅ Siempre Sans (Montserrat)
- Descripciones de servicios
- Texto de botones
- Labels y etiquetas
- Navegación
- Footer
- Formularios
- Tiempos de recuperación
- Notas para pacientes
- Testimonios (cuerpo)

---

## 📝 Pesos de Fuente

### Playfair Display
- `font-bold` (700): Títulos principales
- `font-semibold` (600): Subtítulos
- `font-normal` (400): Ocasional en textos largos
- `italic`: Palabras clave en títulos (ej: "Reales", "Viaje")

### Montserrat
- `font-bold` (700): Labels, categorías
- `font-semibold` (600): Botones, navegación activa
- `font-normal` (400): Cuerpo de texto
- `font-light` (300): Descripciones largas, texto secundario

---

## 🌈 Combinaciones Comunes

### Hero Section
```tsx
// Título principal
<h1 className="font-serif text-7xl lg:text-8xl font-bold text-white">
  Tu Transformación
</h1>

// Descripción
<p className="font-sans text-xl text-white/80">
  Cirugía plástica de excelencia
</p>

// Botón
<button className="font-sans font-semibold text-lg">
  Agendar Consulta
</button>
```

### Service Cards
```tsx
// Título del servicio
<h3 className="font-serif text-2xl font-bold text-white">
  Lipoescultura
</h3>

// Label de categoría
<span className="font-sans text-xs uppercase tracking-widest font-bold text-gold">
  Descripción
</span>

// Descripción
<p className="font-sans text-sm text-gray-300">
  Procedimiento de alta precisión...
</p>
```

### Section Headers
```tsx
// Label superior
<span className="font-sans text-sm uppercase tracking-[0.3em] font-bold text-gold">
  Portafolio Exclusivo
</span>

// Título principal
<h2 className="font-serif text-6xl md:text-7xl font-bold text-white">
  Nuestros <span className="italic text-gold">Procedimientos</span>
</h2>
```

---

## ⚡ Clases de Utilidad Custom

Ya disponibles en `globals.css`:

- `.text-display` - Texto display extra grande
- `.text-heading` - Headings principales
- `.text-subheading` - Subheadings
- `.text-body` - Texto de cuerpo
- `.text-label` - Labels uppercase
- `.text-button` - Texto de botones
- `.text-quote` - Citas en italic

---

## 🚫 Evitar

- ❌ Mezclar serif y sans en un mismo párrafo
- ❌ Usar más de 3 tamaños de fuente en una misma sección
- ❌ Texto muy pequeño (menor a 12px) en serif
- ❌ Botones con font-serif
- ❌ Formularios con font-serif
- ❌ Navegación con font-serif (excepto el logo)

---

## 📱 Responsive Typography

### Móvil (< 768px)
- Display: `text-5xl md:text-7xl`
- H1: `text-4xl md:text-6xl`
- H2: `text-3xl md:text-5xl`
- Body: `text-base`

### Tablet (768px - 1024px)
- Usa el breakpoint `md:`

### Desktop (> 1024px)
- Usa los breakpoints `lg:` y `xl:`

---

## 🎨 Tracking (Espaciado entre letras)

### Títulos Display/H1
```tsx
className="tracking-tight"  // Más compacto, elegante
```

### Labels/Categorías
```tsx
className="tracking-[0.3em]"  // Muy amplio, lujoso
className="tracking-widest"   // Amplio estándar
```

### Texto Normal
```tsx
className="tracking-normal"  // Default, sin tracking extra
```

---

## 📋 Checklist de Implementación

- [x] Fuentes cargadas en `config/fonts.ts`
- [x] Variables CSS configuradas en Tailwind
- [x] Sistema base aplicado en `globals.css`
- [x] Clases utility creadas
- [ ] Todos los componentes usando la jerarquía correcta
- [ ] Responsive typography aplicada
- [ ] Accesibilidad verificada (contraste, tamaño mínimo)

---

## 💡 Ejemplos de Componentes

Ver implementación completa en:
- `components/home/Hero.tsx` - Hero con display text
- `components/home/Services.tsx` - Cards con jerarquía completa
- `components/home/CustomerJourney.tsx` - Timeline con números decorativos
- `components/home/Testimonials.tsx` - Testimonios con nombres en serif
- `components/home/DoctorFlipCard.tsx` - Información médica estructurada
