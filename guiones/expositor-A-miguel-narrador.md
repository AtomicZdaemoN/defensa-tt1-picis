# Guion · Miguel — Narrador / Conector

> **Rol:** Abre la presentación, conecta el problema humano con el técnico, aterriza la legislación, narra el proceso de investigación y diseño (estado del arte, brecha, flujo Zero Trust, PIA).
>
> **Diapositivas asignadas:** 01, 02, 05, 10, 12, 16, 20, 23, 26
>
> **Tiempo objetivo total:** ~5:30 min
>
> **Notas de estilo:**
> - Sin guías de pronunciación fonética.
> - Notas entre corchetes para acciones no verbales (`[Señalar...]`, `[Contacto visual...]`).
> - Se eliminaron las transiciones habladas de relevo ("a continuación", "le paso la palabra"). La transición es implícita al cambiar el slide.
> - Foco en el **proceso de investigación**: cómo se llegó a cada resultado y las decisiones de diseño tomadas por el equipo.

---

## Slide 01 — Portada · 30s

> *[Apertura · contacto visual amplio · los tres expositores al frente]*

Muy buenos días. Mi nombre es Miguel Arturo Romero Carreón, y junto con Diego Alejandro Leyva García y Carlos Uriel Francisco López presentamos la defensa del Trabajo Terminal en la modalidad de **Investigación** número **2026-B182**.

> *[Pausa breve]*

El trabajo lleva por título *Esquema preventivo de privacidad para PICIS en la versión de nube basado en la arquitectura Zero Trust*. Está dirigido por el Dr. Eleazar Aguirre Anaya y la Dra. Nidia Asunción Cortez Duarte.

---

## Slide 02 — Datos sensibles publicados por error · 45s

> *[Entonación reflexiva · contacto visual con el jurado]*

Para entender este proyecto, debemos partir del problema humano y operativo. Las instituciones públicas y privadas publican miles de documentos diariamente en sus portales de transparencia. Un porcentaje crítico de estos archivos contiene, de forma inadvertida, datos personales y sensibles expuestos: desde nombres asociados a CURP hasta expedientes médicos y cuentas bancarias.

Revisar este volumen de información a mano es inviable. Por ello, en el Laboratorio de Ciberseguridad del CIC-IPN se concibió **PICIS**, un sistema que realiza búsquedas automatizadas sobre portales autorizados utilizando un clasificador de lenguaje natural para identificar y preclasificar incidentes de privacidad.

---

## Slide 05 — Por qué nació PICIS · 40s

> *[Ritmo explicativo]*

La motivación del diseño parte de una realidad operativa: la verificación de la privacidad no escala de forma manual. 

Al modelar PICIS, el equipo del CIC-IPN integró cuatro componentes para automatizar la detección: recolección de documentos, extracción de metadatos, segmentación de texto y un clasificador con una taxonomía de 55 tipos de datos.

Un criterio de diseño fundamental en esta investigación es la **intervención humana significativa**: el clasificador no toma decisiones autónomas; genera una preclasificación que un Analista de seguridad debe validar y confirmar.

---

## Slide 10 — Estado del arte · 55s

> *[Señalar la tabla del slide]*

Para consolidar la base de esta investigación, realizamos un proceso de revisión sistemática del estado del arte, siguiendo la metodología recomendada por la dirección del trabajo.

El proceso implicó analizar 23 fuentes —estándares NIST, soluciones comerciales y artículos científicos—. Construimos primero una **matriz bibliográfica** y, posteriormente, una **matriz analítica de contenido** para contrastar cada propuesta bajo cuatro dimensiones: herramientas, métricas, marco conceptual y brechas.

> *[Contacto visual]*

Definimos seis ejes de análisis transversal para evaluar el nivel de protección de datos en la nube. Como muestra la tabla, concluimos que **ningún trabajo cubre la totalidad de los ejes**. Esta carencia de una integración unificada de controles preventivos es la brecha de investigación que resolvemos en este Trabajo Terminal.

---

## Slide 12 — Legislación mexicana · 50s

> *[Énfasis · contacto visual]*

El sustento normativo del esquema preventivo se construyó mediante el análisis sistemático de la legislación mexicana, estructurado en tres capas: la ley federal para el sector privado, la ley general para los sujetos obligados del sector público, y los lineamientos del INAI.

Durante este proceso de análisis, identificamos el **Artículo 22 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados (LGPDPPSO)** como una restricción de diseño crítica. Dicho artículo prohíbe que las decisiones basadas en el tratamiento automatizado de datos se realicen sin intervención y explicación humana. 

Esta exigencia legal moldeó el flujo lógico de nuestro clasificador, garantizando que el sistema siempre actúe como un asistente del Analista humano y nunca de forma autónoma.

---

## Slide 16 — Brecha activo a activo · 55s

> *[Señalar la tabla]*

Para aterrizar el diseño preventivo, realizamos un análisis de brechas exhaustivo, comparando **activo por activo** el estado actual de la versión local de PICIS frente al entorno objetivo en la nube.

Este proceso de análisis de riesgos e inventariado nos permitió determinar las vulnerabilidades críticas del esquema local y proyectar sus contramedidas.

Por ejemplo: las identidades de microservicios, que en la versión local usaban claves estáticas expuestas en archivos, en la nube se sustituyen por identidades federadas de corta duración. Asimismo, el acceso al backend evoluciona de un simple firewall de red a políticas contextuales basadas en Zero Trust. 

Esta caracterización detallada de la brecha se encuentra documentada en el Anexo I del reporte.

---

## Slide 20 — Flujo de autorización Zero Trust · 60s

> *[Pausa breve · contacto visual amplio]*

El resultado más importante de nuestro análisis de arquitectura es este flujo preventivo unificado, el cual concreta la teoría de Zero Trust.

Para modelar este flujo de **once pasos**, partimos del estándar NIST SP 800-207. Evaluamos cómo interactúan los componentes de decisión y aplicación de políticas sobre los servicios de Google Cloud.

El principio de diseño es **deny by default** (denegar por defecto): cada paso del flujo, desde el balanceador de carga hasta el perímetro cerrado de datos, verifica la identidad y el contexto del cliente de forma independiente. Si una sola validación falla, la petición se bloquea de inmediato. 

El flujo cierra en el paso once con un repositorio de auditoría inmutable bajo almacenamiento WORM (Write Once, Read Many), garantizando que ningún registro pueda ser alterado.

---

## Slide 23 — PIA del clasificador · 50s

> *[Énfasis]*

Uno de los principales aportes de este Trabajo Terminal es el **Análisis de Impacto a la Privacidad (PIA)**, el cual diseñamos específicamente para el módulo de clasificación NLP/IA de PICIS.

El proceso se estructuró en **siete bloques** metodológicos alineados con el NIST Privacy Framework.

Evaluamos el flujo del pipeline, catalogamos los datos en cuatro niveles de sensibilidad, identificamos siete vectores de riesgo y mapeamos los controles técnicos de mitigación. 

En el bloque siete determinamos que, tras la aplicación del catálogo de controles, el nivel de riesgo residual es **medio**. Esto nos permite emitir una recomendación formal de mitigación, la cual servirá de base operativa para las pruebas físicas en la fase de TT2.

---

## Slide 26 — Gracias · Cierre conjunto

> *[Te incorporas al centro junto con Diego y Carlos · centro del escenario]*

Muchas gracias por su atención. Quedamos a sus órdenes para la sesión de preguntas.
