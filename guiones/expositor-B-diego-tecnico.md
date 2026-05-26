# Guion · Diego — Técnico / Preciso y Fluido

> **Rol:** Se enfoca en la transición tecnológica de PICIS, métricas de privacidad, arquitectura de contenedores y justificación técnica en la nube.
>
> **Diapositivas asignadas:** 06, 07, 13, 14, 17, 19, 21, 24, 26
>
> **Tiempo objetivo total:** ~6:00 min (≈9 diapositivas · 40s - 50s promedio por diapositiva)
>
> **Estrategia de lectura fluida:** 
> - Las notas entre corchetes **`[LECTURA: ...]`** te indican la pronunciación exacta de siglas técnicas para evitar trabarte.
> - Las guías de entonación **`[Pausa]`** o **`[Énfasis]`** marcan el ritmo respiratorio para mantener una cadencia profesional y pausada.
> - Se eliminaron listados densos de herramientas competidoras en inglés; en su lugar, se prioriza explicar el concepto detrás de cada componente.

---

## Slide 06 — De PICIS v1 a v2 · 40s

> *[Transición: Entras después de la intervención de Miguel en el slide 05]*

Gracias, Miguel. Como bien mencionas, el sistema PICIS opera actualmente en una infraestructura puramente local. Sin embargo, el CIC-IPN ha iniciado la migración hacia una nueva versión en la nube, **la versión 2**, diseñada desde su origen bajo el paradigma de seguridad y privacidad por diseño. Es precisamente en esta fase de transición donde se sitúa nuestro Trabajo Terminal.

> *[Entonación explicativa · Señalar la tabla en pantalla]*

La diferencia entre ambas versiones es estructural. Mientras la versión 1 depende de servidores locales, perímetros de red físicos, llaves de cifrado estáticas y registros locales; la versión 2 evoluciona hacia una infraestructura gestionada en Google Cloud, un **perímetro lógico basado en Zero Trust**, identidades federadas libres de claves y un sistema de auditoría inmutable y a prueba de alteraciones.

> *[Contacto visual directo con los sinodales · Énfasis]*

Esto no es un simple cambio de servidores; representa una reconfiguración completa en el **modelo de confianza del sistema**. Por ello, nos enfrentamos a la problemática que detallaré a continuación.

---

## Slide 07 — Problemática · 45s

> *[Ritmo continuo · Conectando con la diapositiva anterior]*

Al migrar a la nube, el perímetro de red físico tradicional que protegía a la versión 1 desaparece. Esto disuelve tres garantías fundamentales que antes dábamos por sentadas:

**Primero:** La red física ya no es una barrera. En la nube, cada solicitud de acceso debe ser verificada de manera individual utilizando políticas basadas en el contexto del usuario.

**Segundo:** Las identidades no pueden depender de credenciales estáticas. En la versión 1, los microservicios compartían claves persistentes en archivos de configuración; **un riesgo de filtración permanente** que en la versión 2 resulta inaceptable.

**Tercero:** El cumplimiento legal se vuelve más estricto. La reforma constitucional mexicana de 2025 establece obligaciones específicas de protección de datos aplicables de manera explícita al cómputo en la nube.

Nuestro esquema preventivo ataca estos tres frentes de manera integrada, garantizando que el paso a la nube sea seguro y cumpla plenamente con la normativa.

> *[Mirada hacia Carlos]*

**Carlos**, te cedo la palabra para detallar el objetivo general.

---

## Slide 13 — Métrica F-beta · 40s

> *[Transición: Entras después de la intervención de Miguel en el slide 12]*

Gracias, Miguel. Un componente técnico de vital importancia es la métrica de rendimiento que seleccionamos para evaluar nuestro clasificador de datos personales.

Adoptamos la métrica **F-beta con un valor de beta igual a 2** `[LECTURA: efe-beta con beta igual a dos]`. Esta es la métrica de referencia utilizada por herramientas líderes en la industria como *Microsoft Presidio*.

> *[Ritmo lento · Énfasis en la lógica]*

En términos prácticos, esto significa que **le otorgamos el doble de importancia a la exhaustividad o recall `[LECTURA: ri-col]`, por encima de la precisión**. 

La lógica en materia de privacidad es muy clara: un falso negativo es catastrófico, pues significaría dejar pasar un dato sensible sin anonimizar, exponiendo la privacidad del titular. En cambio, un falso positivo únicamente implica que un analista revisará manualmente un documento adicional. 

Esta métrica constituye el criterio de aceptación principal para las pruebas que realizaremos en la segunda fase del proyecto.

---

## Slide 14 — Por qué GCP · 50s

> *[Ritmo seguro · Explicación analítica]*

La selección de la nube de Google no fue una decisión casual. Realizamos una evaluación comparativa exhaustiva frente a los servicios de Amazon y Azure utilizando cinco criterios técnicos alineados con los objetivos de PICIS v2.

Destaco las tres áreas donde Google Cloud sobresale de forma definitiva:

**Uno:** El control de acceso Zero Trust. A través de IAP `[LECTURA: i-a-pe]` y políticas de contexto, logramos verificar la identidad del usuario en cada solicitud antes de otorgar acceso a la red privada.

**Dos:** La federación de identidades sin llaves con *Workload Identity Federation* `[LECTURA: guork-lod ai-dentiti feder-eishon]`. Esto nos permite comunicar los microservicios sin almacenar contraseñas ni archivos de clave en el clúster.

**Tres:** La clasificación nativa de datos a través del servicio de *Sensitive Data Protection* `[LECTURA: sensitiv data protec-shon]`, el cual está plenamente integrado con los repositorios de datos del ecosistema.

