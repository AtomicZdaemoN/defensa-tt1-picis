# Guion · Expositor A — Narrador / Conector

> **Perfil:** Abre la presentación, conecta los problemas humanos con lo
> técnico, aterriza la legislación y narra los momentos clave.
>
> **Slides asignados:** 1, 2, 5, 10, 12, 16, 20, 23, 26 (cierre conjunto)
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

## SLIDE 01 — Portada

`[RITMO PAUSADO · CONTACTO VISUAL]`

Buenos días. Mi nombre es __________, y junto con mis compañeros __________ y __________ presentamos la defensa del Trabajo Terminal 2026-B182.

`[PAUSA BREVE]`

El título de nuestro trabajo es: *Esquema preventivo de privacidad para PICIS en la versión de nube basado en la arquitectura Zero Trust*.

`[PAUSA]`

Nuestros directores son el Dr. Eleazar Aguirre Anaya y la Dra. Nidia Asunción Cortez Duarte.

`[PAUSA BREVE]`

Antes de entrar en materia, quiero darles contexto de por qué este trabajo existe y por qué es relevante.

---

## SLIDE 02 — Introducción: datos sensibles publicados por error

`[RITMO NORMAL · TONO CONVERSACIONAL]`

Imaginen esto. `[PAUSA BREVE]` Una institución pública sube un documento a su portal de transparencia. Un PDF con tablas, gráficas, información aparentemente inofensiva. Pero en una de esas tablas, sin que nadie se diera cuenta, quedaron nombres completos, CURPs, direcciones y hasta números de expediente médico.

`[PAUSA]`

`[VOZ BAJA]` Esto no es hipotético. Pasa constantemente.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Cada institución del sector público y privado publica miles de documentos en sus portales. Y una proporción no menor contiene, sin advertirlo, información sensible: registros personales, credenciales, expedientes médicos o financieros.

`[PAUSA BREVE]`

`[INTENSIFICAR]` Revisar todo eso a mano es inviable. Por eso existe PICIS.

`[PAUSA]`

PICIS es una plataforma desarrollada en el Laboratorio de Ciberseguridad del Centro de Investigación en Computación del IPN. Lo que hace es automatizar la búsqueda y la catalogación de información sensible que se publica de manera inadvertida en portales web. Usa web scraping sobre dominios autorizados y un clasificador que combina procesamiento de lenguaje natural con inteligencia artificial. Su taxonomía operativa maneja 55 tipos de información sensible organizados en 10 categorías.

`[PAUSA BREVE]`

Ahora, para que entiendan bien de qué tipo de datos estamos hablando, __________ les va a explicar qué es un dato personal y cómo se clasifican.

---

## SLIDE 05 — Por qué nació PICIS

`[RITMO NORMAL]`

Ahora que ya tenemos claro qué son los datos personales y por qué el IPN tiene una obligación legal de protegerlos, la pregunta natural es: `[PAUSA BREVE]` ¿y cómo detectas que ya los publicaste sin querer?

`[PAUSA]`

`[RITMO PAUSADO]` Manualmente, no se puede. `[PAUSA BREVE]` Revisar uno por uno los documentos de todos los portales de una institución es, literalmente, titánico. Hablamos de miles de PDFs, hojas de cálculo, imágenes con texto.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Precisamente por eso nació PICIS en el Centro de Investigación en Computación del IPN. La idea es automatizar todo ese proceso de identificación.

`[PAUSA BREVE]`

¿Cómo opera hoy? La versión actual, la versión uno, funciona completamente en infraestructura local, en los servidores propios del laboratorio. Hace web scraping periódico sobre dominios autorizados, aplica procesamiento de lenguaje natural, inteligencia artificial para la clasificación documental, y ciencia de datos para analizar el corpus recolectado. Y algo muy importante: `[INTENSIFICAR]` la clasificación no es completamente automática. Hay un rol humano, el Analista, que valida los hallazgos antes de que se registren como incidentes confirmados.

`[PAUSA]`

Bien. Esa es la versión que existe hoy. `[PAUSA BREVE]` Ahora, __________ les va a contar qué cambia cuando decidimos mover todo esto a la nube.

---

## SLIDE 10 — Estado del arte: 23 trabajos en seis ejes

`[RITMO NORMAL]`

Antes de diseñar cualquier solución, lo primero que hicimos fue revisar qué existe. `[PAUSA BREVE]` Analizamos 23 trabajos agrupados en seis ejes que consideramos fundamentales para nuestro problema.

`[PAUSA BREVE]`

`[RITMO ÁGIL]` Esos ejes son: arquitectura Zero Trust en GCP, clasificación de información personal con NLP, análisis de impacto a la privacidad usando IA, conformidad con legislación mexicana, cifrado con claves gestionadas por el cliente para escenarios multi-tenant, y eliminación de claves estáticas.

