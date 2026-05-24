# Pipeline · cómo activar el rebuild automático del PDF

Este archivo describe cómo activar el workflow de GitHub Actions que
regenera `tt1-defensa.pdf` cada vez que se hace push a `main` con
cambios en `index.html` o `assets/`.

## Por qué este archivo está aquí

El `gh` CLI que usé localmente no tenía el scope `workflow`, por lo
que GitHub rechazó subir directamente `.github/workflows/build-pdf.yml`.
La solución es copiar el archivo `build-pdf.workflow.yml` que está
junto a este README a la ruta correcta — desde la UI web de GitHub
basta con un click.

## Activar en 3 pasos (≈ 30 s)

1. Abre este link en GitHub:
   <https://github.com/AtomicZdaemoN/defensa-tt1-picis/new/main?filename=.github/workflows/build-pdf.yml>
2. Copia el contenido de `pipeline/build-pdf.workflow.yml` (en este
   mismo repo) y pégalo en el editor.
3. Botón verde **Commit changes** → Commit directly to `main`.

Listo. A partir del siguiente push a `main` que toque `index.html`,
`assets/**`, `scripts/export-pdf.mjs`, `package.json` o el propio
workflow, GitHub Actions regenera el PDF y comitea automáticamente
`tt1-defensa.pdf` con `[skip ci]` para no entrar en loop.

También se puede correr manualmente desde la pestaña *Actions* del
repo → workflow *Build PDF* → *Run workflow*.

## Después de activarlo

Este directorio `pipeline/` ya no hace nada. Se puede borrar:

```bash
git rm -r pipeline/
git commit -m "chore: limpiar pipeline/ una vez activado el workflow"
git push
```
