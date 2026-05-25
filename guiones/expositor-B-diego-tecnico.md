# Guion · Expositor B — Técnico / Preciso

> **Perfil:** Se enfoca en lo técnico. Habla con precisión sobre la
> transición a nube, el problema, la métrica, las herramientas, la
> arquitectura y el cierre técnico.
>
> **Slides asignados:** 6, 7, 13, 14, 17, 19, 21, 24, 26 (cierre conjunto)
>
> **Duración estimada:** 16–18 minutos

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

## SLIDE 06 — De PICIS v1 a v2: seguridad desde el diseño

`[RITMO NORMAL]`

Gracias. `[PAUSA BREVE]` Como ya nos explicó __________, PICIS opera hoy en infraestructura local. Pero eso está cambiando.

`[PAUSA BREVE]`

El Centro de Investigación en Computación del IPN está migrando PICIS a la nube en una nueva versión, la versión 2, que se construye bajo el paradigma de seguridad y privacidad desde el diseño. `[PAUSA BREVE]` Esta migración es exactamente el escenario en el que vive nuestro Trabajo Terminal.

`[PAUSA]`

`[RITMO PAUSADO]` Veamos qué cambia concretamente.

`[PAUSA BREVE]`

`[RITMO NORMAL]` En la versión 1, on-premise: servidores propios del laboratorio, perímetro de red físico, identidades con claves estáticas, y auditoría local en disco.

`[PAUSA BREVE]`

En la versión 2, en la nube sobre Google Cloud Platform: infraestructura gestionada, perímetro lógico basado en Zero Trust, federación de identidades sin claves estáticas, y auditoría inmutable con política WORM.

`[PAUSA]`

`[CONTACTO VISUAL]` Noten que no es solo un cambio de dónde viven los servidores. `[INTENSIFICAR]` Es un cambio en el modelo de confianza completo. Todo lo que antes se asumía porque estabas dentro de la red del laboratorio, ahora tiene que verificarse de forma explícita.

`[PAUSA]`

Y precisamente por eso surge el problema que les voy a presentar ahora.

---

## SLIDE 07 — Problemática: tres garantías disueltas

`[RITMO NORMAL]`

La versión on-premise de PICIS opera detrás de un perímetro de red físico. Eso significa que hay ciertas propiedades de seguridad que se daban por hechas, simplemente por estar dentro de esa red.

`[PAUSA BREVE]`

`[INTENSIFICAR · RITMO PAUSADO]` Al pasar a Google Cloud Platform, tres de esas propiedades dejan de cumplirse.

`[PAUSA]`

`[RITMO NORMAL]` Problema uno: el perímetro lógico se disuelve. La red corporativa ya no protege los recursos. Cada solicitud tiene que verificarse por sí misma con políticas contextuales. No hay confianza implícita por el origen de la conexión.

`[PAUSA BREVE]`

Problema dos: las identidades con claves estáticas. En la versión local, los microservicios usaban credenciales persistentes de larga duración, almacenadas en archivos de configuración. `[INTENSIFICAR]` Eso es un vector permanente de filtración e impersonación. Si alguien obtiene ese archivo, tiene acceso indefinido.

`[PAUSA BREVE]`

Problema tres: la conformidad legal se reconfigura. La reforma constitucional mexicana de 2025 extiende las obligaciones de protección de datos personales explícitamente al cómputo en la nube. Ya no basta con proteger el centro de datos; la ley ahora abarca la infraestructura en nube.

`[PAUSA]`

`[CONTACTO VISUAL · RITMO PAUSADO]` Nuestro trabajo terminal aborda estos tres problemas de manera integrada. No resolvemos solo uno; `[INTENSIFICAR]` diseñamos un esquema que cubre los tres simultáneamente.

`[PAUSA]`

__________ les va a presentar ahora el objetivo general y los compromisos concretos del trabajo.

---

## SLIDE 13 — Métrica de evaluación: F-beta con beta igual a 2

`[RITMO NORMAL]`

Ahora vamos con algo muy específico: la métrica de evaluación que adoptamos para el clasificador NLP/IA.

`[PAUSA BREVE]`

Usamos F-beta con beta igual a 2. `[PAUSA BREVE]` Esto viene de Microsoft Presidio y Purview, que son la referencia en el campo de clasificación de información personal.

`[PAUSA BREVE]`

`[RITMO PAUSADO · CONTACTO VISUAL]` ¿Qué significa en la práctica? Que le damos el doble de importancia a la exhaustividad, al recall, que a la precisión.

`[PAUSA]`

`[RITMO NORMAL]` La lógica es directa: en un contexto de privacidad, un falso negativo cuesta mucho más que un falso positivo. `[PAUSA BREVE]` Si el clasificador dice "este documento no tiene datos sensibles" y sí los tiene, ese error puede terminar en una exposición pública de información personal. `[PAUSA BREVE]` En cambio, si dice "este documento sí los tiene" y resulta que no, lo peor que pasa es que un Analista revisa un documento de más.

