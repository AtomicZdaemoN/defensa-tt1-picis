# Guion · Carlos — Estructurador / Normativo

> **Rol:** Define conceptos, encuadra el marco legal mexicano, formaliza
> objetivos y metodología, presenta arquitectura general, catálogo de
> controles y cronograma de trabajo futuro.
>
> **Diapositivas asignadas:** 03, 04, 08, 09, 11, 15, 18, 22, 25, 26
>
> **Tiempo objetivo total:** ~7:00 min
>
> **Notas de estilo:**
> - Sin etiquetas de pronunciación fonética.
> - Notas entre corchetes para acciones no verbales (`[Señalar...]`,
>   `[Contacto visual...]`, `[Pausa breve]`, `[Énfasis]`).
> - Acrónimos detallados con su significado entre paréntesis la
>   primera vez que se usan.
> - Énfasis en el **proceso**: cómo se construyó cada producto, no
>   sólo qué resultado se obtuvo.

---

## Slide 03 — ¿Qué es un dato personal? · 45s

> *[Transición: Entras después de Miguel en el slide 02]*

Gracias, Miguel. Antes de hablar de cómo PICIS protege los datos,
definamos con precisión qué entendemos por dato personal.

> *[Ritmo pausado · contacto visual]*

Un dato personal es **cualquier información concerniente a una
persona física identificada o identificable**. La palabra clave es
*identificable* — quiere decir que su identidad puede determinarse
directa o indirectamente a través de cualquier información.

Esa definición no es nuestra. Viene del marco metodológico del INAI
(Instituto Nacional de Transparencia, Acceso a la Información y
Protección de Datos Personales), y es la que tomamos como referencia
para construir la taxonomía operativa de PICIS.

> *[Señalar la lista de categorías]*

Esa taxonomía maneja **55 tipos en 10 categorías**: identificadores,
electrónicos, laborales, tránsito, patrimonio, salud, académicos,
ideológicos, intimidad y rasgos físicos. Varias de estas categorías
contienen datos sensibles — los más peligrosos si se exponen.

---

## Slide 04 — Marco legal · IPN como sujeto obligado · 45s

> *[Ritmo continuo]*

Sobre el marco legal mexicano, son **datos sensibles** los referentes
a los aspectos más íntimos de la persona: origen étnico, salud,
creencias religiosas, preferencia sexual. Su mal uso puede provocar
discriminación o un riesgo grave para el titular.

México los protege con dos leyes:

La **LFPDPPP** (Ley Federal de Protección de Datos Personales en
Posesión de los Particulares) regula al sector privado.

Y la **LGPDPPSO** (Ley General de Protección de Datos Personales en
Posesión de Sujetos Obligados) regula a más de **340 sujetos
obligados** en México.

> *[Énfasis · contacto visual]*

El Instituto Politécnico Nacional está entre ellos.

Esto significa que el IPN tiene obligación legal de proteger los
datos personales que trata, y PICIS nació precisamente para ayudar a
cumplir esa obligación.

Miguel, sigues con la motivación operativa.

---

## Slide 08 — Objetivo general · 55s

> *[Transición: Entras después de Diego en el slide 07]*

Gracias, Diego. Formalicemos el objetivo del trabajo.

> *[Ritmo pausado · señalar el objetivo en pantalla]*

El objetivo aprobado por la dirección dice: *implementar un esquema
preventivo unificado para ofrecer privacidad, confidencialidad e
integridad de los datos sensibles de la versión en nube de PICIS,
mediante la integración de controles técnicos en las funciones de
Identificar y Proteger de acuerdo a los frameworks del NIST*.

> *[Pausa breve · señalar la nota de ajuste]*

Como verán, marcamos en pantalla un **ajuste propuesto para TT2**:
sustituir *implementar* por *diseñar*. La razón es que el alcance de
TT1 es estrictamente de diseño — entregamos el esquema completo, la
trazabilidad normativa y el análisis de impacto. La implementación
operativa, con pruebas medibles, corresponde a TT2. El verbo
*diseñar* refleja eso con más precisión.

> *[Contacto visual]*

