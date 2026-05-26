# Guion · Miguel — Narrador / Conector

> **Rol:** abre la presentación, conecta lo humano con lo técnico, aterriza
> la legislación y narra los momentos clave.
>
> **Slides:** 1, 2, 5, 10, 12, 16, 20, 23, 26
>
> **Tiempo objetivo:** ~6:30 min (≈9 slides · 40-50s c/u)
>
> **Filosofía:** la exposición es teaser. La defensa real está en la Q&A.
> Decir lo necesario, no más. Si los sinodales quieren más detalle, lo
> piden.

---

## Slide 01 — Portada · 30s

Buenos días. Mi nombre es **Miguel Arturo Romero Carreón**, y junto con
**Diego Alejandro Leyva García** y **Carlos Uriel Francisco López**
presentamos la defensa del Trabajo Terminal **2026-B182**.

> *[pausa]*

Nuestro trabajo se titula *Esquema preventivo de privacidad para PICIS en
la versión de nube basado en la arquitectura Zero Trust*. Lo dirigen el
**Dr. Eleazar Aguirre Anaya** y la **Dra. Nidia Asunción Cortez Duarte**.

> *[pausa breve · contacto visual]*

Cedo la palabra a **Carlos**, que va a abrir con el contexto del problema.

---

## Slide 02 — Datos sensibles publicados por error · 50s

> *[Después de que Carlos termine las slides 03 y 04 — definición y marco legal]*

Gracias, Carlos. Con ese marco claro, déjenme aterrizar el problema real.

Las instituciones públicas y privadas publican miles de documentos en sus
portales todos los días. Una proporción no menor contiene, **sin
advertirlo**, información sensible: nombres con CURP, expedientes
médicos, números de cuenta.

> *[bajar voz]* Esto no es hipotético. Pasa constantemente.

Revisar todo eso a mano es inviable. Por eso existe **PICIS** — la
Plataforma de Identificación, Clasificación y Monitoreo de Información
Sensible. Desarrollada en el Laboratorio de Ciberseguridad del CIC-IPN.
Automatiza esa detección con web scraping autorizado y un clasificador
NLP/IA con taxonomía de 55 tipos en 10 categorías.

**Carlos**, te paso la palabra para definir formalmente qué es un dato
personal.

---

## Slide 05 — Por qué nació PICIS · 45s

> *[Después de slides 03 y 04 de Carlos]*

Bien. Ya con la teoría clara, ¿por qué nace PICIS?

Porque revisar a mano si una institución publicó por error datos
sensibles en sus portales es **titánico** — miles de PDFs, hojas de
cálculo, imágenes con texto. No escala.

PICIS automatiza esa identificación con cuatro piezas: scraping
periódico sobre dominios autorizados, NLP, IA para clasificación, y
ciencia de datos para el análisis del corpus. Y algo crítico: **la
clasificación no es completamente automática**. El rol del Analista
valida cada hallazgo antes de registrarlo como incidente confirmado.

> *[transición a Diego]*

**Diego**, te paso la palabra para contar qué pasa cuando movemos PICIS
a la nube.

---

## Slide 10 — Estado del arte · 50s

> *[Después de slides 06-09 de Diego y Carlos]*

Antes de diseñar el esquema, revisamos qué existe. Analizamos
**23 trabajos** agrupados en seis ejes: Zero Trust en GCP, NLP de PII,
PIA con IA, conformidad mexicana, CMEK multi-tenant, y federación sin
claves estáticas.

> *[contacto visual · ritmo pausado]*

Lo que encontramos es contundente: **ninguno cubre los seis ejes a la
vez**. NIST 800-207 cubre Zero Trust pero no NLP. Presidio cubre NLP
pero no ley mexicana. Workload Identity Federation resuelve claves pero
no clasifica. Y así con los demás.

> *[señalar última fila]*

La última fila de la tabla es nuestro trabajo. Único que marca los seis
ejes. Esto no es coincidencia: identificamos esta brecha de integración
en la literatura y la convertimos en nuestro punto de partida.

**Carlos**, te paso la palabra para los marcos teóricos del NIST.

---

## Slide 12 — Legislación mexicana · 55s

> *[Después de slide 11 — NIST de Carlos]*

Gracias, Carlos. Ahora la otra mitad del marco: la ley mexicana.

México tiene dos leyes principales. La **LFPDPPP** regula al sector
privado. Y la **LGPDPPSO** al sector público — incluyendo al IPN. Más
el Reglamento de la LFPDPPP, que define cómo aplica todo al cómputo en
la nube.