`[PAUSA BREVE]`

La fórmula es: F-beta igual a uno más beta cuadrada, multiplicado por precisión por recall, dividido entre beta cuadrada por precisión más recall. Con beta igual a 2, la ponderación favorece el recall.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Esta métrica se usará en TT2 como criterio de aceptación del requisito no funcional 10. Queda definida desde ahora para que las pruebas tengan un estándar claro contra el cual medirse.

`[PAUSA]`

Ahora les voy a mostrar por qué elegimos Google Cloud Platform y no otra plataforma.

---

## SLIDE 14 — Herramientas tecnológicas: por qué GCP

`[RITMO NORMAL]`

La elección de la plataforma en nube no fue arbitraria. Hicimos una comparativa técnica contra los tres principales proveedores: AWS, Azure y Google Cloud Platform.

`[PAUSA BREVE]`

Usamos cinco criterios derivados directamente de los objetivos particulares y los requisitos no funcionales del trabajo. Veamos cada uno.

`[PAUSA BREVE]`

`[RITMO ÁGIL]` Primero, Zero Trust nativo con proxy de identidad. AWS tiene Verified Access, Azure tiene Entra Private Access. `[INTENSIFICAR]` GCP tiene Identity-Aware Proxy combinado con Access Context Manager. Es la solución más madura e integrada para verificar identidad en cada solicitud.

`[PAUSA BREVE]`

Segundo, federación sin claves estáticas para workloads. AWS tiene IAM Roles Anywhere, que es parcial. Azure tiene Managed Identities, también parcial. `[INTENSIFICAR]` GCP tiene Workload Identity Federation, basada en el estándar RFC 8693. Elimina por completo las credenciales persistentes.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Tercero, cifrado con claves gestionadas por el cliente y HSM. Los tres proveedores tienen soluciones equivalentes, pero Cloud KMS de GCP ofrece rotación nativa integrada.

`[PAUSA BREVE]`

Cuarto, clasificación NLP de información personal de forma nativa. Macie de AWS está limitado a S3. Purview de Azure funciona como catálogo. Sensitive Data Protection de GCP se integra directamente con DLP y funciona como insumo de nuestro clasificador.

`[PAUSA BREVE]`

Quinto, almacenamiento inmutable WORM. S3 Object Lock, Azure Blob immutable storage, Cloud Storage Bucket Lock. Los tres cumplen, pero Bucket Lock se integra de forma nativa con Cloud Audit Logs.

`[PAUSA]`

`[CONTACTO VISUAL · RITMO PAUSADO]` La conclusión de la comparativa: para una carga de trabajo NLP institucional bajo Zero Trust, Google Cloud Platform ofrece la mejor integración de los cinco criterios.

`[PAUSA]`

Ahora __________ les va a presentar la metodología que seguimos.

---

## SLIDE 17 — Requisitos: 12 funcionales y 10 no funcionales

`[RITMO NORMAL]`

De la brecha que acaban de ver, derivamos los requisitos del esquema. Son 12 funcionales y 10 no funcionales, y todos tienen una característica en común: `[INTENSIFICAR]` criterio de aceptación medible.

`[PAUSA BREVE]`

`[RITMO NORMAL]` No son requisitos vagos del tipo "el sistema debe ser seguro". Cada uno tiene una condición verificable y trazabilidad explícita al objetivo particular y al control del catálogo que lo materializa.

`[PAUSA BREVE]`

Les menciono los más representativos. En funcionales: RF-02, clasificar información personal en cuatro niveles, del N1 al N4. RF-04, acceso Zero Trust verificado por contexto. RF-05 y 06, cifrado en reposo y en tránsito con claves gestionadas por el cliente. RF-07, logs inmutables en bucket con política WORM. Y RF-12, trazabilidad de las decisiones del clasificador de IA.

`[PAUSA BREVE]`

En no funcionales: RNF-01, cumplimiento de la legislación mexicana. RNF-02, alineación con NIST CSF 2.0. RNF-08, aprovisionamiento declarativo y reproducible. RNF-09, reducción verificable de la superficie de ataque. Y RNF-10, verificabilidad de pruebas, donde cada caso debe ser reproducible y acompañado de evidencia de ejecución.

`[PAUSA]`

`[CONTACTO VISUAL]` Fíjense que los no funcionales no son de segunda categoría. El RNF-08, por ejemplo, exige que todo el entorno se pueda levantar con scripts reproducibles. Y el RNF-10 define que en TT2, las pruebas no van a ser capturas de pantalla: van a ser evidencia de ejecución verificable.

`[PAUSA]`

Con los requisitos claros, pasamos al diseño. __________ les va a mostrar el diagrama de contexto.