Y también queremos mencionar abiertamente que **el «para qué» del
objetivo está pendiente de redactarse**. El proyecto sigue en
desarrollo y esa parte se cerrará en TT2, junto con el ajuste verbal.

---

## Slide 09 — Objetivos particulares · 40s

> *[Ritmo continuo]*

El objetivo general se descompone en **cuatro objetivos
particulares**. Tres cierran en TT1, uno se demuestra en TT2.

OP-1, caracterizar la **brecha** entre on-premise y nube, activo por
activo.

OP-2, **diseñar** un conjunto coherente de controles técnicos en las
funciones Identify y Protect del NIST, con al menos un control por
subcategoría aplicable.

OP-3, garantizar la **trazabilidad normativa** simultánea con
legislación mexicana y marcos NIST — al menos un control por
artículo aplicable.

> *[Señalar OP-4 destacado]*

Y OP-4, **validar operativamente** mediante matriz de pruebas con
criterio numérico y evidencia. Eso es TT2.

Miguel, sigues con el estado del arte.

---

## Slide 11 — Cuatro marcos del NIST · 45s

> *[Transición: Entras después de Miguel en el slide 10]*

Sobre los marcos teóricos, integramos cuatro publicaciones del NIST.
No usamos uno solo — cada uno aporta lo que le toca.

El **CSF 2.0** (Cybersecurity Framework) es el marco rector. De sus
seis funciones, nos concentramos en *Identify* y *Protect*. La
función *Govern* se ejerce a nivel institución, no a nivel de
nuestro esquema.

El **Privacy Framework 1.0** complementa con la perspectiva de los
derechos del titular. Es lo que nos permitió articular el análisis
de impacto a la privacidad con las funciones del CSF.

El **SP 800-53 Revisión 5** provee el catálogo institucional de
controles. De ese catálogo derivamos y personalizamos los 22
controles de nuestro esquema, ajustados a la realidad operativa de
PICIS.

> *[Énfasis]*

Y el **SP 800-207, Zero Trust Architecture**. Define el principio
fundamental que rige todo el diseño: cada solicitud se evalúa de
forma independiente. Sin privilegios por red ni por origen.

Miguel, sigues con la legislación mexicana.

---

## Slide 15 — Metodología · 45s

> *[Transición: Entras después de Diego en el slide 14]*

La metodología del trabajo se estructura en **cinco etapas**. Cuatro
cierran en TT1.

Etapa uno, **caracterización de la brecha**. Inventario de activos
on-premise contra controles objetivo en nube. Alimenta el OP-1.

Etapa dos, **análisis normativo**. Construcción del mapeo
bidireccional artículo ↔ control sobre LFPDPPP, su Reglamento y la
LGPDPPSO. Corresponde al OP-3.

Etapa tres, **diseño de controles**. Los 22 controles agrupados en
confidencialidad, integridad y privacidad. Corresponde al OP-2.

Etapa cuatro, **análisis de impacto a la privacidad** — el PIA del
clasificador en siete bloques.

> *[Énfasis · señalar etapa 5]*

Y etapa cinco, **despliegue y pruebas**, que es TT2. Aprovisionamiento
declarativo, matriz de pruebas con criterio numérico, evidencia de
ejecución.

> *[Contacto visual]*

Cada etapa produce un entregable que la siguiente consume. No son
fases independientes — son fases acopladas.

Miguel, sigues con la brecha en concreto.

---

## Slide 18 — Arquitectura C4 nivel 1 · 50s

> *[Transición: Entras después de Diego en el slide 17]*

Entramos al diseño de la arquitectura. Decidimos modelar el sistema
con la notación **C4** porque permite ir de lo general a lo
específico — del contexto al detalle de componentes — sin perder
trazabilidad. Lo que ven es el nivel uno: el diagrama de contexto.

> *[Señalar la columna izquierda]*

A la izquierda, los **cinco roles humanos** del sistema —
Administrador, Coordinador, Supervisor, Analista y Responsable.
Los dos primeros del grupo técnico del IPN; los tres restantes del
grupo operativo del cliente.

> *[Señalar el centro]*

