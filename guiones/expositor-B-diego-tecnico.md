# Guion · Diego — Técnico / Preciso

> **Rol:** se enfoca en lo técnico con precisión. Transición a nube,
> problema, métrica, herramientas, arquitectura, cierre técnico.
>
> **Slides:** 6, 7, 13, 14, 17, 19, 21, 24, 26
>
> **Tiempo objetivo:** ~6:30 min (≈9 slides · 40-50s c/u)
>
> **Filosofía:** precisión sin exceso. Cada palabra técnica debe sonar
> a dominio, no a memoria. Los detalles que se queden fuera son
> oportunidades de respuesta en Q&A.

---

## Slide 06 — De PICIS v1 a v2 · 45s

> *[Después del slide 05 de Miguel]*

Gracias, Miguel. Como dijiste, PICIS opera hoy en infraestructura local.
Pero el CIC-IPN está migrándolo a la nube en una nueva versión, **la v2**,
construida bajo el paradigma *privacy and security by design*. Ese
escenario es donde vive este Trabajo Terminal.

> *[señalar tabla del slide]*

La diferencia es estructural. La v1: servidores propios, perímetro de
red físico, claves estáticas, logs locales. La v2: infraestructura
gestionada en GCP, **perímetro lógico Zero Trust**, federación sin
claves, auditoría inmutable WORM.

> *[contacto visual]*

No es solo un cambio de dónde viven los servidores. Es un cambio en el
**modelo de confianza completo**. Por eso surge el problema que voy a
presentar ahora.

---

## Slide 07 — Problemática · 50s

> *[Continuación]*

La v1 opera detrás de un perímetro de red físico. Eso da por hechas
propiedades de seguridad que en la nube **dejan de cumplirse**.

Son tres garantías disueltas:

**Una:** el perímetro lógico se disuelve. La red ya no protege. Cada
solicitud tiene que verificarse sola con políticas contextuales.

**Dos:** las identidades con claves estáticas. Los microservicios
usaban credenciales persistentes en archivos. **Eso es un vector
permanente de filtración.**

**Tres:** la conformidad legal se reconfigura. La reforma
constitucional mexicana de 2025 extendió las obligaciones de
protección de datos explícitamente al cómputo en la nube.

> *[ritmo pausado · contacto visual]*

Nuestro trabajo terminal aborda estos tres problemas de forma
integrada. No resolvemos solo uno — los tres simultáneamente.

**Carlos**, te paso la palabra para el objetivo general.

---

## Slide 13 — Métrica F-beta · 40s

> *[Después de slide 12 de Miguel]*

Gracias, Miguel. Algo muy específico: la métrica del clasificador.

Usamos **F-beta con beta igual a 2**. Viene de Microsoft Presidio y
Purview, que son la referencia en clasificación de PII.

> *[ritmo pausado]*

¿Qué significa en la práctica? **Le damos el doble de importancia al
recall que a la precisión.**

La lógica es directa: en privacidad, un falso negativo cuesta mucho
más que un falso positivo. Si decimos "este documento no tiene datos
sensibles" y sí los tiene, eso termina en una exposición. En cambio,
si decimos que sí los tiene y resulta que no, lo peor es que un
Analista revisa un documento de más.

Esta métrica queda como criterio del RNF-10 para las pruebas de TT2.

---

## Slide 14 — Por qué GCP · 50s

> *[Continuación]*

La elección de la plataforma no fue arbitraria. Hicimos comparativa
técnica contra los tres grandes — AWS, Azure y Google Cloud — con
cinco criterios derivados de los objetivos particulares.

Voy a resumir donde GCP gana:

**Zero Trust nativo:** AWS Verified Access, Azure Entra Private Access,
GCP **Identity-Aware Proxy más Access Context Manager**. La solución
más madura para verificar identidad en cada solicitud.

**Federación sin claves:** GCP **Workload Identity Federation**, basada
en el estándar RFC 8693. AWS y Azure tienen alternativas parciales.

**Clasificación NLP nativa:** GCP **Sensitive Data Protection**
integrado con DLP. Macie de AWS está limitado a S3.

Los detalles de CMEK y WORM están en el reporte. La conclusión: para
una carga NLP institucional bajo Zero Trust, GCP gana en integración
de los cinco criterios.

**Carlos**, sigues con la metodología.

---

## Slide 17 — Requisitos · 45s

> *[Después de slide 16 de Miguel]*

De la brecha que acaba de mostrar Miguel, derivamos los requisitos:
**12 funcionales y 10 no funcionales**, todos con criterio de
aceptación medible.

> *[contacto visual]*

No son requisitos vagos. Cada uno tiene una condición verificable y
trazabilidad explícita al objetivo particular y al control que lo
materializa.

