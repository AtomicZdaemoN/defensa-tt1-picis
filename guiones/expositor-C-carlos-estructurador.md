# Guion · Expositor C — Estructurador / Normativo

> **Perfil:** Define conceptos, objetivos, marcos, metodología, catálogo
> y continuidad. Habla con orden y claridad. Estructura la narrativa
> normativa del trabajo.
>
> **Slides asignados:** 3, 4, 8, 9, 11, 15, 18, 22, 25, 26 (cierre conjunto)
>
> **Duración estimada:** 18–20 minutos

---

## Notación de este documento

| Marca | Significado |
|---|---|
| `[PAUSA BREVE]` | Silencio de 1–2 segundos — respirar, dejar que el punto aterrice |
| `[PAUSA]` | Silencio de 2–3 segundos — momento de peso |
| `[PAUSA LARGA]` | Silencio de 3–5 segundos — antes de un giro o después de algo importante |
| `[RITMO PAUSADO]` | Hablar lento, palabras separadas — para definiciones o frases clave |
| `[RITMO NORMAL]` | Velocidad conversacional cómoda |
| `[RITMO ÁGIL]` | Ligeramente más rápido — para enumeraciones o conexiones breves |
| `[INTENSIFICAR]` | Subir volumen y firmeza en la frase que sigue |
| `[VOZ BAJA]` | Bajar volumen — crea intimidad, obliga a que pongan atención |
| `[CONTACTO VISUAL]` | Mirar directamente a los sinodales |

---

## SLIDE 03 — ¿Qué entendemos por dato personal?

`[RITMO NORMAL]`

Gracias. `[PAUSA BREVE]` Para entender bien el problema que aborda este trabajo, primero necesitamos definir con precisión de qué estamos hablando.

`[PAUSA BREVE]`

`[RITMO PAUSADO · CONTACTO VISUAL]` Un dato personal es cualquier información concerniente a una persona física identificada o identificable. Una persona es identificable cuando su identidad puede determinarse, directa o indirectamente, a través de cualquier información.

`[PAUSA]`

`[RITMO NORMAL]` Esa definición viene del marco metodológico del INAI. Parece amplia, y lo es a propósito: un nombre es un dato personal, pero también lo es una dirección IP si permite identificar a alguien.

`[PAUSA BREVE]`

Ahora bien, PICIS no trabaja con un solo tipo de dato personal. Su taxonomía maneja 55 tipos organizados en 10 categorías. Les voy a mencionar las principales para que tengan un panorama.

`[PAUSA BREVE]`

`[RITMO ÁGIL]` Identificadores: RFC, CURP, teléfono. Electrónicos: email, contraseña. Laborales: email institucional, puesto. Tránsito: pasaporte, visa, placas. Patrimonio: sueldo, número de tarjeta. Salud: enfermedades, alergias. Académicos: título, cédula profesional. Ideológicos: religión, afiliación política. Intimidad: preferencia sexual. Rasgos físicos: ADN, peso, altura.

`[PAUSA]`

`[RITMO PAUSADO]` Fíjense que varias de estas categorías contienen lo que la ley llama datos personales sensibles. `[PAUSA BREVE]` Y esos son exactamente los más peligrosos si se publican sin querer.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Vamos a ver ahora qué dice la ley al respecto y por qué esto aplica directamente al IPN.

---

## SLIDE 04 — Datos sensibles, marco legal e IPN como sujeto obligado

`[RITMO NORMAL]`

Acabamos de ver la taxonomía. Ahora veamos qué son los datos sensibles desde el punto de vista legal y por qué esto nos toca directamente.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Los datos personales sensibles son aquellos relativos a los aspectos más íntimos de la persona. `[PAUSA BREVE]` Origen racial o étnico, estado de salud, información genética, creencias religiosas, opiniones políticas, preferencia sexual. Su mal uso puede provocar discriminación o un grave riesgo para el titular.

`[PAUSA]`

`[RITMO NORMAL]` En México, la protección de estos datos se estructura en dos leyes principales.

`[PAUSA BREVE]`

Para el sector privado existe la LFPDPPP, la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Regula cómo las empresas y organizaciones privadas deben tratar los datos.

`[PAUSA BREVE]`