Al centro, **PICIS sobre GCP bajo Zero Trust**. Sus componentes:
*scraping* autorizado, separador de metadatos, segmentador,
filtrado, el **clasificador NLP/IA**, y el reportador. Más los tres
componentes del patrón Zero Trust del NIST: Policy Engine, Policy
Administrator y Policy Enforcement Point.

> *[Señalar la derecha]*

A la derecha, los servicios gestionados de GCP que sostienen al
sistema — Cloud Identity para identidades federadas, Sensitive Data
Protection como insumo de preclasificación — y el sistema externo:
los **portales institucionales** sobre los que PICIS hace *scraping*
autorizado.

Diego, sigues con el nivel dos.

---

## Slide 22 — Catálogo de 22 controles · 45s

> *[Transición: Entras después de Diego en el slide 21]*

El entregable central del OP-2 es el **catálogo de 22 controles**
agrupado en tres familias.

**Confidencialidad** — ocho controles, del C-001 al C-008. Cifrado en
reposo con CMEK (Customer-Managed Encryption Keys), cifrado en
tránsito con TLS 1.3, autenticación multifactor, acceso contextual,
perímetros lógicos con VPC Service Controls.

**Integridad** — siete controles, del I-001 al I-007. Inventario
automático de activos, firmas SHA-256, logs inmutables, firma
criptográfica de imágenes de contenedor.

**Privacidad** — siete controles, del P-001 al P-007. Clasificación
con SDP, minimización por finalidad, enmascaramiento dinámico,
consentimiento y PIA.

> *[Contacto visual · énfasis]*

Tres cosas a destacar del catálogo: cada control tiene un **criterio
de aceptación medible** — no es declaración de intención. Cada
control está **mapeado** a una subcategoría NIST y a un artículo
mexicano. Y la distribución 8-7-7 no es casual: refleja el balance
entre las tres dimensiones del esquema.

Miguel, sigues con el PIA.

---

## Slide 25 — Cronograma de actividades — TT2 · 50s

> *[Transición: Entras después de Diego en el slide 24]*

Para cerrar, **el cronograma de trabajo de TT2**. Lo organizamos en
tres bloques de actividades.

Primero, **aprovisionamiento declarativo** del proyecto productivo
en GCP. Esto significa que todo el entorno — proyecto, redes,
identidades, perímetros, almacenamiento — se levanta con código
reproducible. Es la base sobre la cual se ejecutarán las pruebas.

Segundo, **ejecución de la matriz de pruebas**. Un caso por cada
uno de los 22 controles, con criterio numérico de aceptación y
evidencia material de ejecución. Esto cierra el OP-4.

Tercero, **auditoría inversa**: verificar que cada artículo legal
aplicable es satisfecho por al menos un control con evidencia
material. Es la validación final de la trazabilidad bidireccional
que construimos en TT1.

> *[Ritmo pausado · contacto visual]*

En resumen: TT1 diseña; TT2 demuestra.

Miguel, cierras tú.

---

## Slide 26 — Gracias · Cierre conjunto

> *[Junto con Miguel y Diego · centro del escenario]*

Muchas gracias por su atención.

---

## Notas finales para Carlos

1. **Tu valor es la estructura.** "Cinco roles", "cuatro marcos",
   "cinco etapas", "tres familias" — esas anclas numéricas le dan
   al público una geografía mental clara. No las sacrifiques.
2. **Slide 08 (objetivo) — el ajuste *implementar → diseñar* y el
   «para qué» pendiente.** Ese es tu momento de honestidad académica.
   No lo escondas, no lo apresures. Es lo que el director quiere
   ver: autoconciencia del estado real del proyecto.
3. **Slide 25 (cronograma) — los tres bloques son tu cierre.**
   Termina con "TT1 diseña, TT2 demuestra". Es la frase que el
   sinodal se va a llevar.
4. **Si te preguntan por la metodología del estado del arte,**
   recuerda: matriz bibliográfica (Producto 6) + matriz analítica
   de contenido (Producto 7). Cuatro dimensiones por trabajo:
   herramientas, métricas, marco conceptual, brecha.
