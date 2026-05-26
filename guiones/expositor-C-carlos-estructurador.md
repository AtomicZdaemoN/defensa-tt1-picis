# Guion · Carlos — Estructurador / Normativo

> **Rol:** Define conceptos, encuadra el marco legal, formaliza los objetivos de la investigación y la metodología, y presenta el catálogo de controles y el cronograma para la fase práctica (TT2).
>
> **Diapositivas asignadas:** 03, 04, 08, 09, 11, 15, 18, 22, 25, 26
>
> **Tiempo objetivo total:** ~6:30 min
>
> **Notas de estilo:**
> - Sin guías de pronunciación fonética.
> - Notas entre corchetes para acciones no verbales (`[Señalar...]`, `[Contacto visual...]`).
> - Se eliminaron las transiciones habladas de relevo ("a continuación", "le paso la palabra").
> - Foco en el **proceso de investigación**: explicar por qué se estructuraron así los objetivos, marcos, la metodología y el catálogo.

---

## Slide 03 — ¿Qué es un dato personal? · 45s

> *[Transición: Entras después de Miguel en el slide 02]*

Antes de detallar cómo PICIS protege la información, es indispensable definir con precisión el objeto de estudio de esta investigación: el dato personal.

> *[Contacto visual]*

Adoptamos la definición del marco metodológico del INAI, que lo identifica como cualquier información concerniente a una persona física que la haga identificable, directa o indirectamente. 

El proceso de clasificación de PICIS utiliza una taxonomía de **55 tipos de datos organizados en 10 categorías** (identificadores, datos de salud, patrimoniales, ideológicos, entre otros). Nuestra investigación se enfoca con especial prioridad en los datos sensibles, aquellos que, de ser expuestos, atentan contra la esfera más íntima del titular o pueden dar origen a discriminación.

---

## Slide 04 — Marco legal · IPN como sujeto obligado · 45s

> *[Ritmo continuo]*

En el ordenamiento jurídico mexicano, la protección de estos datos sensibles se regula de manera diferenciada. Mientras que la LFPDPPP (Ley Federal de Protección de Datos Personales en Posesión de los Particulares) norma al sector privado, la LGPDPPSO (Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados) impone obligaciones a las instituciones públicas.

> *[Énfasis · contacto visual]*

El Instituto Politécnico Nacional, al ser una institución del Estado, está catalogado bajo este segundo marco. 

Por lo tanto, la migración de PICIS a la nube no es sólo un reto técnico, sino una obligación de estricto cumplimiento legal. El diseño de nuestro esquema preventivo busca garantizar que la plataforma opere en conformidad con las salvaguardas que esta ley exige.

---

## Slide 08 — Objetivo general · 55s

> *[Ritmo pausado · señalar el objetivo en pantalla]*

El objetivo general aprobado originalmente en nuestro protocolo de investigación establece: *implementar un esquema preventivo unificado para ofrecer privacidad, confidencialidad e integridad de los datos sensibles de la versión en nube de PICIS...*

> *[Señalar el ajuste en pantalla]*

Como se aprecia en la diapositiva, proponemos formalmente un **ajuste en el verbo principal para la fase final del proyecto: cambiar "implementar" por "diseñar"**. Este ajuste refleja con honestidad académica el alcance real de esta primera etapa: el diseño completo del catálogo de controles, el análisis de brechas y el análisis de impacto. La implementación operativa y pruebas de los controles corresponden por definición a la fase de TT2.

Asimismo, queremos señalar que el **«para qué» del objetivo queda pendiente de redacción definitiva**. Debido a que el proyecto se encuentra en pleno desarrollo académico, el impacto y beneficio final se consolidarán una vez concluidas las pruebas de funcionamiento en la siguiente etapa.

---

## Slide 09 — Objetivos particulares · 40s

> *[Contacto visual]*

El objetivo general se desglosa en **cuatro objetivos particulares** diseñados como metas evaluables y no como simples actividades:

Primero, el **OP-1**: Caracterizar la brecha de seguridad activo por activo, asociando vulnerabilidades físicas a controles objetivo en la nube.

Segundo, el **OP-2**: Diseñar un catálogo de controles técnicos que abarque al menos el 90 % de las subcategorías de Identificación y Protección del marco NIST.

Tercero, el **OP-3**: Garantizar la conformidad legal y técnica mediante una matriz de trazabilidad bidireccional que cubra al menos el 95 % de los artículos aplicables.

Y finalmente, el **OP-4**: Validar el funcionamiento operativo mediante una matriz de pruebas cuantitativa. Este último objetivo define el alcance de la fase de TT2.

