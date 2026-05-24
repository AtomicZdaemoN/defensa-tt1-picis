# Cómo leer los cuatro diagramas C4 en la presentación

Este documento explica cómo presentar cada uno de los cuatro
diagramas de arquitectura (slides 18, 19, 20 y 21) y cómo
responder a las preguntas más probables del jurado. Lo redacté
para que cualquier integrante del equipo pueda llegar al ensayo
sabiendo qué va a decir frente a cada diagrama.

## Convenciones visuales unificadas

Cada diagrama usa el mismo lenguaje gráfico — el de Sentinel,
nuestro sistema visual:

| Forma | Qué representa | Borde |
|---|---|---|
| **Rectángulo redondeado, fondo gris** | Actor humano o grupo de roles | Sólido navy |
| **Rectángulo blanco, borde grueso** | Sistema central (PICIS) | Sólido navy 900 |
| **Rectángulo blanco, borde discontinuo fino** | Componente lógico interno | Punteado navy |
| **Hexágono** | Servicio gestionado de GCP (Cloud Identity, KMS, IAP, etc.) | Sólido navy |
| **Cilindro** | Almacenamiento (BigQuery, Cloud Storage, Cloud Logging) | Sólido navy |
| **Cilindro con borde punteado** | Sistema externo a PICIS (Portales institucionales) | Punteado gris |
| **Cualquier elemento con borde ámbar** | Componente crítico o núcleo del esquema | Sólido ámbar |
| **Plano lógico** (línea punteada que envuelve un grupo) | Capa funcional del sistema | Discontinuo |

**Reglas de lectura**:

- Las flechas se leen siempre **izquierda → derecha** o **arriba ↓ abajo**.
- Toda etiqueta sobre una arista describe la **acción**: *federa*, *configura*, *opera*, *scrapea*, *firma token*.
- El **acento ámbar** marca el elemento que más se nombra en la narrativa: en C1 es el sistema PICIS; en C3 es el clasificador NLP/IA; en el flujo Zero Trust es el IAP (entrada) y el Audit Logs (cierre).
- Cada diagrama es **clickeable** en el deck — al hacer click o presionar `Z` se abre en grande sobre el viewport para detallar.

---

## Slide 18 · Diagrama de contexto (C4 nivel 1)

**Pregunta que responde:** ¿Qué es PICIS, quién lo usa y con qué otros sistemas se relaciona?

### Cómo presentarlo (≈ 75 segundos)

1. **Centro primero** — "Este es el sistema PICIS, ya migrado a GCP bajo Zero Trust". Mencionar los nueve componentes internos en una sola frase: *"scraping, separador, segmentador, filtrado, clasificador NLP/IA, reporteador y los tres componentes del modelo Zero Trust de NIST: Policy Engine, Policy Administrator y Policy Enforcement Point."*
2. **Izquierda** — "Lo usan dos grupos de roles: el equipo técnico del IPN (Administrador, Coordinador) lo configura y mantiene; el equipo operativo del cliente (Supervisor, Analista, Responsable) lo opera y valida."
3. **Derecha arriba** — "Consume dos servicios gestionados de GCP: Cloud Identity para federar identidades con MFA, y Sensitive Data Protection como insumo opcional de preclasificación."
4. **Derecha abajo** — "Y opera sobre los portales institucionales del cliente, **siempre del dominio base autorizado** — no es un crawler de internet abierto."
5. **Cierre** — "Esto es el contexto. En la siguiente slide entramos a la arquitectura interna."

### Preguntas probables y cómo responderlas

> *¿Qué pasa si un usuario del Grupo operativo pierde sus credenciales?*

Lo resuelve Cloud Identity con MFA y rotación, que no aparece como flujo en C1 porque vive en el plano de control del C2 (slide 19). Si quieren, puedo profundizar en el diagrama C2.

> *¿Por qué PE, PA y PEP están adentro de PICIS y no como servicios GCP?*

Porque son componentes lógicos del modelo Zero Trust del NIST SP 800-207 implementados por nosotros — no son productos de GCP. GCP nos da las piezas (IAP, Access Context Manager, IAM Conditions) y nosotros las orquestamos como PE, PA y PEP del marco NIST.

> *¿Por qué Sensitive Data Protection aparece como sistema externo si es un servicio GCP?*

Lo dibujamos como servicio gestionado (hexágono) pero está fuera del recuadro del sistema PICIS porque su uso es **opcional como insumo de preclasificación** — la decisión final sigue siendo del clasificador NLP/IA propio del CIC-IPN.

