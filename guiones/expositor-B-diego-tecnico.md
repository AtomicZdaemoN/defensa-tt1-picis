# Guion · Diego — Técnico / Preciso y Fluido

> **Rol:** Se enfoca en la transición tecnológica de PICIS, métricas de
> privacidad, arquitectura de contenedores y justificación técnica en
> la nube.
>
> **Diapositivas asignadas:** 06, 07, 13, 14, 17, 19, 21, 24, 26
>
> **Tiempo objetivo total:** ~5:00 min
>
> **Notas de estilo:**
> - Se eliminaron las guías de pronunciación fonética.
> - Se conservan notas entre corchetes para acciones no verbales
>   (`[Señalar...]`, `[Contacto visual...]`).
> - Los acrónimos complejos se detallan con su significado entre
>   paréntesis la primera vez que se usan.

---

## Slide 06 — De PICIS v1 a v2 · 45s

> *[Transición: Entras después de la intervención de Miguel en el slide 05]*

Gracias, Miguel. Como mencionas, PICIS está migrando a su versión 2 en
la nube, bajo el paradigma de privacidad y seguridad por diseño.

> *[Señalar la tabla del slide]*

La diferencia es estructural. La versión 1 depende de servidores
locales, perímetros físicos y credenciales estáticas. La versión 2
evoluciona hacia una infraestructura gestionada en Google Cloud, con
un perímetro lógico Zero Trust, identidades federadas libres de
claves y auditoría inmutable.

> *[Contacto visual · Énfasis]*

Este cambio redefine por completo el modelo de confianza del sistema,
lo que nos lleva directamente a la problemática que abordamos.

---

## Slide 07 — Problemática · 50s

> *[Ritmo continuo]*

Al migrar a la nube, el perímetro físico desaparece, lo que disuelve
tres garantías fundamentales:

Primero: La red ya no protege. Cada solicitud de acceso debe
verificarse individualmente bajo políticas basadas en el contexto del
usuario.

Segundo: Las identidades no pueden usar claves estáticas. En la
versión 1, los microservicios compartían claves en archivos; un
vector de filtración permanente que ahora es inaceptable.

Tercero: El cumplimiento legal se reconfigura, pues la legislación
mexicana exige protección de datos de manera explícita en el cómputo
en la nube.

Nuestro esquema de seguridad mitiga estos tres frentes de forma
integrada.

> *[Mirada hacia Carlos]*

Carlos, te cedo la palabra para el objetivo general.

---

## Slide 13 — Métrica F-beta · 40s

> *[Transición: Entras después de la intervención de Miguel en el slide 12]*

Gracias, Miguel. Un elemento clave es la métrica de rendimiento del
clasificador. Adoptamos F-beta con beta igual a 2, que es la
referencia de la industria.

> *[Énfasis en la lógica]*

Esto significa que damos el doble de importancia al recall
(exhaustividad) sobre la precisión.

La lógica es directa: en privacidad, un falso negativo es crítico,
pues significa exponer un dato sensible sin anonimizar. En cambio, un
falso positivo solo implica que un analista revisará manualmente un
documento de más.

Esta métrica constituye el criterio de aceptación para las pruebas de
la segunda fase.

---

## Slide 14 — Por qué GCP · 50s

> *[Ritmo seguro · Explicación analítica]*

La selección de la nube no fue arbitraria; evaluamos GCP (Google
Cloud Platform) frente a AWS y Azure bajo cinco criterios técnicos.
GCP sobresale en tres áreas clave:

Uno: Control de acceso Zero Trust nativo mediante IAP (Identity-Aware
Proxy) y políticas de contexto.

Dos: Federación de identidades sin llaves estáticas con Workload
Identity, eliminando contraseñas en archivos.

Tres: Clasificación nativa integrada con SDP (Sensitive Data
Protection).

En conclusión, Google Cloud ofrece la infraestructura mejor integrada
para desplegar la arquitectura de PICIS.

> *[Mirada hacia Carlos]*