---

## Slide 11 — Cuatro marcos del NIST · 45s

> *[Explicación analítica]*

Para estructurar este esquema preventivo, llevamos a cabo un proceso de selección y descarte de marcos de ciberseguridad, concluyendo que la integración de cuatro publicaciones específicas del NIST era la ruta óptima para PICIS-nube.

El **NIST CSF 2.0** actúa como marco rector, enfocándonos estrictamente en las funciones de Identificar y Proteger. 

El **NIST Privacy Framework** nos permitió alinear la ciberseguridad con los derechos de privacidad de los usuarios. 

El **NIST SP 800-53** nos dotó de la biblioteca de controles base, la cual analizamos y refinamos para derivar nuestras 22 salvaguardas específicas. 

Y el **NIST SP 800-207** nos brindó las pautas de arquitectura Zero Trust para diseñar el flujo de autorización sin perímetros físicos.

---

## Slide 15 — Metodología · 45s

> *[Ritmo continuo]*

La metodología de investigación se diseñó en **cinco etapas acopladas**, donde el entregable de cada una sirve como insumo de la siguiente.

En las etapas uno y dos realizamos la caracterización de la brecha y el análisis normativo de la legislación mexicana. 

Con esa información, en la etapa tres diseñamos el catálogo de 22 controles técnicos específicos, y en la etapa cuatro ejecutamos el Análisis de Impacto a la Privacidad (PIA). Estas primeras cuatro etapas cierran la fase de investigación documental y de diseño en TT1.

La etapa cinco, que abarca el aprovisionamiento automatizado en la nube y la ejecución de la matriz de pruebas, constituye el plan metodológico a desarrollar en TT2.

---

## Slide 18 — Arquitectura C4 nivel 1 · 50s

> *[Señalar el diagrama de contexto]*

Para modelar la arquitectura y comunicar la superficie de ataque del sistema a los sinodales, adoptamos la notación **C4**, ya que permite descomponer el diseño de lo general a lo específico sin perder de vista los roles del sistema.

Este nivel uno representa el diagrama de contexto:

A la izquierda identificamos los **cinco roles operativos y técnicos** que interactúan con el sistema. 

Al centro se sitúa el núcleo de PICIS-nube, donde se implementan los componentes lógicos de Zero Trust: el motor de políticas, el administrador y el punto de aplicación de políticas.

A la derecha se muestran las integraciones de infraestructura: las identidades federadas mediante Cloud Identity, Sensitive Data Protection como insumo de clasificación y, finalmente, los portales web bajo seguimiento.

---

## Slide 22 — Catálogo de 22 controles · 45s

> *[Contacto visual]*

Para llegar a las salvaguardas del proyecto, realizamos un proceso de filtrado de los controles del NIST SP 800-53, seleccionando y personalizando aquellos aplicables de forma puramente preventiva.

El catálogo resultante consta de **22 controles organizados en tres familias**:

Ocho controles en **Confidencialidad**, orientados al cifrado bajo llaves de la institución y acceso contextual. 

Siete controles en **Integridad**, destinados a proteger las bitácoras y a firmar criptográficamente las imágenes de los contenedores antes de su ejecución.

Y siete controles en **Privacidad**, dedicados al enmascaramiento dinámico de datos y análisis de impacto.

La aportación clave de este catálogo es que cada control cuenta con un criterio de aceptación técnico y medible, eliminando ambigüedades en su validación.

---

## Slide 25 — Cronograma de actividades — TT2 · 50s

> *[Pausa breve · contacto visual]*

Para finalizar, presentamos la planeación de la segunda fase del Trabajo Terminal, orientada a llevar este diseño a la demostración práctica. El cronograma se divide en tres bloques de actividades:

El primer bloque corresponde al **aprovisionamiento declarativo** del entorno en Google Cloud. Levantaremos de forma automatizada y mediante código las redes, proyectos y perímetros de seguridad.

El segundo bloque abarca la **ejecución de la matriz de pruebas**, documentando la evidencia material del comportamiento de cada uno de los 22 controles ante incidentes.

Y el tercer bloque cierra con la **auditoría de cumplimiento inverso**, verificando que cada obligación de la ley mexicana esté efectivamente cubierta por una evidencia de ciberseguridad en la nube.

De esta forma, cerramos el ciclo: TT1 diseña e investiga; TT2 implementa y demuestra.

---

## Slide 26 — Gracias · Cierre conjunto

> *[Te incorporas al centro junto con Miguel y Diego]*

Muchas gracias por su atención.
