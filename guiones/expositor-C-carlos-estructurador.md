# Guion · Carlos — Estructurador / Normativo

> **Rol:** define conceptos, objetivos, marcos, metodología, catálogo y
> continuidad. Habla con orden y claridad.
>
> **Slides:** 3, 4, 8, 9, 11, 15, 18, 22, 25, 26
>
> **Tiempo objetivo:** ~7:00 min (≈10 slides · 40-45s c/u)
>
> **Filosofía:** la estructura es tu poder. Cada vez que hablas, el
> público debe sentir orden: "tres familias", "cuatro marcos", "cinco
> etapas". Esas anclas hacen que te sigan sin esfuerzo.

---

## Slide 03 — ¿Qué es un dato personal? · 45s

> *[Después del slide 02 de Miguel]*

Gracias, Miguel. Antes de hablar del problema, definamos con precisión
de qué estamos tratando.

> *[ritmo pausado]*

Un **dato personal** es cualquier información concerniente a una
persona física identificada o **identificable**. Identificable cuando
su identidad puede determinarse, directa o indirectamente, a través
de cualquier información.

Esa definición viene del marco metodológico del INAI. Parece amplia, y
lo es a propósito: un nombre es un dato personal, pero también una
dirección IP si permite identificar a alguien.

> *[señalar taxonomía]*

PICIS maneja **55 tipos** organizados en **10 categorías**:
identificadores como RFC y CURP; electrónicos como email y contraseña;
laborales, salud, patrimonio, ideológicos, intimidad, rasgos físicos.
Varias de esas categorías contienen datos sensibles — los más
peligrosos si se publican.

---

## Slide 04 — Marco legal · IPN como sujeto obligado · 45s

> *[Continuación]*

Ahora qué dice la ley.

Los **datos personales sensibles** son los más íntimos: origen étnico,
salud, creencias religiosas, preferencia sexual. Su mal uso puede
provocar discriminación o un grave riesgo.

México los protege con dos leyes:

La **LFPDPPP** regula al sector privado.

La **LGPDPPSO** regula a los sujetos obligados — más de 340 en
México.

> *[intensificar · contacto visual]*

**El Instituto Politécnico Nacional está entre ellos.**

Esto no es un dato menor. Significa que el IPN tiene obligación legal
de proteger los datos personales que trata, y PICIS nació para ayudar
a cumplir esa obligación.

**Miguel**, te paso la palabra para contar de dónde viene PICIS.

---

## Slide 08 — Objetivo general · 45s

> *[Después de slide 07 de Diego]*

Bien. Ya conocemos el contexto y la problemática. Ahora formalicemos
qué nos propusimos.

> *[ritmo pausado · contacto visual]*

Lo voy a citar **textualmente** del protocolo aprobado:

> *[intensificar · ritmo pausado]*

"Implementar un esquema **preventivo unificado** para ofrecer
privacidad, confidencialidad e integridad de los datos sensibles de la
versión en nube de PICIS, mediante la integración de controles
técnicos en las funciones de *Identificar* y *Proteger* de acuerdo a
los frameworks del NIST."

> *[pausa]*

Cada palabra fue elegida con cuidado. **Preventivo:** controles que
eviten el problema antes de que ocurra. **Unificado:** las piezas
forman un sistema, no controles aislados. **Identificar y Proteger:**
las dos funciones del NIST CSF 2.0 donde nos concentramos.

---

## Slide 09 — Objetivos particulares · 40s

> *[Continuación]*

Del objetivo general derivan **cuatro objetivos particulares**. Tres
cierran en TT1, uno se demuestra en TT2.

**OP-1:** caracterizar la brecha activo a activo entre on-premise y
nube.

**OP-2:** establecer un conjunto coherente de controles técnicos en
*Identificar* y *Proteger*, con al menos un control por subcategoría
aplicable.

**OP-3:** garantizar conformidad simultánea con legislación mexicana y
marcos NIST, con al menos un control por artículo aplicable.

> *[señalar OP-4]*

**OP-4** queda para TT2: validar operativamente con matriz de pruebas,
criterio numérico y evidencia.

**Miguel**, sigues con el estado del arte.

---

## Slide 11 — Cuatro marcos del NIST · 45s

> *[Después de slide 10 de Miguel]*

El esquema se apoya en **cuatro marcos** del NIST. No usamos uno solo
— integramos los cuatro para que cada uno aporte lo que le toca.

**CSF 2.0** es el marco rector. De sus seis funciones nos concentramos
en *Identificar* y *Proteger*.

**Privacy Framework 1.0** complementa con los derechos del titular.
Articula el PIA con las funciones del CSF.

**SP 800-53 Rev. 5** provee el catálogo institucional del cual
derivamos nuestros 22 controles, ajustados a la realidad de PICIS.

> *[intensificar]*

**SP 800-207, Zero Trust Architecture.** Define el principio
fundamental: cada solicitud se evalúa de forma independiente. Sin
privilegios por red ni por origen. Es la base del flujo que verán
después.

**Miguel**, sigues con la legislación mexicana.

---