---

## Slide 19 · Diagrama de contenedores (C4 nivel 2)

**Pregunta que responde:** ¿De qué piezas está hecho PICIS por dentro?

### Cómo presentarlo (≈ 90 segundos)

El diagrama está organizado en **cinco planos lógicos** apilados verticalmente. Se leen de arriba hacia abajo siguiendo las flechas:

1. **Plano de ingreso** — "Toda solicitud entra por Cloud Load Balancing, pasa por Identity-Aware Proxy para verificación de identidad, y se evalúa contra el Access Context Manager por postura del dispositivo, red y horario."
2. **▼ token JWT firmado por IAP** — esa flecha indica que solo después de la autenticación entra al plano siguiente.
3. **Plano de aplicación** — "Aquí vive PICIS propiamente: corre en GKE privado con Workload Identity. Son cuatro microservicios: scraper, **clasificador NLP/IA (el núcleo)**, reportador, y Sensitive Data Protection como insumo opcional."
4. **▼ Workload Identity Federation · token ≤ 1 h** — la transición al plano de datos se hace con un token corto-vivo, no con claves estáticas.
5. **Plano de datos** — "Detrás de un perímetro VPC Service Controls: BigQuery para los hallazgos y Cloud Storage para los documentos."
6. **Plano de control** — "Transversal a los anteriores. Sostiene identidad (Cloud Identity, Cloud IAM), criptografía (Cloud KMS, Secret Manager), auditoría (Cloud Audit Logs con Bucket Lock WORM) y perímetro (VPC SC)."
7. **Cadena de software** — "Garantiza que solo imágenes firmadas con Cosign y atestadas por Binary Authorization lleguen a producción."

### Preguntas probables y cómo responderlas

> *¿Cómo se cifran los datos en BigQuery y Cloud Storage?*

Cloud KMS provee CMEK (Customer-Managed Encryption Keys) — son cuatro keyrings separados por entorno (dev, staging, prod, audit) y por criticidad de dato. Eso aparece en el plano de control.

> *¿Por qué Sensitive Data Protection está en el plano de aplicación si es un servicio GCP?*

Porque dialoga directamente con el clasificador NLP/IA — no es un servicio que se consuma desde el plano de datos. La preclasificación pasa por SDP **antes** de que el clasificador propio asigne la categoría final.

> *¿Qué pasa si Binary Authorization rechaza una imagen?*

El deploy se aborta. No hay forma de poner código sin firma de Cosign en producción. Esa es la garantía de cadena de suministro del esquema (control I-006 del catálogo).

---

## Slide 20 · Flujo de autorización Zero Trust en 11 pasos

**Pregunta que responde:** ¿Qué pasa exactamente cuando un usuario hace una petición?

### Cómo presentarlo (≈ 110 segundos — es el hero)

Es el diagrama más detallado. Se lee como una secuencia numerada cruzando cuatro planos: **ingreso**, **aplicación**, **datos**, **auditoría**. Los planos están etiquetados a la izquierda.

1. **Punto de partida** — "El navegador del usuario, con sesión federada con MFA cumplida, envía `GET /dashboard` por HTTPS TLS 1.3."
2. **Pasos 1–5 (ingreso · Zero Trust)** — "Cloud Load Balancing termina TLS. IAP valida la cookie de sesión. Cloud Identity devuelve los claims del usuario. Access Context Manager evalúa nivel de acceso por red/dispositivo/horario. IAM Conditions verifica rol mínimo y pertenencia al grupo correcto."
3. **El recuadro rojo de denegación** — "Si en cualquier paso 2–5 algo falla (MFA inválida, contexto fuera de política), IAP responde HTTP 403 al navegador y el flujo no llega siquiera al backend. Esto es el principio *deny-by-default* del NIST SP 800-207."
4. **Paso 6 (aplicación)** — "Si todo pasa, IAP firma una cabecera JWT y la pasa al pod del Backend en GKE privado, que aplica autorización fina al nivel de aplicación."
5. **Pasos 7–10 (datos)** — "El backend solicita un token corto a Workload Identity Federation (≤ 1 h, sin claves estáticas). VPC Service Controls verifica el perímetro. BigQuery responde con vista + máscara por nivel de PII. Cloud KMS desenvuelve la DEK con CMEK únicamente si IAM lo permite."
6. **Paso 11 (auditoría)** — "Y Cloud Audit Logs registra cada evento (IAP, BQ, KMS, WIF) con sello de tiempo en una bitácora inmutable con Bucket Lock WORM."

