# Defensa TT1 · PICIS · 2026-B182

Presentación HTML para la defensa del Trabajo Terminal **2026-B182**
*Esquema preventivo de privacidad para PICIS en la versión de nube
basado en la arquitectura Zero Trust* — defensa el **26 de mayo de
2026**.

Archivo único `index.html`, sin dependencias de build. Construida con
las skills `frontend-slides` (Zara Zhang) e `impeccable` siguiendo la
estructura sugerida por la Dra. Nidia Asunción Cortez Duarte. Sólo
contenido del **reporte técnico** y los **anexos** del TT.

## Cómo servirla

```bash
# desde la raíz del repositorio
python3 -m http.server 8731 --directory presentacion
# abrir http://localhost:8731 en Chrome
```

Alternativa con Node:

```bash
npx serve presentacion -p 8731
```

## Atajos del deck

| Tecla | Acción |
|---|---|
| `→` · `↓` · `PgDn` · `Space` | Slide siguiente |
| `←` · `↑` · `PgUp` · `Shift+Space` | Slide anterior |
| `Home` · `End` | Primer / último slide |
| `f` | Fullscreen (F11 también funciona) |
| `b` | Blank (pantalla negra) — útil cuando el sinodal pregunta algo |
| `Esc` | Salir del modo blank |

Soporta clicker estándar (los botones de avanzar/retroceder mapean a
`PgDn` / `PgUp`). También funcionan los swipes en pantallas táctiles.

## Estructura de las 22 diapositivas

| # | Slide | Insumo del reporte |
|---|---|---|
| 01 | Portada | Cap. 0 — Portada |
| 02 | Introducción | Cap. 0 — Introducción |
| 03 | Problemática | Cap. 1 — Antecedentes |
| 04 | Objetivo general | Cap. 1 §1.5 — cita verbatim |
| 05 | Objetivos particulares | Cap. 1 §1.5 — cita verbatim |
| 06 | Estado del arte | Cap. 2 + Anexo H |
| 07 | Marco teórico — NIST | Cap. 3 §3.1-3.4 |
| 08 | Marco teórico — Legislación MX | Cap. 3 §3.5-3.9 + Anexo E |
| 09 | Marco teórico — F<sub>β=2</sub> | Cap. 3 §3.10 |
| 10 | Herramientas tecnológicas | Cap. 4 §4.3 + Anexo B |
| 11 | Metodología | Cap. 4 §4.1 |
| 12 | Análisis (brecha) | Cap. 4 §4.2 + Anexo I |
| 13 | Requisitos F y NF | Cap. 4 §4.4-4.5 + Anexo A |
| 14 | C1 Contexto | Cap. 5 + `c1-contexto.png` |
| 15 | C2 Contenedores | Cap. 5 + `c2-contenedores.png` |
| 16 | Flujo Zero Trust (11 pasos) | Cap. 5 §5.3 |
| 17 | C3 Clasificador NLP/IA | Cap. 5 + `c3-clasificador.png` |
| 18 | Catálogo de 22 controles | Cap. 5 §5.4 + Anexo G |
| 19 | PIA en siete bloques | Cap. 5 §5.5 + Anexo F |
| 20 | Conclusiones | Cap. 7 |
| 21 | Trabajo a futuro (TT2) | Cap. 7 + Anexo J |
| 22 | Gracias por su atención | — |

Duración objetivo: **20 minutos** (≈ 55 s por slide en promedio).
Slides hero como el 16 (flujo Zero Trust) y los diagramas C1/C2/C3
sostienen más narración (1.5-2 min).

## Reglas de contenido (heredadas del reporte aprobado)

1. Sin mención de OEA como financiador.
2. Sin métricas porcentuales no respaldadas. Cobertura se expresa
   como *"cada subcategoría / artículo aplicable cuente con al menos
   un control asociado"*.
3. *Perímetro* siempre como **perímetro lógico** — no de red.
4. **5 roles** en PICIS, no 7 (Administrador, Coordinador,
   Supervisor, Analista, Responsable).
5. Nombres formales completos de los directores.
6. Objetivo general y 4 OPs citados verbatim del protocolo.
7. F<sub>β</sub> con β = 2 — la fórmula completa renderizada en HTML.
8. Los 11 pasos del flujo Zero Trust **coinciden exactamente** con
   `docs/arquitectura/img/c2-zt-autorizacion.png`.

## Diseño visual

- **Fondo papel cremoso** `#FAF8F3` (no blanco puro, no navy oscuro).
- **Tinta** navy `#0B2545` para títulos y `#1F2937` para cuerpo.
- **Acento único** ámbar `#C97B22` — usado escasamente.
- **Tipografía:** Fraunces (display serif), IBM Plex Sans (cuerpo),
  IBM Plex Mono (códigos, IDs, ref).
- **Animaciones:** fade + slide-up al entrar al slide. Subrayado
  ámbar que se dibuja sólo. Respeta `prefers-reduced-motion: reduce`.
- **Hover:** NO crítico — la presentación funciona idéntica con
  clicker. Los acentos animados se disparan al entrar al slide, no
  al pasar el mouse.

## Compatibilidad

- **Chrome 120+ / Edge 120+** — target principal.
- **Safari 17+** — funciona, pero el snap puede ir más áspero.
- **Firefox 121+** — funciona.

Probada en 1366×768, 1728×1117 (Mac 16″) y 1920×1080.

## Export a PDF (respaldo)

```bash
./scripts/export-pdf.sh
# genera dist/tt1-defensa.pdf
```

Requiere `npm i playwright pdf-lib` la primera vez. Si Playwright no
está instalado, el script lo agrega.

## Fuente única de verdad

Todo lo que esta presentación afirma puede rastrearse al **reporte
técnico** (`docs/reporte-tecnico/dist-latex/`) y a los **anexos**
(`evidencias/anexo-*.pdf`). Si algo en este deck no aparece en esos
documentos, es un error y debe corregirse.
