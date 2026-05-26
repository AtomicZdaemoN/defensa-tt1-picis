# Guion · Diego — Técnico / Preciso y Fluido

> **Rol:** Se enfoca en la transición tecnológica de PICIS, métricas de privacidad, arquitectura de contenedores y justificación técnica en la nube.
>
> **Diapositivas asignadas:** 06, 07, 14, 15, 18, 20, 22, 25, 27
>
> **Tiempo objetivo total:** ~5:00 min
>
> **Notas de estilo:**
> - Sin guías de pronunciación fonética.
> - Notas entre corchetes para acciones no verbales (`[Señalar...]`, `[Contacto visual...]`).
> - Se eliminaron las transiciones habladas de relevo ("a continuación", "le paso la palabra").
> - Foco en el **proceso de diseño**: explicar las decisiones de arquitectura que tomó el equipo.

---

## Slide 06 — De PICIS v1 a v2 · 45s

> *[Transición: Entras después de la intervención de Miguel en el slide 05]*

PICIS está migrando a su versión 2 en la nube, bajo el paradigma de privacidad y seguridad por diseño.

> *[Señalar la tabla del slide]*

El diseño de esta transición parte de redefinir la arquitectura local de la versión 1. Mientras que antes se dependía de servidores físicos y credenciales estáticas locales, la versión 2 evoluciona hacia una infraestructura gestionada en Google Cloud, con un perímetro lógico Zero Trust, identidades federadas libres de claves y auditoría inmutable.

> *[Contacto visual · Énfasis]*

Este cambio redefine por completo el modelo de confianza del sistema, lo que nos lleva directamente a la problemática que abordamos.

---

## Slide 07 — Problemática · 50s

> *[Ritmo continuo]*

Al diseñar la migración a la nube, analizamos cómo la desaparición del perímetro físico disuelve tres garantías fundamentales:

Primero: La red ya no protege de forma implícita. Cada solicitud de acceso debe verificarse individualmente bajo políticas basadas en el contexto del usuario.

Segundo: Las identidades de los microservicios no pueden usar claves estáticas. En la versión 1, compartir claves en archivos de configuración constituía un vector de filtración permanente que ahora es inaceptable.

Tercero: El cumplimiento legal se reconfigura, pues la legislación mexicana exige protección de datos de manera explícita en el cómputo en la nube.

Nuestro esquema de seguridad mitiga estas tres áreas de forma integrada.

---

## Slide 14 — Métrica F-beta · 40s

> *[Transición: Entras después de la intervención de Miguel en el slide 13]*

Un elemento clave de la investigación fue seleccionar la métrica de rendimiento adecuada para el clasificador. Evaluamos diversas métricas y adoptamos F-beta con beta igual a 2, que es el estándar de la industria para el descubrimiento de información sensible.

> *[Énfasis en la lógica]*

Esta decisión técnica significa que damos el doble de importancia al recall (exhaustividad) sobre la precisión.

La lógica es directa: en privacidad, un falso negativo es crítico, pues significa exponer un dato sensible sin anonimizar. En cambio, un falso positivo solo implica que un analista revisará manualmente un documento de más.

Esta métrica constituye el criterio de aceptación para las pruebas de la segunda fase.

---

## Slide 15 — Por qué GCP · 50s

> *[Ritmo seguro · Explicación analítica]*

La selección de la nube no fue arbitraria; evaluamos de manera sistemática a GCP (Google Cloud Platform) frente a AWS y Azure bajo criterios técnicos específicos. GCP sobresalió en tres áreas clave:

Uno: Control de acceso Zero Trust nativo mediante IAP (Identity-Aware Proxy) y políticas de contexto.

Dos: Federación de identidades sin llaves estáticas con Workload Identity, eliminando contraseñas en archivos.

Tres: Clasificación nativa integrada con SDP (Sensitive Data Protection).

El resultado de esta evaluación nos demostró que Google Cloud ofrece la infraestructura mejor integrada para desplegar la arquitectura modular de PICIS.

---