### Preguntas probables y cómo responderlas

> *¿Por qué necesitan tantos pasos?*

Porque cada uno verifica una propiedad distinta y todas son necesarias para Zero Trust. Quitar cualquiera deja un hueco: sin paso 4 (Access Context Manager) un atacante con credenciales válidas pero desde una red no autorizada entra; sin paso 7 (WIF) se necesita una clave estática en disco que puede filtrarse; sin paso 11 no hay forma de detectar un compromiso post-mortem.

> *¿Qué pasa si Cloud KMS no responde?*

El flujo falla cerrado en paso 10. Sin DEK no hay descifrado, sin descifrado no hay respuesta al usuario. Eso es preferible a fallar abierto.

> *¿Por qué el flujo de denegación es rojo y los demás navy?*

Convención visual del diagrama: rojo punteado significa interrupción del flujo. El diseño viene del documento NIST SP 800-207 original.

---

## Slide 21 · Componentes del clasificador NLP/IA (C4 nivel 3)

**Pregunta que responde:** ¿Cómo decide PICIS si un documento contiene información sensible?

### Cómo presentarlo (≈ 80 segundos)

1. **Entrada** — "Un documento recolectado por el scraper (PDF, Office o imagen) entra al microservicio clasificador, que corre en GKE privado con Workload Identity."
2. **Pipeline de 5 pasos** — "Pasa por una secuencia: **(1) Separador de metadatos** aísla los metadatos del contenido útil; **(2) Segmentador** divide el contenido por secciones y párrafos; **(3) Filtrado** elimina duplicados e irrelevantes; **(4) Clasificador NLP/IA** — el núcleo, vectoriza los segmentos y aplica la taxonomía propia de PICIS de 55 tipos; **(5) Reporteador** compone el JSON final con archivo, página y párrafo."
3. **Servicios alrededor** — "El pipeline está sostenido por tres grupos de servicios: almacenamiento (Cloud Storage y BigQuery, ambos con CMEK); el diálogo con Sensitive Data Protection — que es **insumo, no veredicto**; y control/auditoría (Cloud Logging para auditoría operativa, Secret Manager para modelos y tokens, Cloud KMS para llaves CMEK)."
4. **Cierre con el art. 22** — "La decisión final no es automatizada. Como dice la nota: el Analista valida los hallazgos potencialmente sensibles antes de que se persistan como incidentes confirmados. Eso es lo que pide el artículo 22 de la LGPDPPSO sobre decisiones automatizadas: explicabilidad y validación humana significativa."

### Preguntas probables y cómo responderlas

> *¿Qué tan bueno es el clasificador? ¿Qué métrica usan?*

Adoptamos F<sub>β</sub> con β = 2 (slide 13). Da el doble de importancia al recall sobre la precisión, porque en privacidad un falso negativo (información sensible que se cuela) cuesta más que un falso positivo (alarma que el Analista descarta). La evaluación experimental contra el corpus de validación es alcance de TT2.

> *¿Por qué consultan SDP si tienen su propio clasificador?*

Porque la decisión final no es delegable. SDP nos da una preclasificación rápida sobre patrones conocidos (RFC, CURP, IBAN, etc.), pero la taxonomía de PICIS son 55 tipos que SDP no cubre. El clasificador propio del CIC-IPN es quien asigna la categoría final, y el Analista la valida.

> *¿Qué pasa si el clasificador se equivoca y reporta un dato como sensible cuando no lo es?*

Es exactamente para eso que está el Analista (rol RBAC). Antes de que el hallazgo se persista como "incidente confirmado", el Analista lo revisa. Sin validación del Analista, no hay reporte al cliente. Eso satisface el art. 22 LGPDPPSO.

---

## Atajos útiles durante la presentación

| Tecla | Acción |
|---|---|
| **Click** sobre un diagrama | Abre el modal de zoom |
| **Z** | Abre el modal del diagrama del slide actual |
| **Esc** | Cierra el modal de zoom |
| **F** | Fullscreen (recomendado en la defensa) |
| **B** | Blank — útil cuando el sinodal está pensando una pregunta |
| **←/→** | Navegar slides; el clicker estándar también funciona |

## Si un diagrama no se ve

Plan B: en cualquier slide de diagrama, presiona `Z`. El modal a casi
viewport completo deja ver todos los detalles sin tener que zoom-in
del navegador. Para volver a la presentación: `Esc`.
