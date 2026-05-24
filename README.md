# Defensa TT1 · PICIS · 2026-B182

Presentación HTML para la defensa del Trabajo Terminal **2026-B182**
*Esquema preventivo de privacidad para PICIS en la versión de nube
basado en la arquitectura Zero Trust* — defensa el **26 de mayo de
2026**.

Archivo único `index.html`, sin dependencias de build. Sólo
contenido del **reporte técnico** y los **anexos** del TT.

## URLs públicos

- **Deck (recomendado para los sinodales):** https://atomiczdaemon.github.io/defensa-tt1-picis/
- **PDF estático:** https://atomiczdaemon.github.io/defensa-tt1-picis/tt1-defensa.pdf

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

Cada vez que se hace push a `main` con cambios en `index.html`, `assets/`
o `scripts/export-pdf.mjs`, el workflow [`Build PDF`](.github/workflows/build-pdf.yml)
captura las 26 slides en 1920×1080 y comitea el `tt1-defensa.pdf`
actualizado de vuelta al repo. El commit lleva `[skip ci]` para no
disparar el workflow en loop.

También se puede correr a mano:

```bash
gh workflow run build-pdf.yml --repo AtomicZdaemoN/defensa-tt1-picis
```

### Local

```bash
npm install
npx playwright install chromium   # la primera vez
npm run pdf
```

El PDF queda en `tt1-defensa.pdf` en la raíz. El script levanta un
servidor estático efímero en el puerto 8742, recorre cada slide y
hace `merge` de los 26 PDFs de una página con `pdf-lib`.

## Estructura del repositorio

```
defensa-tt1-picis/
├── index.html              # deck completo, autocontenido (CSS + JS inline)
├── tt1-defensa.pdf         # PDF estático regenerado por GitHub Actions
├── assets/
│   └── img/                # 4 diagramas C4 (PNG) + logos IPN/ESCOM
├── scripts/
│   └── export-pdf.mjs      # generador del PDF
├── .github/
│   └── workflows/
│       └── build-pdf.yml   # pipeline automático
├── package.json            # dependencias del exportador
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