Pero la que nos importa más directamente es la LGPDPPSO, la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados. `[PAUSA BREVE]` `[INTENSIFICAR · CONTACTO VISUAL]` Esta ley regula a más de 340 sujetos obligados en México. Y el Instituto Politécnico Nacional está entre ellos.

`[PAUSA]`

`[RITMO NORMAL]` Esto no es un dato menor. Significa que el IPN tiene la obligación legal de proteger los datos personales que trata, y PICIS es una herramienta que nació precisamente para ayudar a cumplir esa obligación: detectar cuándo se publican datos sensibles por error en los portales institucionales.

`[PAUSA BREVE]`

Con este marco claro, __________ les va a contar de dónde viene PICIS y cómo funciona hoy.

---

## SLIDE 08 — Objetivo general

`[RITMO NORMAL]`

Muy bien. Ya conocemos el contexto: qué es PICIS, qué problema resuelve y qué se pierde al migrar a la nube. `[PAUSA BREVE]` Ahora vamos a formalizar lo que nos propusimos hacer.

`[PAUSA]`

`[RITMO PAUSADO · CONTACTO VISUAL]` El objetivo general de este Trabajo Terminal es el siguiente. `[PAUSA BREVE]` Lo voy a citar textualmente del protocolo aprobado:

`[PAUSA]`

`[RITMO PAUSADO · INTENSIFICAR]` "Implementar un esquema preventivo unificado para ofrecer privacidad, confidencialidad e integridad de los datos sensibles de la versión en nube de PICIS, mediante la integración de controles técnicos en las funciones de Identificar y Proteger de acuerdo a los frameworks del NIST."

`[PAUSA LARGA]`

`[RITMO NORMAL]` Quiero desmenuzar esta declaración porque cada palabra fue elegida con cuidado.

`[PAUSA BREVE]`

Dice "esquema preventivo". Eso significa que nuestro trabajo no es reactivo; no estamos detectando incidentes después de que ocurren. Estamos diseñando controles que prevengan el problema antes de que suceda.

`[PAUSA BREVE]`

Dice "unificado". Los controles no están aislados; forman un sistema coherente donde cada pieza refuerza a las demás.

`[PAUSA BREVE]`

Dice "Identificar y Proteger". Son las dos funciones del NIST Cybersecurity Framework 2.0 en las que nos concentramos. La función Govern se ejerce a nivel institución; nosotros operamos a nivel de plataforma.

`[PAUSA]`

Con este objetivo general definido, veamos cómo lo desglosamos en compromisos concretos.

---

## SLIDE 09 — Objetivos particulares

`[RITMO NORMAL]`