Carlos, continuamos con la metodología.

---

## Slide 17 — Requisitos · 45s

> *[Transición: Entras después de la intervención de Miguel en el slide 16]*

Derivado del análisis de brecha, estructuramos 12 requisitos
funcionales y 10 no funcionales, con criterios de aceptación
medibles.

> *[Contacto visual]*

Destaco los dos pilares del diseño:

En lo funcional, la inmutabilidad de los registros de auditoría
mediante almacenamiento WORM (Write Once, Read Many), garantizando
la trazabilidad exigida por la ley.

En lo no funcional, el aprovisionamiento declarativo de la
infraestructura. Todo el entorno se despliega con código
reproducible, eliminando configuraciones manuales.

El catálogo completo está detallado en el Anexo A.

---

## Slide 19 — C4 Nivel 2 · Contenedores · 60s

> *[Señalar el diagrama C4 — usar apuntador láser para guiar al jurado]*

Este es el mapa de contenedores de PICIS v2, el cual estructura la
arquitectura en la nube mediante cinco planos lógicos
interconectados:

El Plano de Ingreso: Donde el balanceador de carga colabora con IAP
(Identity-Aware Proxy) para firmar un token de identidad y validar
el contexto antes de tocar la red interna.

El Plano de Aplicación: Ubicado en un clúster privado de GKE (Google
Kubernetes Engine), donde residen el recolector y el clasificador,
interactuando sin contraseñas gracias a las identidades federadas.

El Plano de Datos: Protegido dentro de un perímetro lógico cerrado
mediante VPC Service Controls para evitar fugas de información,
almacenando los datos cifrados con llaves gestionadas por la
institución.

Finalmente, los planos transversales de Control y de Ciclo de Vida
de Software garantizan que solo imágenes de contenedores firmadas y
verificadas puedan ser desplegadas.

---

## Slide 21 — Diseño · Clasificador NLP/IA · 50s

> *[Señalar el diagrama del clasificador]*

Descendemos un nivel más en la arquitectura para analizar el
clasificador, que es el componente que interactúa de forma directa
con los datos sensibles.

Este módulo opera en un pipeline de procesamiento modular dentro del
clúster privado de GKE. Su función es procesar el texto y
clasificarlo bajo nuestra taxonomía de 55 tipos de datos personales.

> *[Contacto visual directo con el jurado · Ritmo pausado]*

Quiero enfatizar que este diseño responde estrictamente al Artículo
22 de la Ley de Datos Personales (LGPDPPSO). Nuestro sistema no
toma decisiones automatizadas definitivas. El clasificador genera
una preclasificación y es el Analista humano quien valida y confirma
los incidentes en la consola. Toda la trazabilidad de esta
interacción se registra en registros de auditoría inmutables.

> *[Mirada hacia Carlos]*

Carlos, pasamos al catálogo de controles.

---

## Slide 24 — Conclusiones · 50s

> *[Transición: Entras después de la intervención de Miguel en el slide 23]*

Como resultados de esta etapa de TT1, cumplimos tres de los cuatro
objetivos particulares:

Primero, el OP-1: Caracterizamos la brecha de seguridad asociando
cada activo crítico a un control objetivo.

Segundo, el OP-2: Diseñamos los 22 controles de confidencialidad,
integridad y privacidad bajo el marco NIST CSF (Cybersecurity
Framework) 2.0.

Tercero, el OP-3: Creamos el mapeo legal entre la normativa mexicana
y los controles técnicos.

> *[Énfasis final con seguridad]*

El mayor valor del diseño es la trazabilidad bidireccional: ante una
auditoría, demostramos qué artículo exige cada control, y qué control
técnico satisface cada artículo legal.

> *[Mirada hacia Carlos]*

Carlos, cierras con el trabajo a futuro.

---

## Slide 26 — Gracias · Cierre conjunto

> *[Te incorporas al centro junto con Miguel y Carlos]*

Estamos listos para sus preguntas. Muchas gracias.