---

## SLIDE 19 — Contenedores: cinco planos lógicos sobre GCP

`[RITMO NORMAL]`

Bajemos un nivel en la arquitectura. `[PAUSA BREVE]` Lo que van a ver ahora son los cinco planos lógicos en los que organizamos todos los componentes de PICIS sobre Google Cloud Platform.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Veamos de arriba hacia abajo.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Plano uno, el de ingreso. Aquí viven tres componentes: Cloud Load Balancing, que termina el TLS 1.3; Identity-Aware Proxy, que verifica la identidad en cada solicitud; y Access Context Manager, que evalúa la postura del dispositivo, la red y el horario.

`[PAUSA BREVE]`

Una vez que IAP valida, firma un token JWT y lo pasa al siguiente plano.

`[PAUSA BREVE]`

Plano dos, el de aplicación. Corre en un clúster GKE privado con Workload Identity. Aquí están los tres microservicios principales: el scraper, que hace la ingesta autorizada; el clasificador NLP/IA, que es el núcleo del sistema con la taxonomía de 55 tipos; y el reportador, que compone el JSON final con la referencia archivo, página, párrafo. También aquí se conecta Sensitive Data Protection como insumo opcional de preclasificación.

`[PAUSA BREVE]`

Los pods del clúster se autentican mediante Workload Identity Federation con tokens de vida máxima de una hora. Eso nos lleva al plano tres.

`[PAUSA BREVE]`

Plano tres, el de datos. Está encapsulado en un perímetro de VPC Service Controls. Los dos almacenes principales son BigQuery, con datasets cifrados con CMEK y data masking por columna, y Cloud Storage, para los documentos descargados y artefactos cifrados.

`[PAUSA]`

`[RITMO NORMAL]` Debajo de todo eso hay dos planos transversales que sostienen a los demás.

`[PAUSA BREVE]`

Plano cuatro, el de control: Cloud Identity como proveedor de identidades federado con MFA, Cloud IAM para roles y conditions, Cloud KMS para las CMEK y keyrings, Secret Manager para tokens y modelos, Cloud Audit Logs en Bucket Lock WORM, y VPC Service Controls como perímetro lógico.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Y plano cinco, la cadena de suministro de software: las imágenes de los contenedores se firman con Cosign, se almacenan en Artifact Registry con versionamiento, y Binary Authorization exige atestación antes de que cualquier imagen se despliegue en el clúster.

`[PAUSA]`

`[CONTACTO VISUAL · INTENSIFICAR]` Noten que ningún componente funciona aislado. Cada plano depende del siguiente, y todos convergen en los planos de control y cadena de software. `[PAUSA BREVE]` Eso es lo que hace que el esquema sea coherente y no una colección de herramientas sueltas.

`[PAUSA]`

Ahora __________ les va a explicar cómo fluye una petición completa a través de estos planos.

---

## SLIDE 21 — Clasificador NLP/IA: C4 nivel 3

`[RITMO NORMAL]`

Bajamos un nivel más. Ahora estamos adentro del microservicio clasificador NLP/IA, que es el componente más sensible de todo el esquema porque es el que toca los datos personales directamente.

`[PAUSA BREVE]`

El clasificador corre en GKE privado con Workload Identity y tiene cinco componentes encadenados en un pipeline.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Paso uno: el separador de metadatos recibe el documento recolectado por el scraper, que puede ser PDF, Office o imagen, y aísla los metadatos del archivo del contenido útil.

`[PAUSA BREVE]`

Paso dos: el segmentador divide el contenido por secciones y párrafos.

Paso tres: el filtrado elimina duplicados e irrelevantes.

`[PAUSA BREVE]`

`[RITMO PAUSADO · INTENSIFICAR]` Paso cuatro, el núcleo: el clasificador NLP/IA. Vectoriza cada segmento y aplica la taxonomía propia de PICIS de 55 tipos de información sensible.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Paso cinco: el reporteador compone el JSON final con la referencia exacta de archivo, página y párrafo.

`[PAUSA]`

`[RITMO NORMAL]` Ahora, alrededor de este pipeline hay tres grupos de servicios que lo soportan.

`[PAUSA BREVE]`

Primero, almacenamiento: Cloud Storage para documentos y derivados cifrados con CMEK, y BigQuery para los hallazgos con data masking por columna.

`[PAUSA BREVE]`

Segundo, el diálogo NLP: en el paso cuatro, el clasificador consulta a Sensitive Data Protection como insumo de preclasificación. `[INTENSIFICAR · CONTACTO VISUAL]` Y quiero ser claro en esto: SDP es un insumo, no el veredicto. La decisión final no es de SDP. La taxonomía de PICIS es propia.

`[PAUSA BREVE]`

