# Ejemplos de Uso del Sistema de Tema

## Ejemplo 1: Usar Variables CSS en Componentes

```tsx
// components/custom-card.tsx
export function CustomCard() {
  return (
    <div className="bg-card text-card-foreground border border-border rounded-sm p-6">
      <h3 className="text-lg font-serif text-foreground">Mi Tarjeta</h3>
      <p className="text-sm text-muted-foreground">
        Este contenido se adapta automáticamente al tema.
      </p>
    </div>
  )
}
```

**Cómo funciona:**
- `bg-card` → `background-color: var(--card)`
- `text-card-foreground` → `color: var(--card-foreground)`
- En modo oscuro, estas variables cambian automáticamente

## Ejemplo 2: Acceder al Tema Actual en Componentes

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeInfo() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={() => setTheme('light')}>Claro</button>
      <button onClick={() => setTheme('dark')}>Oscuro</button>
      <button onClick={() => setTheme('system')}>Sistema</button>
    </div>
  )
}
```

## Ejemplo 3: Componente con Lógica Especial por Tema

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function DynamicBanner() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`p-4 rounded-sm ${
      theme === 'dark'
        ? 'bg-slate-900 text-white'
        : 'bg-blue-50 text-blue-900'
    }`}>
      {theme === 'dark' 
        ? '🌙 Estás en modo oscuro' 
        : '☀️ Estás en modo claro'}
    </div>
  )
}
```

## Ejemplo 4: Imagen que Cambia con el Tema

```tsx
'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ThemedImage() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Image
      src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
      alt="Logo"
      width={100}
      height={100}
    />
  )
}
```

## Ejemplo 5: Usar Variables CSS Personalizadas

Primero, agrega una variable en `globals.css`:

```css
:root {
  --custom-brand: oklch(0.48 0.12 180);
}

.dark {
  --custom-brand: oklch(0.65 0.12 190);
}
```

Luego úsala en tu componente:

```tsx
export function BrandedButton() {
  return (
    <button
      className="px-4 py-2 rounded-sm text-white transition-colors"
      style={{
        backgroundColor: 'var(--custom-brand)',
        '--custom-brand': 'var(--custom-brand)'
      } as React.CSSProperties}
    >
      Botón Personalizado
    </button>
  )
}
```

O mejor aún, crea una clase Tailwind personalizada en `globals.css`:

```css
@layer components {
  .btn-brand {
    @apply bg-[--custom-brand] text-white px-4 py-2 rounded-sm;
  }
}
```

Luego úsala así:

```tsx
export function BrandedButton() {
  return <button className="btn-brand">Botón Personalizado</button>
}
```

## Ejemplo 6: Listener de Cambios de Tema

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

export function ThemeListener() {
  const { theme } = useTheme()

  useEffect(() => {
    console.log('Tema cambió a:', theme)
    
    // Aquí puedes ejecutar lógica adicional cuando el tema cambia
    // Por ejemplo: analytics, actualizar metadatos, etc.
  }, [theme])

  return null
}
```

## Ejemplo 7: Selector de Tema Completo

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

export function ThemeSelector() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const options = [
    { value: 'light', label: 'Claro', icon: Sun },
    { value: 'dark', label: 'Oscuro', icon: Moon },
    { value: 'system', label: 'Sistema', icon: Monitor },
  ]

  return (
    <div className="flex gap-2">
      {options.map(option => {
        const Icon = option.icon
        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={`flex items-center gap-2 px-3 py-2 rounded-sm transition-colors ${
              theme === option.value
                ? 'bg-accent text-white'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
            }`}
          >
            <Icon className="w-4 h-4" />
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
```

## Ejemplo 8: Componente con Preferencia de Tema Persistente

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function PersistentThemeNote() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const savedTheme = localStorage.getItem('los-caracas-theme')

  return (
    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-sm border border-blue-200 dark:border-blue-800">
      <p className="text-sm">
        Preferencia guardada: <strong>{savedTheme || 'Ninguna'}</strong>
      </p>
      <p className="text-sm">
        Tema actual: <strong>{theme}</strong>
      </p>
    </div>
  )
}
```

## Ejemplo 9: Animación en Cambios de Tema

```tsx
'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function AnimatedThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleThemeChange = () => {
    // Agregar clase de transición
    document.documentElement.classList.add('theme-transition')
    
    setTheme(theme === 'dark' ? 'light' : 'dark')
    
    // Remover clase después de la transición
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
    }, 300)
  }

  return (
    <button
      onClick={handleThemeChange}
      className="px-4 py-2 rounded-sm bg-accent text-white"
    >
      Cambiar a {theme === 'dark' ? 'Claro' : 'Oscuro'}
    </button>
  )
}
```

Y en `globals.css`:

```css
html.theme-transition,
html.theme-transition *,
html.theme-transition *:before,
html.theme-transition *:after {
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1),
              color 200ms cubic-bezier(0.4, 0, 0.2, 1),
              border-color 200ms cubic-bezier(0.4, 0, 0.2, 1) !important;
}
```

## Ejemplo 10: Detector de Cambios del Sistema

```tsx
'use client'

import { useEffect, useState } from 'react'

export function SystemThemeDetector() {
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Detectar tema actual del sistema
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setSystemTheme(isDark ? 'dark' : 'light')

    // Escuchar cambios en las preferencias del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <p className="text-sm text-muted-foreground">
      Tu SO prefiere: <strong>{systemTheme === 'dark' ? 'Oscuro' : 'Claro'}</strong>
    </p>
  )
}
```

## Mejores Prácticas

1. **Siempre usa `mounted` state:** Para evitar hidratación incorrecta en componentes que usan `useTheme()`

2. **Prefiere variables CSS:** En lugar de escribir lógica condicional en componentes

3. **Usa Tailwind para estilos:** Las clases de Tailwind se adaptan automáticamente al tema

4. **Evita hardcodear colores:** Usa las variables CSS definidas en `globals.css`

5. **Ten en cuenta SSR:** Los componentes que usan `useTheme()` deben ser `'use client'`

6. **Prueba ambos temas:** Asegúrate que tu UI funciona bien en ambos modos

7. **Respeta preferencias del usuario:** Usa `defaultTheme="system"` cuando sea posible

8. **Optimiza para accesibilidad:** Asegura suficiente contraste en ambos temas