## Slide 15 — Metodología · 45s

> *[Después de slides 13-14 de Diego]*

Cinco etapas. Cuatro cierran en TT1.

**Uno: caracterización de la brecha** — activo por activo, on-premise
vs nube. Alimenta el OP-1.

**Dos: análisis normativo** — mapeo bidireccional artículo ↔ control
con LFPDPPP, Reglamento y LGPDPPSO. Esto es el OP-3.

**Tres: diseño de controles** — 22 controles agrupados en
confidencialidad, integridad y privacidad, sobre GCP. Es el OP-2.

**Cuatro: análisis de impacto** — el PIA del clasificador en siete
bloques.

**Cinco: despliegue y pruebas** — TT2. Aprovisionamiento declarativo,
matriz de pruebas, evidencia operativa. Cierra el OP-4.

> *[contacto visual]*

Las etapas no son independientes. Cada una produce un entregable que
la siguiente consume.

**Miguel**, te paso la palabra para mostrar la brecha en concreto.

---

## Slide 18 — Arquitectura C4 nivel 1 · 50s

> *[Después de slide 17 de Diego]*

Entramos al diseño. Diagrama de contexto.

> *[señalar diagrama]*

A la izquierda, **cinco roles humanos**: Administrador, Coordinador,
Supervisor, Analista, Responsable. Los dos primeros son del grupo
técnico del IPN. Los tres últimos del grupo operativo del cliente.

Al centro, **PICIS sobre GCP bajo Zero Trust**. Sus componentes
principales: scraping, separador de metadatos, segmentador, filtrado,
**clasificador NLP/IA del CIC-IPN**, y reportador. Más los tres
componentes del patrón Zero Trust del NIST: Policy Engine, Policy
Administrator y Policy Enforcement Point.

A la derecha, los **servicios gestionados de GCP** que sostienen a
PICIS — Cloud Identity para identidades federadas, Sensitive Data
Protection como insumo de preclasificación — y el sistema externo:
los **portales institucionales** sobre los que PICIS hace scraping
autorizado.

**Diego**, sigues con el nivel 2.

---

## Slide 22 — Catálogo de 22 controles · 45s

> *[Después de slide 21 de Diego]*

El entregable central del OP-2: **22 controles en tres familias**.

**Confidencialidad:** ocho controles, del C-001 al C-008. Cifrado en
reposo con CMEK, en tránsito TLS 1.3, MFA, acceso contextual con IAP,
VPC Service Controls.

**Integridad:** siete controles, del I-001 al I-007. Inventario
automático, firmas SHA-256, logs WORM, firma de imágenes para GKE.

**Privacidad:** siete controles, del P-001 al P-007. Clasificación
SDP, minimización por finalidad, enmascaramiento BigQuery,
consentimiento y PIA.

> *[contacto visual]*

Tres cosas a notar: **cada control tiene criterio medible**, no es
declaración de intención. **Cada control está mapeado** a una
subcategoría NIST y a un artículo mexicano. Y la distribución no es
casual: 8-7-7 refleja que los tres pilares son igualmente necesarios.

**Miguel**, sigues con el PIA.

---

## Slide 25 — Trabajo a futuro · 40s

> *[Después de slide 24 de Diego]*

Para cerrar, lo que sigue en TT2.

TT1 entregó el **diseño completo**: brecha, controles, mapeo
normativo, PIA. TT2 lo lleva a la realidad.

Tres entregables:

**Aprovisionamiento declarativo** del proyecto productivo en GCP — todo
el entorno se levanta con scripts reproducibles.

**Matriz de pruebas** — un caso por cada uno de los 22 controles, con
criterio numérico de aceptación y evidencia de ejecución. Esto cierra
el OP-4.

**Auditoría inversa** — verificar que cada artículo legal aplicable
es satisfecho por al menos un control con evidencia material.

> *[ritmo pausado · contacto visual]*

En resumen: **TT1 diseña. TT2 demuestra.**

**Miguel**, cierras tú.

---

## Slide 26 — Gracias · cierre conjunto

> *[Junto a Miguel y Diego]*

Muchas gracias por su atención.

---

## Notas de coaching para Carlos

1. **Tu fuerza es la estructura.** "Tres familias", "cuatro marcos",
   "cinco etapas" — esas anclas son tu poder. No las sacrifiques por
   sonar casual.
2. **La cita textual del slide 08 es tu momento de autoridad.** Antes
   de decirla, anuncia que es textual. Después, desmenuza cada
   palabra. Demuestra que no la memorizaste — la entiendes.
3. **En el slide 22, no recites los 22 controles.** Menciona los más
   representativos por familia y refuerza los tres puntos:
   criterio medible, trazabilidad bidireccional y balance 8-7-7.
4. **Las transiciones llaman por nombre.** "Miguel, sigues con..." no
   "le paso la palabra a mi compañero". El nombre da conexión humana.
5. **Si un sinodal te pregunta algo normativo**, responde con
   referencia precisa: artículo X mapeado al control Y, documentado
   en Anexo E. Esa precisión inmediata comunica dominio.