`[PAUSA]`

`[RITMO PAUSADO · CONTACTO VISUAL]` Lo que encontramos es revelador. Ninguno de esos 23 trabajos cubre los seis ejes al mismo tiempo.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Veamos la tabla. El NIST SP 800-207, que es la referencia de Zero Trust, cubre parcialmente el primer eje pero no toca NLP ni conformidad mexicana. Microsoft Presidio y Purview son muy buenos para clasificar información personal, pero no tienen nada de Zero Trust ni de legislación mexicana. Workload Identity Federation resuelve el problema de las claves estáticas en GCP, pero no clasifica ni protege datos personales. El Privacy Framework del NIST y la guía del GAO de 2024 abordan el PIA con IA, pero sin implementación concreta en nube. Y los lineamientos del INAI con la LGPDPPSO cubren la conformidad mexicana, pero no la infraestructura.

`[PAUSA]`

`[INTENSIFICAR · CONTACTO VISUAL]` La última fila de la tabla es nuestro trabajo. Y ahí van a ver que es el único que marca los seis ejes completos. `[PAUSA BREVE]` Eso no es un accidente. Es el resultado de haber identificado esta brecha de integración en la literatura y haberla convertido en nuestro punto de partida.

`[PAUSA]`

Ahora, __________ les va a presentar los marcos teóricos que sustentan el diseño del esquema.

---

## SLIDE 12 — Legislación mexicana de privacidad (vigente 2025)

`[RITMO NORMAL]`

