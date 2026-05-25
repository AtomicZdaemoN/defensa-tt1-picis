# Defensa TT1 · PICIS · 2026-B182

Presentación HTML para la defensa del Trabajo Terminal **2026-B182**
*Esquema preventivo de privacidad para PICIS en la versión de nube
basado en la arquitectura Zero Trust* — defensa el **27 de mayo de
2026**.

Archivo único `index.html`, sin dependencias de build. Sólo
contenido del **reporte técnico** y los **anexos** del TT.

> **Rama `feat/presentacion-formal`** — variante académica con portada
> ESCOM/IPN canónica, sin títulos de sección en pantalla y con
> centrado vertical rebalanceado. Se despliega automáticamente en
> `/formal/` de GitHub Pages mediante
> `.github/workflows/build-pdf-formal.yml`.

## URLs públicos

### Variante formal (esta rama)

- **Deck formal:** https://atomiczdaemon.github.io/defensa-tt1-picis/formal/
- **PDF formal:** https://atomiczdaemon.github.io/defensa-tt1-picis/formal/tt1-defensa-formal.pdf

### Versión original (rama `main`)

- **Deck original:** https://atomiczdaemon.github.io/defensa-tt1-picis/
- **PDF original:** https://atomiczdaemon.github.io/defensa-tt1-picis/tt1-defensa.pdf

## Servir local

```bash
python3 -m http.server 8731
# abrir http://localhost:8731 en Chrome
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

Soporta clicker estándar (los botones de avanzar/retroceder mapean
a `PgDn` / `PgUp`). También funcionan los swipes en pantallas
táctiles.

## Regenerar el PDF

### Automático — GitHub Actions

Cada push a `feat/presentacion-formal` que modifique `index.html`,
`assets/` o `scripts/export-pdf.mjs` activa
[`Build PDF + Deploy Formal Variant`](.github/workflows/build-pdf-formal.yml),
que:

1. Genera `tt1-defensa-formal.pdf` con Playwright (1920×1080)
2. Hace commit del PDF de vuelta a esta rama (`[skip ci]`)
3. Copia `index.html`, `assets/` y el PDF a `main/formal/`
4. Hace commit a `main` (`[skip ci]`) → Pages re-despliega

> **Nota sobre el path filter:** el workflow filtra por paths para
> evitar loops. Si el único cambio es un merge sin modificar los paths
> vigilados (`index.html`, `assets/**`, etc.), el workflow no se
> disparará. En ese caso, basta hacer un pequeño cambio en `index.html`
> (aunque sea un espacio) para forzar el trigger.

También se puede correr a mano:

```bash
gh workflow run build-pdf-formal.yml --repo AtomicZdaemoN/defensa-tt1-picis
```

### Local

```bash
npm install
npx playwright install chromium   # la primera vez
node scripts/export-pdf.mjs tt1-defensa-formal.pdf
```

El PDF queda en `tt1-defensa-formal.pdf` en la raíz.

## Estructura del repositorio

```
defensa-tt1-picis/
├── index.html                    # variante formal (esta rama)
├── tt1-defensa-formal.pdf        # PDF formal — generado por Actions
├── assets/
│   └── img/                      # 4 diagramas C4 (PNG) + logos IPN/ESCOM
├── scripts/
│   └── export-pdf.mjs            # generador del PDF
├── .github/
│   └── workflows/
│       ├── build-pdf.yml         # pipeline para rama main (original)
│       └── build-pdf-formal.yml  # pipeline para esta rama (formal)
├── package.json                  # dependencias del exportador
└── README.md
```

## Reglas de contenido (heredadas del reporte técnico)

1. Sin mención de OEA como financiador.
2. Sin métricas porcentuales no respaldadas — la cobertura se
   expresa como *"cada subcategoría / artículo aplicable cuente con
   al menos un control asociado"*.
3. *Perímetro* siempre como **perímetro lógico** — no de red.
4. **5 roles** en PICIS, no 7 (Administrador, Coordinador,
   Supervisor, Analista, Responsable).
5. Nombres formales completos de los directores.
6. Objetivo general y 4 OPs citados verbatim del protocolo.
7. F<sub>β</sub> con β = 2 — la fórmula completa renderizada en HTML.
8. Los 11 pasos del flujo Zero Trust coinciden exactamente con
   `assets/img/c2-zt-autorizacion.png`.

## Estructura narrativa — 26 diapositivas

| # | Sección | Slide |
|---|---|---|
| 01 | Portada | — |
| 02 | Introducción divulgativa | Datos sensibles publicados por error |
| 03 | Contexto · 01 | ¿Qué entendemos por dato personal? |
| 04 | Contexto · 02 | Marco legal mexicano + IPN sujeto obligado |
| 05 | Contexto · 03 | Origen de PICIS · v1 on-premise |
| 06 | Contexto · 04 | De PICIS v1 a v2 · seguridad desde el diseño |
| 07 | Problemática | Migrar a la nube disuelve tres garantías |
| 08 | Objetivo general | Cita verbatim del protocolo |
| 09 | Objetivos particulares | OP-1 a OP-4 verbatim |
| 10 | Estado del arte | 23 trabajos en 6 ejes — tabla resumen |
| 11 | Marco teórico · NIST | 4 marcos (CSF, Privacy, 800-53, ZT) |
| 12 | Marco teórico · Legislación MX | LFPDPPP · Reglamento · LGPDPPSO |
| 13 | Marco teórico · F<sub>β=2</sub> | Métrica del clasificador (TT2) |
| 14 | Herramientas tecnológicas | Tabla comparativa AWS / Azure / GCP |
| 15 | Metodología | 5 etapas — 4 cierran TT1 |
| 16 | Análisis · brecha | Tabla activo / control existente / control objetivo |
| 17 | Requisitos | 12 RF + 10 RNF |
| 18 | Diseño · C1 | Contexto |
| 19 | Diseño · C2 | Contenedores |
| 20 | Diseño · Zero Trust | Flujo de autorización en 11 pasos |
| 21 | Diseño · C3 | Clasificador NLP/IA |
| 22 | Catálogo de 22 controles | 8 C + 7 I + 7 P |
| 23 | PIA en siete bloques | Análisis de impacto a la privacidad |
| 24 | Conclusiones | OP-1, OP-2, OP-3 cerrados |
| 25 | Trabajo a futuro | TT2 — validación operativa (OP-4) |
| 26 | Gracias por su atención | — |