En conclusión: Google Cloud ofrece el ecosistema mejor integrado para desplegar la arquitectura modular de PICIS.

> *[Mirada hacia Carlos]*

**Carlos**, continuamos con la metodología.

---

## Slide 17 — Requisitos · 40s

> *[Transición: Entras después de la intervención de Miguel en el slide 16]*

Derivado del análisis de brechas que acaba de exponer Miguel, estructuramos un catálogo de **12 requisitos funcionales y 10 no funcionales**, cada uno con criterios de aceptación cuantitativos y medibles.

> *[Lectura fluida · No leas la lista del slide, enfócate en los pilares]*

En lugar de enumerar el catálogo completo, quiero destacar los dos pilares de diseño que sustentan el proyecto:

En el ámbito **funcional**, resalto el requisito de inmutabilidad de los registros. Todo registro de acceso y auditoría se escribe en buckets configurados con retención de datos inmutable, garantizando la trazabilidad exigida por la ley.

En el ámbito **no funcional**, nuestro pilar es el aprovisionamiento declarativo. La infraestructura no se configura manualmente en una consola; se define por completo a través de código reproducible, eliminando errores de configuración humana.

El catálogo técnico detallado puede ser consultado en el Anexo A del reporte.

---

## Slide 19 — C4 Nivel 2 · Contenedores · 55s

> *[Pausa breve · Señalar el diagrama C4 en la diapositiva]*

Este es el diagrama de contenedores de PICIS v2, el cual estructura la arquitectura en la nube mediante **cinco planos lógicos** interconectados:

**El Plano de Ingreso:** Donde el balanceador de carga colabora con IAP `[LECTURA: i-a-pe]` para firmar un token de identidad y validar el contexto antes de que el tráfico toque la red interna.

**El Plano de Aplicación:** Ubicado en un clúster privado de GKE `[LECTURA: ge-ka-e]`, donde residen de forma aislada el recolector de documentos y el clasificador de texto, interactuando sin contraseñas gracias a las identidades federadas.

**El Plano de Datos:** Que vive protegido dentro de un perímetro lógico cerrado mediante *VPC Service Controls* `[LECTURA: vupese-servis-controls]` para evitar fugas de información, almacenando los datos cifrados con llaves gestionadas por la institución.

Finalmente, los planos transversales de **Control** y de **Ciclo de Vida de Software** garantizan que solo imágenes de contenedores firmadas y verificadas puedan ser desplegadas en el entorno de producción.

---

## Slide 21 — Diseño · Clasificador NLP/IA · 50s

> *[Señalar el diagrama del pipeline]*

Descendemos un nivel más en la arquitectura para analizar el clasificador, que es el componente que interactúa de forma directa con los datos sensibles.

Este módulo opera en un pipeline `[LECTURA: paip-lain]` de procesamiento modular dentro del clúster privado de GKE `[LECTURA: ge-ka-e]`. Su función es procesar el texto y clasificarlo bajo nuestra taxonomía propietaria de 55 tipos de datos personales.

> *[Contacto visual directo con el jurado · Ritmo pausado y formal · Muy Importante]*

Quiero enfatizar que este diseño responde estrictamente al **Artículo 22 de la Ley de Datos Personales (LGPDPPSO)**. Nuestro sistema no toma decisiones automatizadas autónomas que afecten los derechos del usuario. El clasificador genera una preclasificación y es el **Analista humano** quien valida y confirma los incidentes en la consola de control. Toda la trazabilidad de esta interacción se registra en registros de auditoría inmutables.

> *[Mirada hacia Carlos]*

**Carlos**, pasamos al catálogo de controles.

---

## Slide 24 — Conclusiones · 45s

> *[Transición: Entras después de la intervención de Miguel en el slide 23]*

Como resultados y conclusiones de esta primera etapa, hemos completado con éxito **tres de los cuatro objetivos particulares de nuestro Trabajo Terminal**:

**Primero (OP-1):** Caracterizamos la brecha de seguridad mediante una matriz detallada que asocia cada activo crítico con sus controles existentes y objetivos.

**Segundo (OP-2):** Diseñamos un catálogo de 22 controles técnicos clasificados en confidencialidad, integridad y privacidad, mapeados al marco NIST CSF 2.0 `[LECTURA: nist-ese-ese-efe dos punto cero]`.

**Tercero (OP-3):** Diseñamos la conformidad legal a través de una matriz de trazabilidad bidireccional entre la normativa mexicana y los controles técnicos implementados.

> *[Énfasis final con seguridad]*

La aportación principal de este diseño es su **trazabilidad bidireccional**: ante cualquier auditoría, podemos demostrar qué artículo de la ley exige un control técnico y, a su vez, qué control específico en la nube satisface cada obligación de ley.

**Carlos**, cierras con el trabajo a futuro.

---

## Slide 26 — Gracias · Cierre conjunto

> *[Te incorporas al centro junto con Miguel y Carlos, listos para la sesión de preguntas]*

Estamos listos para sus preguntas. Muchas gracias.

---

## Notas de entrega para Diego (Lee antes de iniciar)

1. **La pronunciación es tu aliada:** Di las siglas letra por letra despacio (`I-A-P`, `G-K-E`). Suena mucho más natural y evita tropiezos que decirlas en inglés rápido.
2. **Usa el guion en pantalla:** Dado que puedes leer el guion directamente en tu pantalla, úsalo para mantener la calma. No intentes improvisar sobre los nombres de los servicios de GCP.
3. **El remate del Slide 21 es clave:** Los sinodales de ESCOM aman la justificación legal. Cuando hables del *Artículo 22* y la *validación humana*, haz una pausa y míralos a los ojos. Es el punto más fuerte de tu presentación.