Pasemos ahora a la otra mitad del marco teórico: la legislación mexicana.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` México tiene dos leyes principales de protección de datos personales, y ambas aplican directamente a nuestro problema.

`[PAUSA BREVE]`

`[RITMO NORMAL]` La primera es la LFPDPPP, la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Regula al sector privado. Los artículos que nos importan son el 5, el 12 y del 18 al 20: ahí están los principios de licitud, responsabilidad, calidad y seguridad técnica.

`[PAUSA BREVE]`

Su Reglamento, en los artículos 52 y del 57 al 62, establece obligaciones específicas para el cómputo en la nube y define la relación entre el responsable del tratamiento y el encargado. Esto es directamente relevante porque en nuestro esquema, Google Cloud Platform actúa como encargado.

`[PAUSA BREVE]`

La segunda ley es la LGPDPPSO, que regula a los sujetos obligados del sector público. Artículos 25 al 30 y 32 al 33: deberes de seguridad y bitácora de vulneraciones.

`[PAUSA]`

`[INTENSIFICAR]` Pero hay un artículo que quiero que tengan presente durante toda la presentación: el artículo 22 de la LGPDPPSO. `[PAUSA BREVE]` `[RITMO PAUSADO]` Dice que las decisiones automatizadas que afectan al titular deben ser explicables y contar con validación humana significativa. `[PAUSA BREVE]` Esto es fundamental porque PICIS usa un clasificador de inteligencia artificial. Cada vez que ese clasificador dice "este documento contiene datos sensibles", esa decisión tiene que poder explicarse y un humano tiene que validarla.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Por último, la reforma constitucional de 2025 extinguió al INAI y reasignó sus funciones. Sin embargo, los criterios metodológicos que el INAI estableció conservan su valor y los utilizamos como referencia en este trabajo.

`[PAUSA]`

Bien. Con el marco normativo claro, __________ va a explicar la métrica que adoptamos para evaluar el clasificador.

---

## SLIDE 16 — Brecha activo a activo

`[RITMO NORMAL]`

Pasemos al análisis. `[PAUSA BREVE]` Recuerden que nuestro primer objetivo particular era caracterizar la brecha entre la versión on-premise y la versión en nube de PICIS. Pues aquí está esa brecha, aterrizada activo por activo.

`[PAUSA BREVE]`

Lo que van a ver en esta tabla es muy concreto: en la primera columna está el activo o la superficie de riesgo, en la segunda está el control que existía en la versión local, y en la tercera está el control objetivo que diseñamos para la nube.

`[PAUSA BREVE]`

`[RITMO PAUSADO · CONTACTO VISUAL]` Veamos algunos ejemplos.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Identidad de microservicios. Antes eran claves estáticas en archivos de configuración. `[PAUSA BREVE]` `[INTENSIFICAR]` Ahora: Workload Identity Federation con tokens de vida máxima de una hora. Nada de credenciales persistentes.

`[PAUSA BREVE]`

Acceso al backend. Antes lo protegía el perímetro de red interna con un firewall. Ahora: Identity-Aware Proxy con Access Context Manager. Cada solicitud se verifica de forma independiente.

`[PAUSA BREVE]`

Cifrado en reposo. Antes era cifrado de volumen genérico, el mismo para todo. Ahora: Cloud KMS con claves gestionadas por el cliente, una clave de cifrado de datos por cada dataset.

`[PAUSA BREVE]`

Bitácora de auditoría. Antes eran logs locales en disco, que cualquiera con acceso al servidor podía modificar. `[INTENSIFICAR]` Ahora: Cloud Audit Logs en Bucket Lock con política WORM. Escritura única, nadie los altera después.

`[PAUSA BREVE]`

Clasificación de PII. Antes: reglas locales del clasificador. Ahora: Sensitive Data Protection como insumo de preclasificación, combinado con el clasificador propio del esquema.

`[PAUSA BREVE]`

Y finalmente, las decisiones automatizadas. Antes no había registro de explicabilidad. `[INTENSIFICAR]` Ahora: trazabilidad completa más validación del Analista, como lo exige el artículo 22 de la LGPDPPSO.

`[PAUSA]`

Esta tabla es solo un fragmento. La matriz completa está en el Anexo I del reporte técnico. `[PAUSA BREVE]` Con la brecha clara, __________ les va a presentar los requisitos que derivamos de ella.

---

## SLIDE 20 — Flujo de autorización Zero Trust (11 pasos)

`[RITMO PAUSADO · CONTACTO VISUAL]`

Este es el momento clave de la presentación. `[PAUSA]` Aquí es donde todo lo anterior se vuelve concreto.

`[PAUSA BREVE]`

`[RITMO NORMAL]` Lo que van a ver es el flujo completo de autorización Zero Trust de nuestro esquema. Son 11 pasos que recorre una sola petición desde que el usuario da clic en su navegador hasta que la respuesta regresa con los datos. Cada paso cruza un plano distinto: ingreso, aplicación, datos y auditoría.

`[PAUSA BREVE]`

`[INTENSIFICAR]` Y lo más importante: `[RITMO PAUSADO]` en ningún momento hay confianza implícita. Cada solicitud se verifica por sí misma.

`[PAUSA]`

`[RITMO NORMAL]` Arranquemos. El usuario abre su navegador, tiene una sesión federada con MFA, puede ser cualquier rol operativo. Hace un GET al dashboard, HTTPS, TLS 1.3.

`[PAUSA BREVE]`

Paso uno: la solicitud llega al Cloud Load Balancing. Aquí se termina el TLS y se aplican las políticas SSL.

`[PAUSA BREVE]`

Paso dos: pasa al Identity-Aware Proxy. Este es el componente central del esquema. `[INTENSIFICAR]` Valida la cookie de sesión y resuelve la identidad del usuario. Si no tiene sesión válida, aquí se acaba todo.

`[PAUSA BREVE]`

Paso tres: IAP consulta a Cloud Identity, que devuelve los claims del usuario y verifica que la MFA esté activa.

`[PAUSA BREVE]`

Paso cuatro: Access Context Manager evalúa el nivel de acceso. No basta con ser quien dices ser; además se evalúa desde qué red te conectas, qué dispositivo usas y en qué horario.

`[PAUSA BREVE]`

Paso cinco: IAM Conditions verifica el rol mínimo y la pertenencia al grupo correcto. `[PAUSA BREVE]` Con esto se cierra el plano de ingreso.

`[PAUSA]`

`[RITMO NORMAL]` Paso seis: si todo pasó, IAP firma una cabecera JWT y la envía al backend en GKE privado. Entramos al plano de aplicación.

`[PAUSA BREVE]`

Ahora viene el plano de datos. Paso siete: Workload Identity Federation intercambia la identidad del pod por un token de corta vida, máximo una hora. `[INTENSIFICAR]` No hay claves estáticas en ningún momento.

`[PAUSA BREVE]`

Paso ocho: VPC Service Controls valida que el pod tiene permiso para acceder a los datos dentro del perímetro lógico.

`[PAUSA BREVE]`

Paso nueve: BigQuery entrega la consulta, pero con vistas filtradas y enmascaramiento por nivel de PII según el rol del usuario.

`[PAUSA BREVE]`

Paso diez: Cloud KMS desencripta la clave de datos usando la CMEK y el token de la cuenta de servicio.

`[PAUSA]`

`[RITMO PAUSADO · INTENSIFICAR]` Y paso once: Cloud Audit Logs. Todo lo que pasó en los diez pasos anteriores queda registrado en un bucket con política WORM. Nadie lo borra. Nadie lo modifica. Queda sellado con timestamp.

`[PAUSA LARGA]`

`[VOZ BAJA · CONTACTO VISUAL]` Y si en cualquier punto entre los pasos dos y cinco la MFA es inválida o el contexto está fuera de política, la respuesta es un HTTP 403. Deny by default. La petición nunca llega al backend.

`[PAUSA]`

Eso es Zero Trust aplicado. No es una palabra de moda, es un flujo operativo verificable paso por paso.

`[PAUSA BREVE]`

__________ les va a mostrar ahora el detalle del microservicio clasificador.

---

## SLIDE 23 — PIA del clasificador (siete bloques)

`[RITMO NORMAL]`

Llegamos a uno de los entregables más importantes de TT1: el análisis de impacto a la privacidad del clasificador.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` ¿Por qué hicimos un PIA? Porque el clasificador NLP/IA de PICIS trata datos personales de forma automatizada. `[PAUSA BREVE]` Y la legislación, como ya mencionamos, exige que las decisiones automatizadas sean explicables y tengan validación humana.