Tercero, control y auditoría: Cloud Logging registra cada etapa del pipeline, Secret Manager inyecta las credenciales de modelos y tokens, y Cloud KMS provee las CMEK.

`[PAUSA]`

`[RITMO PAUSADO · CONTACTO VISUAL]` Para cerrar este slide quiero subrayar un punto de diseño que tiene implicaciones legales. `[PAUSA BREVE]` El artículo 22 de la LGPDPPSO exige que las decisiones automatizadas que afectan al titular sean explicables y tengan validación humana. `[PAUSA BREVE]` En nuestro diseño, la decisión final no es automática: el Analista valida los hallazgos antes de que se persistan como incidentes confirmados. Y toda esa trazabilidad, archivo por archivo, página por página, párrafo por párrafo, queda registrada en Cloud Logging.

`[PAUSA]`

Ahora __________ les va a presentar el catálogo completo de controles.

---

## SLIDE 24 — Conclusiones: avance de los tres OP concluidos en TT1

`[RITMO NORMAL]`

Bien, vamos a los resultados.

`[PAUSA BREVE]`

`[RITMO PAUSADO · CONTACTO VISUAL]` De los cuatro objetivos particulares, tres se cumplieron completamente en TT1.

`[PAUSA]`

`[RITMO NORMAL]` OP-1, caracterización de la brecha: cumplido. Cada activo de PICIS quedó trazado a un control existente en la versión on-premise y a un control objetivo diseñado para la nube. La matriz completa está en el Anexo I.

`[PAUSA BREVE]`

OP-2, diseño de controles: cumplido. Se diseñaron 22 controles técnicos, agrupados en tres familias: confidencialidad, integridad y privacidad. Todos están mapeados a las subcategorías aplicables del NIST CSF 2.0. No dejamos subcategorías sin cubrir.

`[PAUSA BREVE]`

OP-3, trazabilidad normativa: cumplido. Se construyó un mapeo bidireccional artículo a control sobre tres cuerpos legales: LFPDPPP, su Reglamento y la LGPDPPSO. El mapeo inverso, de artículo a control, está documentado en el Anexo E.

`[PAUSA BREVE]`

Además, se entregó el PIA en siete bloques para el módulo de clasificación NLP/IA, con decisión residual documentada.

`[PAUSA]`

`[INTENSIFICAR · CONTACTO VISUAL]` El resultado más significativo de TT1, a nivel de contribución, es el mapeo bidireccional artículo a control. `[PAUSA BREVE]` `[RITMO NORMAL]` Esto significa que dado cualquier control del catálogo, puedes trazar qué artículo legal lo exige. Y al revés: dado cualquier artículo de la legislación mexicana aplicable, puedes identificar qué control del esquema lo satisface. Eso es trazabilidad completa en ambas direcciones.

`[PAUSA]`

__________ les va a presentar lo que queda para TT2.

---

## SLIDE 26 — Gracias (cierre conjunto)

`[RITMO PAUSADO · CONTACTO VISUAL]`

Muchas gracias. Estamos listos para sus preguntas.

---

## Notas generales para el Expositor B

1. **Tu fuerza es la precisión.** No adornes. Cuando dices "tokens de vida máxima de una hora", el público debe sentir que tú sabes exactamente cómo funciona eso. La autoridad técnica se comunica con exactitud, no con volumen.

2. **En las comparativas (slide 14), sé justo con las alternativas.** No desprecies a AWS ni a Azure. Reconoce lo que tienen y luego explica por qué GCP gana en el contexto específico de PICIS. Eso demuestra criterio, no sesgo.

3. **El slide 19 (contenedores) es denso.** El truco está en seguir el flujo de arriba hacia abajo, plano por plano. No saltes entre planos. El público necesita construir la imagen mental en orden. Señala el diagrama con la mano mientras hablas.

4. **En el slide 21 (clasificador), el punto legal del art. 22 es tu remate.** Es donde la arquitectura técnica se encuentra con la obligación legal. No lo menciones de pasada; dale peso. Es el momento donde demuestras que el diseño técnico responde a una exigencia jurídica concreta.

5. **En las conclusiones (slide 24), no leas una lista.** Dilo como un resumen ejecutivo. "Nos propusimos tres cosas y las tres están cumplidas." Después entra en el detalle. Eso le da estructura a tu cierre.

6. **Controla la velocidad en las enumeraciones.** Es tentador apurarse cuando estás listando servicios de GCP o requisitos. No lo hagas. Si pierdes al público en una enumeración técnica, no te los recuperas. Mejor di menos y que se entienda todo.

7. **Si un sinodal te pregunta algo técnico durante tus slides**, es tu oportunidad de brillar. Responde con precisión y brevedad. Si no sabes algo, di "eso lo documentamos en el Anexo X" o "eso es parte de lo que vamos a demostrar en TT2". Nunca inventes.
