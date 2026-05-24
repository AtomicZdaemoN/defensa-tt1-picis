#!/usr/bin/env node
/**
 * export-pdf.mjs — captura cada slide del deck en 1920×1080 y los combina
 * en un solo PDF. Sirve para regenerar tt1-defensa.pdf cuando cambia el
 * HTML, ya sea localmente o desde GitHub Actions.
 *
 * Uso:
 *   node scripts/export-pdf.mjs [output.pdf]
 *
 * Si no se pasa argumento, escribe a ./tt1-defensa.pdf.
 *
 * Requisitos (los maneja npm install):
 *   - playwright (necesita chromium descargado: npx playwright install chromium)
 *   - pdf-lib
 */

import { chromium } from "playwright";
import { promises as fs } from "fs";
import { PDFDocument } from "pdf-lib";
import { createServer } from "http";
import { readFile } from "fs/promises";
import { extname, join, resolve } from "path";

const ROOT = process.cwd();
const OUT = resolve(ROOT, process.argv[2] || "tt1-defensa.pdf");
const PORT = 8742;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// 1 · servidor estático efímero
const server = createServer(async (req, res) => {
  try {
    const path = req.url === "/" ? "/index.html" : decodeURIComponent(req.url);
    const filePath = join(ROOT, path);
    const content = await readFile(filePath);
    res.setHeader("Content-Type", MIME[extname(path)] || "application/octet-stream");
    res.end(content);
  } catch (e) {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(PORT);

try {
  // 2 · contar slides desde el HTML
  const html = await readFile(join(ROOT, "index.html"), "utf8");
  const slideCount = (html.match(/data-slide="\d+"/g) || []).length;
  if (slideCount === 0) {
    throw new Error("No se detectaron slides (busca data-slide=\"NN\" en index.html)");
  }
  console.log(`Detectadas ${slideCount} slides — render a ${OUT}`);

  // 3 · capturar cada slide
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();
  await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  const buffers = [];
  for (let i = 0; i < slideCount; i++) {
    if (i > 0) {
      await page.evaluate((idx) => {
        const slides = document.querySelectorAll(".slide");
        slides[idx]?.scrollIntoView({ behavior: "auto", block: "start" });
      }, i);
    }
    await page.waitForTimeout(900);
    const buf = await page.pdf({
      width: "1920px",
      height: "1080px",
      printBackground: true,
      pageRanges: "1",
    });
    buffers.push(buf);
    console.error(`  slide ${i + 1} / ${slideCount}`);
  }
  await browser.close();

  // 4 · merge en un solo PDF
  const merged = await PDFDocument.create();
  for (const buf of buffers) {
    const src = await PDFDocument.load(buf);
    const pages = await merged.copyPages(src, src.getPageIndices());
    pages.forEach((p) => merged.addPage(p));
  }
  await fs.writeFile(OUT, await merged.save());
  console.log(`PDF escrito: ${OUT}`);
} finally {
  server.close();
}