`[PAUSA BREVE]`

`[RITMO NORMAL]` El PIA que diseñamos tiene siete bloques, siguiendo la metodología del NIST Privacy Framework.

`[PAUSA BREVE]`

El bloque uno describe el tratamiento: cómo fluyen los datos dentro del pipeline del clasificador.

Bloque dos: las categorías de datos. Usamos cuatro niveles, del N1 al N4, donde N4 es el más sensible.

Bloque tres: actores y encargados. Aquí es donde se define que Google Cloud Platform opera como encargado bajo el artículo 52 del Reglamento de la LFPDPPP.

`[PAUSA BREVE]`

Bloque cuatro: finalidad y base jurídica del tratamiento.

Bloque cinco: los riesgos a derechos y libertades. Identificamos siete riesgos, del R1 al R7.

`[PAUSA BREVE]`

`[INTENSIFICAR]` Bloque seis: los controles mitigantes. Aquí es donde el PIA se conecta directamente con el catálogo de 22 controles que ya les presentaron. No es un ejercicio abstracto: cada riesgo tiene un control concreto que lo mitiga.

`[PAUSA BREVE]`

`[RITMO PAUSADO]` Y bloque siete: la decisión residual. `[PAUSA BREVE]` `[CONTACTO VISUAL]` El riesgo residual se evaluó como medio, y la decisión documentada es: mitigar antes de pasar a producción. `[PAUSA BREVE]` Esa mitigación es exactamente lo que se va a demostrar en TT2.

`[PAUSA]`

`[RITMO NORMAL]` Quiero cerrar este slide reforzando algo. `[INTENSIFICAR]` El artículo 22 de la LGPDPPSO exige validación humana significativa para decisiones automatizadas. Nuestro esquema no solo la preserva: el Analista de PICIS interviene antes de que cualquier hallazgo se registre como incidente confirmado, y esa intervención queda trazada en los Audit Logs.

`[PAUSA]`

Con esto, le paso la palabra a __________ para las conclusiones.

---

## SLIDE 26 — Gracias (cierre conjunto)

`[RITMO PAUSADO · CONTACTO VISUAL]`

Muchas gracias por su atención y por su tiempo.

`[PAUSA]`

Quedamos a su disposición para cualquier pregunta.

---

## Notas generales para el Expositor A

1. **Tu energía es la del narrador.** Tú abres, tú conectas, tú aterrizas los momentos importantes. Cuando los otros expositores terminan la parte técnica, tú le devuelves significado humano a lo que acaban de explicar.

2. **Domina las transiciones.** Cada vez que le pasas la palabra a alguien, hazlo con una frase que prepare al público para lo que viene. No digas "le paso la palabra a mi compañero". Di algo como "Con eso claro, __________ les va a mostrar el detalle de..." — eso genera continuidad narrativa.

3. **El slide 20 (Zero Trust) es tu momento más fuerte.** Los 11 pasos son tu solo. Tómate tu tiempo, no lo apresures. El público debe sentir que cada paso es una capa más de protección. Baja la voz en la parte del 403 Deny by default — eso crea tensión dramática.

4. **Usa la mirada.** Cuando dices algo importante, mira directamente a un sinodal. No al proyector, no a tus notas. A ellos. Eso comunica dominio.

5. **Las pausas son poder.** Una pausa después de "Ninguno cubre los seis ejes al mismo tiempo" vale más que cualquier énfasis verbal. Deja que el silencio trabaje.

6. **En el slide 12 (legislación), no leas los artículos.** Menciónalos con naturalidad, como si los conocieras de memoria. "Los artículos 25 al 30..." debe sonar como algo que manejas, no como algo que memorizaste anoche.

7. **Si un sinodal interrumpe durante tu flujo narrativo**, no te desestabilices. Responde con calma, y cuando termines la respuesta, retoma exactamente donde ibas. "Decía que..." es un conector perfectamente válido.