Del objetivo general derivamos cuatro objetivos particulares. Los primeros tres se cierran en TT1 y el cuarto se demuestra en TT2.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` OP-1: Caracterización. `[RITMO NORMAL]` Caracterizar la brecha de seguridad entre la versión on-premise y la versión de nube de PICIS, con cada activo trazado a un control existente y un control objetivo.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` OP-2: Diseño de controles. `[RITMO NORMAL]` Establecer un conjunto coherente de controles técnicos en las funciones Identificar y Proteger del NIST CSF 2.0, de modo que cada subcategoría aplicable cuente con al menos un control asociado.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` OP-3: Trazabilidad normativa. `[RITMO NORMAL]` Garantizar la conformidad simultánea con la legislación mexicana y los marcos del NIST, de modo que cada artículo aplicable cuente con al menos un control técnico que lo instrumente.

`[PAUSA]`

`[RITMO PAUSADO]` Y OP-4: Validación operativa. `[PAUSA BREVE]` `[RITMO NORMAL]` Este queda para TT2. Consiste en demostrar el funcionamiento operativo mediante una matriz de pruebas con un caso por control, criterio numérico de aceptación y evidencia de ejecución.

`[PAUSA BREVE]`

`[CONTACTO VISUAL]` Noten que los tres primeros objetivos son de diseño y trazabilidad, y el cuarto es de ejecución. Ese es el corte natural entre TT1 y TT2: primero diseñamos el esquema completo, después lo implementamos y lo demostramos.

`[PAUSA]`

`[RITMO NORMAL]` Ahora, antes de diseñar nada, necesitábamos saber qué existe. __________ les va a presentar el estado del arte.

---

## SLIDE 11 — Cuatro marcos del NIST trabajando juntos

`[RITMO NORMAL]`

El esquema que diseñamos se apoya en cuatro marcos publicados por el NIST. No usamos uno solo; los integramos para que cada uno aporte lo que le corresponde.

`[PAUSA BREVE]`

El primero y más importante es el NIST Cybersecurity Framework 2.0. Es nuestro marco rector. De sus seis funciones, nos concentramos en Identificar y Proteger. La función Govern, que es nueva en la versión 2.0, se ejerce a nivel institución, no a nivel de nuestro esquema.

`[PAUSA BREVE]`

El segundo es el NIST Privacy Framework 1.0. Es el complemento centrado en los derechos del titular de los datos. Nos permitió articular el PIA y los principios de minimización con las funciones del CSF.

`[PAUSA BREVE]`

El tercero es el NIST SP 800-53 Revisión 5. De su catálogo institucional de controles derivamos y personalizamos los 22 controles del esquema preventivo. No los copiamos textualmente; los ajustamos a la realidad operativa de PICIS.

`[PAUSA BREVE]`

`[INTENSIFICAR]` Y el cuarto es el NIST SP 800-207, Zero Trust Architecture. `[RITMO PAUSADO]` Este es el que define el principio fundamental del esquema: cada solicitud se evalúa de forma independiente. No hay privilegios por origen ni por ubicación de red. Es la base del flujo de autorización que van a ver más adelante.

`[PAUSA]`

`[RITMO NORMAL · CONTACTO VISUAL]` Estos cuatro marcos no están superpuestos al azar. El CSF da la estructura, el Privacy Framework aporta la perspectiva de privacidad, el 800-53 provee los controles técnicos y el 800-207 define el modelo de confianza. Cada uno tiene un rol distinto y los cuatro trabajan juntos.

`[PAUSA]`

__________ les va a presentar ahora la legislación mexicana que complementa estos marcos.

---

## SLIDE 15 — Metodología: cinco etapas

`[RITMO NORMAL]`

Pasemos a la metodología. `[PAUSA BREVE]` El trabajo se organiza en cinco etapas. Las primeras cuatro cierran en TT1 y la quinta corresponde a TT2.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Etapa uno: Caracterización de la brecha. `[RITMO NORMAL]` Aquí comparamos los activos de la versión on-premise con la versión en nube. Para cada activo, documentamos el control existente y el control objetivo. Esto alimenta directamente al OP-1.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Etapa dos: Análisis normativo. `[RITMO NORMAL]` Construimos un mapeo bidireccional entre los artículos de las tres leyes aplicables y los controles del esquema. De artículo a control y de control a artículo. Esto responde al OP-3.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Etapa tres: Diseño de controles. `[RITMO NORMAL]` Diseñamos 22 controles técnicos instrumentados sobre Google Cloud Platform, agrupados en tres familias: confidencialidad, integridad y privacidad. Cubren las funciones Identificar y Proteger del CSF 2.0. Esto es el OP-2.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Etapa cuatro: Análisis de impacto a la privacidad. `[RITMO NORMAL]` El PIA del módulo de clasificación NLP/IA en siete bloques, con decisión residual documentada. Complementa al OP-2 y al OP-3.

`[PAUSA]`

`[RITMO PAUSADO]` Etapa cinco: Despliegue y pruebas. `[PAUSA BREVE]` `[RITMO NORMAL]` Esta es TT2. Aprovisionamiento declarativo del entorno, ejecución de la matriz de pruebas con un caso por control y evidencia operativa. Aquí se cierra el OP-4.

`[PAUSA]`

`[CONTACTO VISUAL]` Lo que quiero que noten es que las etapas no son independientes entre sí. La brecha de la etapa uno alimenta los requisitos, los requisitos alimentan el diseño de controles de la etapa tres, y el mapeo normativo de la etapa dos verifica que ningún artículo quede sin cobertura. Cada etapa produce un entregable que la siguiente consume.

`[PAUSA]`

Ahora veamos cómo se ve esa brecha en concreto. __________ se los va a mostrar.

---

## SLIDE 18 — Arquitectura C4 nivel 1: diagrama de contexto

`[RITMO NORMAL]`

Entramos al diseño de la arquitectura. `[PAUSA BREVE]` Lo que van a ver ahora es el diagrama de contexto C4 nivel 1 de PICIS sobre Google Cloud Platform.

`[PAUSA BREVE]`

Este diagrama responde a la pregunta: ¿quiénes interactúan con PICIS y qué hay a su alrededor?

`[PAUSA BREVE]`

A la izquierda tenemos dos grupos de actores humanos. `[PAUSA BREVE]` El primero es el grupo técnico del IPN, con dos roles: el Administrador, que instala, configura y mantiene el sistema, gestiona respaldos y bitácoras; y el Coordinador, que da de alta clientes, servicios contratados y asigna paquetes.

`[PAUSA BREVE]`

El segundo grupo es el operativo, del lado del cliente. Tres roles: el Supervisor, que da de alta los sitios web a analizar y configura los ciclos de ingesta; el Analista, que valida los hallazgos del clasificador y emite reportes; y el Responsable, que tiene una vista ejecutiva con datos agregados y enmascarados.

`[PAUSA BREVE]`

`[RITMO PAUSADO · CONTACTO VISUAL]` Cinco roles en total. No más. Administrador, Coordinador, Supervisor, Analista y Responsable.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Al centro está PICIS bajo Zero Trust en GCP. El sistema tiene seis componentes principales: scraping autorizado, separador de metadatos, segmentador, filtrado, el clasificador NLP/IA propio del CIC-IPN, y el reporteador. Además, los tres componentes del patrón Zero Trust del NIST: Policy Engine, Policy Administrator y Policy Enforcement Point.

`[PAUSA BREVE]`

A la derecha, dos servicios gestionados de GCP: Cloud Identity, que federa las identidades con MFA, y Sensitive Data Protection, que actúa como insumo opcional de preclasificación de PII. Y debajo, el sistema externo: los portales institucionales, que son la fuente sobre la cual PICIS realiza el scraping autorizado.

`[PAUSA]`

`[CONTACTO VISUAL]` El flujo se lee así: los grupos técnico y operativo interactúan con PICIS; PICIS se apoya en Cloud Identity y en SDP; y PICIS realiza scraping autorizado sobre los portales institucionales.

`[PAUSA]`

__________ les va a mostrar ahora qué hay adentro de PICIS: los cinco planos de contenedores.

---

## SLIDE 22 — Catálogo de 22 controles en tres familias

`[RITMO NORMAL]`

Llegamos al catálogo. `[PAUSA BREVE]` Este es el entregable central del OP-2: 22 controles técnicos agrupados en tres familias.

`[PAUSA]`

`[RITMO PAUSADO]` Primera familia: Confidencialidad. Ocho controles, del C-001 al C-008.

`[RITMO NORMAL]` Les menciono los más representativos. C-001: cifrado en reposo con claves gestionadas por el cliente, CMEK. C-002: cifrado en tránsito con TLS 1.3. C-003: MFA e identidades federadas, sin claves estáticas. C-004: acceso contextual verificado por Identity-Aware Proxy. Y C-006: perímetro lógico con VPC Service Controls.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Segunda familia: Integridad. Siete controles, del I-001 al I-007.

`[RITMO NORMAL]` I-001: inventario automático de activos. I-002: firmas SHA-256 sobre los snapshots para garantizar que no se alteren. I-003: logs inmutables en Bucket Lock con política WORM. Y I-006: firma criptográfica de las imágenes de contenedores antes de desplegarlas en GKE.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Tercera familia: Privacidad. Siete controles, del P-001 al P-007.

`[RITMO NORMAL]` P-001: clasificación de PII con Sensitive Data Protection como insumo. P-002: minimización por finalidad, es decir, solo se procesan los datos estrictamente necesarios. P-003: enmascaramiento dinámico en BigQuery según el rol del usuario. Y P-006 y P-007: mecanismos de consentimiento y análisis de impacto a la privacidad.

`[PAUSA]`

`[CONTACTO VISUAL · INTENSIFICAR]` Quiero destacar tres cosas sobre este catálogo. `[PAUSA BREVE]`

`[RITMO NORMAL]` Primero: cada control tiene un criterio de aceptación medible, no es una declaración de intención. `[PAUSA BREVE]`

Segundo: cada control está mapeado a una subcategoría del NIST CSF 2.0 y a al menos un artículo de la legislación mexicana. Eso es la trazabilidad bidireccional del OP-3. `[PAUSA BREVE]`

Y tercero: la distribución no es casual. Ocho de confidencialidad, siete de integridad, siete de privacidad. El balance refleja que nuestro esquema no privilegia un pilar sobre otro; los tres son necesarios para una protección efectiva.

`[PAUSA]`

__________ les va a presentar ahora el PIA del clasificador.

---

## SLIDE 25 — Trabajo a futuro: TT2

`[RITMO NORMAL]`

Para cerrar, lo que sigue en TT2.

`[PAUSA BREVE]`

TT1 entregó el diseño completo del esquema: brecha, controles, mapeo normativo y PIA. `[PAUSA BREVE]` `[INTENSIFICAR]` TT2 lo lleva a la realidad.

`[PAUSA]`

`[RITMO NORMAL]` Son tres entregables principales.

`[PAUSA BREVE]`

Primero: aprovisionamiento declarativo del proyecto productivo en Google Cloud Platform. Esto significa que todo el entorno se va a levantar con scripts reproducibles. No instalaciones manuales. Cualquier persona del equipo, o un tercero, puede ejecutar esos scripts y obtener exactamente el mismo entorno.

`[PAUSA BREVE]`

Segundo: la matriz de pruebas. Un caso por cada uno de los 22 controles, con criterio numérico de aceptación y evidencia de ejecución. Esto es lo que cierra el OP-4.

`[PAUSA BREVE]`

Y tercero: la auditoría inversa. Verificar que cada artículo legal aplicable es satisfecho por al menos un control con evidencia material. Es la validación final de la trazabilidad que construimos en TT1.

`[PAUSA]`

`[CONTACTO VISUAL · RITMO PAUSADO]` En resumen: TT1 diseña, TT2 demuestra. Lo que entregamos hoy es un esquema completo, trazable y fundamentado. Lo que sigue es probar que funciona.

`[PAUSA]`

Con esto, __________ cierra la presentación.

---

## SLIDE 26 — Gracias (cierre conjunto)

`[RITMO PAUSADO · CONTACTO VISUAL]`

Muchas gracias por su atención. Estamos a su disposición para las preguntas que gusten.

---

## Notas generales para el Expositor C

1. **Tu fuerza es la estructura.** Cada vez que hablas, el público debe sentir que hay un orden claro: "hay tres familias", "son cinco etapas", "cuatro marcos". Esa organización le da al público anclas para seguirte. No la sacrifiques por sonar casual.

2. **Cuando cites definiciones legales o del protocolo, usa un ritmo más lento.** No necesitas memorizar las citas literales palabra por palabra, pero sí debes dar la sensación de precisión. Si te equivocas en un artículo, corrígete sin drama: "perdón, artículo 22, no 23".

3. **En el slide 08 (objetivo general), la cita textual es tu momento de autoridad.** Antes de decirla, anuncia que es textual. Eso le da peso. Después, desmenuza cada parte. Eso demuestra que no solo la memorizaste, sino que la entiendes a profundidad.

4. **En el slide 22 (catálogo), no intentes mencionar los 22 controles.** Menciona los más representativos de cada familia y refuerza los tres puntos: criterio medible, trazabilidad y balance. El público no va a recordar C-004 vs C-006, pero sí va a recordar "cada control tiene criterio de aceptación medible".

5. **Los slides 03 y 04 son tu arranque.** Es la primera vez que hablas después de la portada. Proyecta seguridad desde la primera frase. No empieces con "bueno, pues..." — empieza con "Para entender bien el problema..." Eso comunica dominio.

6. **El slide 18 (C4 nivel 1) tiene muchos componentes.** Agrúpalos narrativamente: "a la izquierda... al centro... a la derecha". El público necesita una geografía visual para no perderse. Si puedes, señala el diagrama con la mano.

7. **En las transiciones, no digas "le paso la palabra a mi compañero".** Di algo como "__________ les va a mostrar ahora..." o "Con este marco claro, __________ les va a contar...". Eso mantiene la narrativa continua en lugar de fragmentarla.

8. **Si un sinodal te pregunta algo normativo**, responde con la referencia precisa: "eso lo abordamos en el artículo tal, mapeado al control tal, y está documentado en el Anexo E". Esa capacidad de respuesta inmediata comunica dominio total del material.