## Slide 18 — Requisitos · 45s

> *[Transición: Entras después de la intervención de Miguel en el slide 17]*

Para llegar a la formulación de los requisitos funcionales y no funcionales, realizamos un proceso de mapeo a partir de las brechas de seguridad identificadas. Estructuramos 12 requisitos funcionales y 10 no funcionales, con criterios de aceptación medibles.

> *[Contacto visual]*

Destaco los dos pilares del diseño que surgieron de este proceso:

En lo funcional, la inmutabilidad de los registros de auditoría mediante almacenamiento WORM (Write Once, Read Many), garantizando la trazabilidad exigida por la ley.

En lo no funcional, el aprovisionamiento declarativo de la infraestructura. Todo el entorno se despliega con código reproducible, eliminando configuraciones manuales propensas a errores.

El catálogo completo está detallado en el Anexo A.

---

## Slide 20 — C4 Nivel 2 · Contenedores · 60s

> *[Señalar el diagrama C4]*

El modelado de esta arquitectura en cinco planos lógicos fue el resultado de un proceso iterativo de diseño buscando el aislamiento de la superficie de ataque del clúster. Diseñamos estos cinco planos lógicos apilados de forma vertical para romper con el modelo de red plana tradicional.

El Plano de Ingreso: Donde el balanceador de carga trabaja junto a IAP (Identity-Aware Proxy) para firmar un token de identidad y validar el contexto (ACM) antes de tocar la red interna.

El Plano de Aplicación: Ubicado en un clúster privado de GKE, donde residen el scraper y el clasificador, interactuando sin contraseñas gracias a las identidades federadas.

El Plano de Datos: Protegido dentro de un perímetro cerrado mediante VPC Service Controls para evitar fugas de información, almacenando los datos cifrados con llaves KMS de la institución.

Finalmente, los planos transversales de Control y de Ciclo de Vida de Software garantizan que solo imágenes de contenedores firmadas y verificadas (Cosign + Binary Authorization) puedan ser desplegadas en producción.

---

## Slide 22 — Diseño · Clasificador NLP/IA · 50s

> *[Señalar el diagrama del clasificador]*

Descendemos un nivel más en la arquitectura para analizar el clasificador, el componente más sensible por interactuar directamente con los datos.

Diseñamos su arquitectura como un pipeline secuencial de 5 etapas (separador, segmentador, filtrado, clasificador NLP/IA y reporteador) para procesar e identificar de manera granular los datos de carácter PII. Este diseño responde directamente a la necesidad de que el flujo de procesamiento de lenguaje natural cumpla estrictamente con el Artículo 22 de la Ley de Datos Personales (LGPDPPSO).

> *[Contacto visual directo con el jurado · Ritmo pausado]*

Esto determinó que el sistema no tomara decisiones automatizadas definitivas. El clasificador genera una preclasificación y es el Analista humano quien valida y confirma los incidentes en la consola. Toda la trazabilidad de esta interacción y sus llaves de cifrado CMEK se integran de forma nativa.

---

## Slide 25 — Conclusiones · 50s

> *[Transición: Entras después de la intervención de Miguel en el slide 24]*

Como resultados de esta etapa de investigación de TT1, cumplimos tres de los cuatro objetivos particulares:

Primero, el OP-1: Caracterizamos la brecha de seguridad asociando cada activo crítico a un control objetivo.

Segundo, el OP-2: Diseñamos los 22 controles de confidencialidad, integridad y privacidad bajo el marco NIST CSF 2.0.

Tercero, el OP-3: Creamos el mapeo legal entre la normativa mexicana y los controles técnicos.

> *[Énfasis final con seguridad]*

El mayor valor de esta fase de diseño es la trazabilidad bidireccional: ante una auditoría, demostramos qué artículo exige cada control, y qué control técnico satisface cada artículo legal.

---

## Slide 27 — Gracias · Cierre conjunto

> *[Te incorporas al centro junto con Miguel y Carlos]*

Estamos listos para sus preguntas. Muchas gracias.