Los más representativos: **RF-04**, acceso Zero Trust por contexto.
**RF-07**, logs inmutables en bucket WORM. **RF-12**, trazabilidad de
las decisiones de IA.

En no funcionales: **RNF-08**, aprovisionamiento declarativo
reproducible — todo el entorno se levanta con scripts. **RNF-10**,
verificabilidad de pruebas — cada caso debe ser reproducible con
evidencia de ejecución.

El catálogo completo está en el Anexo A.

---

## Slide 19 — Contenedores · 60s

> *[Continuación]*

Bajamos un nivel en la arquitectura. **Cinco planos lógicos** sobre
GCP.

> *[señalar diagrama]*

**Plano uno, ingreso:** Cloud Load Balancing, Identity-Aware Proxy,
Access Context Manager. IAP firma un JWT y pasa al siguiente plano.

**Plano dos, aplicación:** GKE privado con Workload Identity. Aquí
viven el scraper, el clasificador NLP/IA, y el reportador. Con SDP
como insumo opcional.

**Plano tres, datos:** dentro de un perímetro VPC Service Controls.
BigQuery con CMEK y data masking, Cloud Storage cifrado.

Debajo, dos planos transversales que **sostienen a los demás**:

**Plano cuatro, control:** Cloud Identity, IAM, KMS, Secret Manager,
Audit Logs en WORM, VPC SC.

**Plano cinco, cadena de software:** Cosign firma las imágenes,
Artifact Registry las versiona, Binary Authorization exige atestación
antes del despliegue.

> *[intensificar]*

Ningún componente funciona aislado. Eso hace que el esquema sea
coherente, no una colección de herramientas sueltas.

**Miguel**, ahora muestras el flujo Zero Trust completo.

---

## Slide 21 — Clasificador NLP/IA · 50s

> *[Después de slide 20 de Miguel]*

Bajamos un nivel más. Adentro del clasificador, el componente más
sensible porque toca los datos personales directamente.

Es un pipeline de **cinco pasos** en GKE privado: separador de
metadatos, segmentador, filtrado, el **núcleo** — el clasificador
NLP/IA con la taxonomía de 55 tipos — y el reportador, que produce el
JSON final con referencia archivo · página · párrafo.

> *[contacto visual · intensificar]*

Algo crítico: el clasificador **dialoga** con Sensitive Data Protection.
SDP es un **insumo**, no el veredicto. La taxonomía propia de PICIS es
la que decide. Y la decisión final no es automática: **el Analista
valida** los hallazgos antes de persistirlos como incidentes
confirmados. Toda esa trazabilidad queda en Cloud Logging.

Eso es lo que cumple el artículo 22 a nivel de implementación.

**Carlos**, sigues con el catálogo de controles.

---

## Slide 24 — Conclusiones · 50s

> *[Después de slide 23 de Miguel]*

Resultados. **De los cuatro objetivos particulares, tres se cumplieron
en TT1.**

**OP-1, brecha caracterizada:** cada activo trazado a control existente
y control objetivo. Matriz en el Anexo I.

**OP-2, 22 controles diseñados:** agrupados en confidencialidad,
integridad y privacidad. Todos mapeados a subcategorías del NIST CSF
2.0 aplicables.

**OP-3, trazabilidad normativa:** mapeo bidireccional artículo ↔ control
sobre LFPDPPP, su Reglamento y la LGPDPPSO. Anexo E.

Más el PIA del clasificador en siete bloques, con decisión residual
documentada.

> *[intensificar · contacto visual]*

El resultado más significativo es el **mapeo bidireccional**. Dado
cualquier control, sabes qué artículo lo exige. Dado cualquier
artículo, sabes qué control lo satisface. Trazabilidad en ambas
direcciones.

**Carlos**, cierras con el trabajo a futuro.

---

## Slide 26 — Gracias · cierre conjunto

> *[Junto a Miguel y Carlos]*

Estamos listos para sus preguntas.

---

## Notas de coaching para Diego

1. **Tu fuerza es la precisión.** Cuando dices "tokens de máximo una
   hora", el público debe sentir que sabes exactamente cómo funciona.
2. **No leas enumeraciones.** Lista 3 ejemplos representativos y deja
   el resto al reporte / Anexo. El público no recuerda C-001 vs C-002,
   pero sí recuerda "claves estáticas son un vector permanente de
   filtración".
3. **En el slide 21, el remate es el artículo 22.** Es donde lo técnico
   se encuentra con la ley. Dale peso. No lo digas de pasada.
4. **Si un sinodal te pregunta algo técnico**, responde con precisión y
   brevedad. Si no sabes algo, di "eso está en el Anexo X" o "eso es
   parte de TT2". **Nunca inventes.**
