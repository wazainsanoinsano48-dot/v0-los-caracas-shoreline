# Sistema de Tema - Los Caracas Shoreline

## Descripción General

Este proyecto implementa un sistema de tema completo que permite a los usuarios cambiar entre modo claro y oscuro de forma manual, con detección automática basada en las preferencias del sistema operativo del dispositivo. El sistema es completamente compatible con Next.js 16 y proporciona cambios instantáneos y persistentes.

## Características Principales

✓ **Cambio Manual** - Botón de alternancia en el header para cambiar entre modo claro y oscuro
✓ **Detección Automática** - El tema se ajusta automáticamente a las preferencias del sistema operativo
✓ **Persistencia** - Las preferencias del usuario se guardan en localStorage con clave `los-caracas-theme`
✓ **Sin Parpadeo** - Implementación optimizada que evita parpadeo al cargar la página
✓ **Variables CSS** - Sistema de tokens de color mediante variables CSS para fácil personalización
✓ **Contexto React** - Uso de next-themes para gestión global del estado del tema
✓ **Compatibilidad** - Funciona perfectamente con Tailwind CSS v4

## Arquitectura del Sistema

### 1. ThemeProvider (`/components/theme-provider.tsx`)

Envoltura del componente `NextThemesProvider` de la librería `next-themes`. Este proveedor:

- Gestiona el estado global del tema
- Detecta automáticamente las preferencias del sistema operativo
- Almacena las preferencias en localStorage
- Aplica la clase `.dark` al elemento raíz (`<html>`)
- Proporciona el hook `useTheme()` para acceder al tema en cualquier componente

**Configuración:**
```typescript
<ThemeProvider
  attribute="class"              // Controla tema mediante clase CSS
  defaultTheme="system"          // Por defecto usa preferencia del sistema
  enableSystem                   // Habilita detección automática
  disableTransitionOnChange      // Desactiva transiciones en cambio de tema
  storageKey="los-caracas-theme" // Clave en localStorage
>
```

### 2. ThemeToggle (`/components/theme-toggle.tsx`)

Componente cliente que proporciona un botón para cambiar manualmente entre modo claro y oscuro.

**Características:**
- Icon dinámico (Sol para modo claro, Luna para modo oscuro)
- Evita problemas de hidratación en Next.js
- Integración con Tailwind para estilos reactivos
- Accesibilidad incluida (aria-label, title)

**Uso:**
```tsx
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  )
}
```

### 3. Variables CSS de Tema

Las variables CSS se definen en dos contextos:

#### Modo Claro (`:root`)
```css
:root {
  --background: oklch(0.99 0 0);     /* Fondo blanco/crema */
  --foreground: oklch(0.2 0.02 220); /* Texto oscuro */
  --accent: oklch(0.48 0.12 180);    /* Acentos turquesa */
  --secondary: oklch(0.95 0.01 100); /* Secundario beige */
  --muted: oklch(0.92 0.01 0);       /* Tonos mutados */
  --border: oklch(0.94 0.003 0);     /* Bordes sutiles */
  /* ... más variables */
}
```

#### Modo Oscuro (`.dark`)
```css
.dark {
  --background: oklch(0.12 0 0);      /* Fondo casi negro */
  --foreground: oklch(0.95 0.01 0);   /* Texto claro */
  --accent: oklch(0.65 0.12 190);     /* Acentos turquesa brillante */
  --secondary: oklch(0.22 0.01 0);    /* Secundario gris oscuro */
  --muted: oklch(0.22 0.01 0);        /* Tonos mutados */
  --border: oklch(0.22 0.01 0);       /* Bordes oscuros */
  /* ... más variables */
}
```

### 4. Integración en Layout

El `RootLayout` está configurado para soportar el sistema de tema:

```typescript
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**Nota:** `suppressHydrationWarning` es necesario porque next-themes modifica el DOM en el servidor.

## Cómo Funciona

### 1. **Inicialización**
- Al cargar la página, next-themes revisa localStorage por una preferencia guardada
- Si existe, usa esa preferencia
- Si no, detecta las preferencias del sistema operativo

### 2. **Aplicación del Tema**
- Se añade la clase `.dark` al elemento `<html>` si el tema es oscuro
- Las variables CSS cambian automáticamente según la clase aplicada
- Tailwind CSS utiliza estas variables para los estilos (colores, etc.)

### 3. **Cambio Manual**
- Usuario hace click en el botón ThemeToggle
- Se llama a `setTheme()` que:
  - Alterna entre 'light' y 'dark'
  - Guarda la preferencia en localStorage
  - Aplica la clase `.dark` al HTML
  - Las variables CSS se actualizan instantáneamente

### 4. **Detección del Sistema**
- Se escucha el evento `change` de `window.matchMedia('(prefers-color-scheme: dark)')`
- Si el usuario cambia la preferencia del SO, el tema se actualiza automáticamente
- Solo si la preferencia guardada es "system"

## Personalización de Colores

### Cambiar Colores en Modo Claro

Edita `:root` en `/app/globals.css`:

```css
:root {
  --background: oklch(0.99 0 0);      /* Cambiar fondo */
  --accent: oklch(0.48 0.12 180);     /* Cambiar acento */
  --secondary: oklch(0.95 0.01 100);  /* Cambiar secundario */
}
```

### Cambiar Colores en Modo Oscuro

Edita `.dark` en `/app/globals.css`:

```css
.dark {
  --background: oklch(0.12 0 0);      /* Cambiar fondo oscuro */
  --accent: oklch(0.65 0.12 190);     /* Cambiar acento oscuro */
}
```

### Formato de Colores (OKLch)

Los colores usan el espacio de color OKLch para mejor perceptibilidad:
- `oklch(L C H)` donde:
  - **L** (0-1): Luminancia (brillo)
  - **C** (0+): Croma (saturación)
  - **H** (0-360): Hue (matiz en grados)

**Ejemplo:** `oklch(0.65 0.12 190)` es un turquesa brillante

## Uso en Componentes

### Acceder al Tema Actual

```typescript
'use client'

import { useTheme } from 'next-themes'

export function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={() => setTheme('dark')}>Modo Oscuro</button>
    </div>
  )
}
```

### Usar Variables CSS en Componentes

```typescript
export function Card() {
  return (
    <div className="bg-background text-foreground border border-border">
      Contenido
    </div>
  )
}
```

Las clases de Tailwind se mapean a las variables CSS:
- `bg-background` → `var(--background)`
- `text-foreground` → `var(--foreground)`
- `border-border` → `var(--border)`

## Comportamiento en Diferentes Escenarios

### Escenario 1: Usuario No ha Guardado Preferencia
1. Se detecta automáticamente la preferencia del SO
2. Se aplica el tema correspondiente
3. Al cambiar manualmente, se guarda la preferencia
4. Próximas visitas usan la preferencia guardada

### Escenario 2: Usuario Abre en Nueva Pestaña
1. Se recupera la preferencia de localStorage
2. Se aplica inmediatamente (sin parpadeo)
3. El tema es consistente en todas las pestañas

### Escenario 3: Usuario Cambia Preferencia del SO
1. Si tiene "system" guardado, el tema se actualiza automáticamente
2. Si tiene "light" o "dark" guardado, se mantiene la preferencia manual

### Escenario 4: Usuario Borra localStorage
1. La próxima vez que cargue, se detecta automáticamente el SO
2. El comportamiento vuelve al escenario 1

## Solución de Problemas

### Parpadeo al Cargar la Página
- **Causa:** Hidratación incorrecta
- **Solución:** next-themes maneja esto automáticamente, pero asegúrate que `suppressHydrationWarning` está en el HTML

### El Tema No Cambia
- **Causa:** ThemeProvider no está envolviendo los componentes
- **Verificar:** Que ThemeProvider esté en `layout.tsx`

### localStorage No Funciona
- **Causa:** Navegador en modo incógnito o localStorage deshabilitado
- **Solución:** next-themes maneja esto gracefully y usa session storage como alternativa

### Variables CSS No Se Aplican
- **Causa:** Componente no tiene las clases de Tailwind correctas
- **Verificar:** Usa `bg-background`, `text-foreground`, etc. en lugar de valores hardcodeados

## Archivos Relevantes

```
/app
  ├── layout.tsx                    # Contiene ThemeProvider
  └── globals.css                   # Define variables CSS y clases .dark

/components
  ├── theme-provider.tsx            # Configuración de next-themes
  ├── theme-toggle.tsx              # Botón para cambiar tema
  └── header.tsx                    # Incluye ThemeToggle
```

## Dependencias

```json
{
  "next-themes": "^latest"
}
```

## Notas de Implementación

- **Next.js Compatibility:** Funciona en Next.js 13+ (usando App Router)
- **React Version:** Compatible con React 18+
- **Browser Support:** Todos los navegadores modernos
- **Performance:** Sin impacto significativo en performance
- **SSR:** Completamente compatible con Server-Side Rendering

## Referencias

- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [OKLch Color Space](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
- [prefers-color-scheme API](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