> *[intensificar · contacto visual]*

Pero hay un artículo que quiero que tengan presente toda la
presentación: el **artículo 22 de la LGPDPPSO**. Dice que las
**decisiones automatizadas** que afecten al titular tienen que ser
**explicables** y contar con **validación humana significativa**.

Esto es decisivo porque PICIS usa un clasificador de IA. Cada vez que
dice "este documento tiene datos sensibles", esa decisión tiene que
explicarse y un humano debe validarla. Lo vamos a ver realizado en el
diseño.

**Diego**, sigues con la métrica del clasificador.

---

## Slide 16 — Brecha activo a activo · 50s

> *[Después de slides 13-15 de Diego y Carlos]*

Recuerden nuestro OP-1: caracterizar la brecha entre el on-premise y la
nube. Esa brecha está aquí, **activo por activo**.

Tres ejemplos que importan:

**Identidad de microservicios:** antes claves estáticas en archivos.
Ahora Workload Identity Federation con tokens de máximo una hora.

**Acceso al backend:** antes firewall de red. Ahora Identity-Aware
Proxy más Access Context Manager — cada solicitud se verifica sola.

**Decisiones del clasificador:** antes, sin registro de explicabilidad.
Ahora, trazabilidad completa más validación del Analista, justo como
exige el artículo 22.

La matriz completa está en el Anexo I del reporte técnico.

**Diego**, te paso la palabra para los requisitos derivados.

---

## Slide 20 — Flujo Zero Trust · 60s

> *[Después de slide 19 — arquitectura de Diego]*

> *[contacto visual · ritmo pausado]*

Este es el momento clave. Es donde todo lo anterior se vuelve concreto.

Una sola petición del usuario recorre **11 pasos** en cuatro planos:
ingreso, aplicación, datos y auditoría. **En ningún momento hay
confianza implícita.** Cada paso verifica de nuevo.

Plano ingreso, pasos 01-05: el Load Balancer termina TLS, Identity-Aware
Proxy resuelve identidad, Cloud Identity verifica MFA, Access Context
Manager evalúa red y dispositivo, IAM Conditions verifica el rol.

Plano aplicación, paso 06: el JWT firmado llega al backend en GKE
privado.

Plano datos, pasos 07-10: Workload Identity intercambia tokens
cortos, VPC Service Controls valida perímetro, BigQuery enmascara por
rol, KMS desencripta con CMEK.

> *[bajar voz]*

Y paso 11: **Cloud Audit Logs**. Todo lo anterior queda registrado en
un Bucket WORM. Nadie lo borra. Nadie lo modifica.

Y si en cualquier punto la MFA es inválida o el contexto está fuera de
política: HTTP 403, **deny by default**. La petición nunca llega al
backend.

**Diego**, sigues con el detalle del clasificador.

---

## Slide 23 — PIA del clasificador · 50s

> *[Después de slide 22 — catálogo de Carlos]*

Vamos a uno de los entregables más importantes de TT1: el **Análisis
de Impacto a la Privacidad** del clasificador.

¿Por qué un PIA? Porque el clasificador trata datos personales de
forma automatizada. Y, como ya mencioné, el artículo 22 exige
explicabilidad y validación humana.

El PIA tiene siete bloques: descripción del tratamiento, categorías
N1-N4, actores y encargados, finalidad, riesgos R1-R7, controles
mitigantes, y la **decisión residual**.

> *[intensificar]*

La decisión residual está documentada: **riesgo medio, mitigar antes
de producción**. Esa mitigación es exactamente lo que se va a
demostrar en TT2.

**Diego**, cierras con las conclusiones técnicas.

---

## Slide 26 — Gracias · 20s

> *[Cierre conjunto · los tres expositores presentes]*

Muchas gracias por su atención y por su tiempo.

> *[pausa · contacto visual con cada sinodal]*

Quedamos a su disposición para las preguntas.

---

## Notas de coaching para Miguel

1. **Eres la narrativa.** Los demás dan datos; tú das significado. Cuando
   conectas dos slides, el público debe sentir continuidad — no una
   lista de temas.
2. **Las pausas son tu herramienta más fuerte.** Después de "ninguno
   cubre los seis ejes" o de "deny by default": silencio. Deja que
   aterrice.
3. **El slide 20 es tu solo.** No lo apures. Es el momento más
   dramático del deck.
4. **Si un sinodal interrumpe**, responde con calma y retoma con
   "decía que...". No te desestabilices.
