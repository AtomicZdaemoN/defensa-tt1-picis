# Guion · Miguel — Narrador / Conector

> **Rol:** Abre la presentación, conecta el problema humano con el técnico,
> aterriza la legislación, narra cómo se hicieron los productos clave
> (estado del arte, brecha, flujo Zero Trust, PIA).
>
> **Diapositivas asignadas:** 01, 02, 05, 10, 12, 16, 20, 23, 26
>
> **Tiempo objetivo total:** ~6:00 min
>
> **Notas de estilo:**
> - Sin etiquetas de pronunciación fonética.
> - Notas entre corchetes para acciones no verbales (`[Señalar...]`,
>   `[Contacto visual...]`, `[Pausa breve]`, `[Énfasis]`).
> - Acrónimos detallados con su significado entre paréntesis la
>   primera vez que se usan.
> - Énfasis en el **proceso**: cómo llegamos a cada resultado, no
>   sólo qué resultado obtuvimos. El sinodal ya ve el resultado en
>   pantalla; nuestro valor está en explicar cómo se hizo.

---

## Slide 01 — Portada · 30s

> *[Apertura · contacto visual amplio · los tres expositores al frente]*

Muy buenos días. Mi nombre es **Miguel Arturo Romero Carreón**, y
junto con **Diego Alejandro Leyva García** y **Carlos Uriel
Francisco López** presentamos la defensa del Trabajo Terminal de
**Investigación 2026-B182**.

> *[Pausa breve]*

El trabajo lleva por título *Esquema preventivo de privacidad para
PICIS en la versión de nube basado en la arquitectura Zero Trust*.
Está dirigido por el **Dr. Eleazar Aguirre Anaya** y la **Dra. Nidia
Asunción Cortez Duarte**.

Carlos, abrimos con el contexto.

---

## Slide 02 — Datos sensibles publicados por error · 50s

> *[Transición: Entras después de Carlos en los slides 03 y 04]*

Gracias, Carlos. Con la definición y el marco legal claros, aterricemos
el problema concreto.

> *[Contacto visual con jurado]*

Las instituciones públicas suben miles de documentos a sus portales —
oficios, dictámenes, anexos. Un porcentaje no menor contiene, sin que
nadie lo advirtiera, **información sensible**: nombres con CURP,
expedientes médicos, números de cuenta.

> *[Bajar voz · ritmo lento]*

No es hipotético. Pasa todos los días.

> *[Ritmo normal]*

Revisar manualmente cada documento es imposible a escala
institucional. De ahí nace **PICIS** —  la Plataforma de
Identificación, Clasificación y Monitoreo de Información Sensible,
desarrollada en el Laboratorio de Ciberseguridad del CIC-IPN. Combina
*scraping* sobre dominios autorizados con un clasificador de
procesamiento de lenguaje natural y aprendizaje automático que maneja
una taxonomía propia de 55 tipos en 10 categorías.

Carlos, ¿qué entendemos formalmente por dato personal?

---

## Slide 05 — Por qué nació PICIS · 45s

> *[Transición: Entras después de Carlos en los slides 03 y 04]*

Bien. Ya con el marco legal claro, entendamos la motivación operativa.

> *[Contacto visual]*

La verificación manual no escala. Una institución con cientos de
portales y miles de documentos no puede revisar todo a mano. Por eso
el Centro de Investigación en Computación del IPN desarrolló PICIS
con cuatro componentes técnicos: *scraping* periódico sobre dominios
autorizados, procesamiento de lenguaje natural, aprendizaje automático
para la clasificación documental, y análisis del corpus.

> *[Énfasis]*

Un detalle de diseño que vamos a desarrollar más adelante: **la
clasificación nunca es totalmente automática**. Existe un rol humano,
el Analista, que valida cada hallazgo antes de registrarlo como
incidente confirmado.

Diego, ¿qué pasa cuando movemos PICIS a la nube?

---

## Slide 10 — Estado del arte · 55s

> *[Transición: Entras después de Carlos en los slides 08 y 09]*

> *[Señalar la tabla del slide]*

Antes de proponer nada, revisamos qué existe. El proceso fue
sistemático y siguió la metodología que nos indicó el Dr. Aguirre
Anaya.

Construimos dos productos: una **matriz bibliográfica** con 23
trabajos identificados — entre estándares NIST, productos comerciales
y artículos académicos —, y sobre esa base una **matriz analítica de
contenido** donde para cada trabajo extrajimos cuatro dimensiones: las
herramientas que usa, las métricas que reporta, su marco conceptual y
la brecha que deja abierta para PICIS.

> *[Contacto visual · ritmo pausado]*

Después definimos seis ejes de análisis transversal: Zero Trust en la
nube, procesamiento de lenguaje natural para información personal,
análisis de impacto a la privacidad con inteligencia artificial,
conformidad mexicana, cifrado con llaves gestionadas por el cliente y
federación sin claves estáticas.

> *[Énfasis]*

El resultado es la tabla que están viendo: **ningún trabajo cubre los
seis ejes simultáneamente**. Cada uno resuelve dos o tres, pero la
integración completa es la brecha que ataca este trabajo.

Carlos, sigues con los cuatro marcos del NIST.

---

## Slide 12 — Legislación mexicana · 50s

> *[Transición: Entras después de Carlos en el slide 11]*

Gracias, Carlos. Sobre el marco normativo, lo construimos en tres
capas.

Primero, la **LFPDPPP** (Ley Federal de Protección de Datos Personales
en Posesión de los Particulares) y su Reglamento — articula la
relación responsable–encargado, fundamental porque Google Cloud
Platform va a operar como encargado.

Segundo, la **LGPDPPSO** (Ley General de Protección de Datos
Personales en Posesión de Sujetos Obligados) — establece los deberes
de seguridad y la bitácora de vulneraciones que aplican al IPN.

> *[Énfasis · contacto visual]*

Y dentro de esa ley, hay un artículo que me interesa especialmente:
el **artículo 22 de la LGPDPPSO**. Establece que las decisiones
**automatizadas** que afecten al titular tienen que ser
**explicables** y contar con **validación humana significativa**.

Esto define una restricción técnica concreta: el clasificador no
puede ser una caja negra que decida sola. Diego lo va a desarrollar
en la métrica del clasificador.

---

## Slide 16 — Brecha activo a activo · 55s

> *[Transición: Entras después de Carlos en el slide 15]*

> *[Señalar la tabla]*

Pasemos al análisis. La brecha que reportamos no es genérica: es
**activo por activo** — entre la versión on-premise actual y la
arquitectura objetivo en la nube.

El proceso fue inventariar primero los activos críticos de la
versión on-premise — identidades de microservicios, acceso al backend,
cifrado en reposo, bitácoras, clasificación, decisiones automatizadas
— y para cada uno documentar dos cosas: el control que existe hoy y
el control objetivo en la nube.

> *[Contacto visual · ritmo natural]*

Tres ejemplos que ilustran el patrón:

Las identidades de microservicios pasan de **claves estáticas en
archivos de configuración** a Workload Identity Federation con
tokens de máximo una hora.

El acceso al backend pasa de un **firewall de red** a Identity-Aware
Proxy más Access Context Manager — verificación por solicitud, no
por perímetro.

Y las decisiones del clasificador pasan de **no tener registro de
explicabilidad** a trazabilidad completa con validación del Analista
— justo lo que pide el artículo 22.

La matriz completa con cada activo está en el Anexo I del reporte
técnico.

Diego, ¿cómo derivan los requisitos?

---

## Slide 20 — Flujo de autorización Zero Trust · 55s

> *[Transición: Entras después de Diego en el slide 19]*

> *[Pausa breve · contacto visual amplio]*

Este es el momento donde la arquitectura se concreta. Lo que están
viendo es el flujo completo que recorre una sola petición.

> *[Señalar el diagrama paso por paso]*

El diseño parte del **NIST SP 800-207**, el estándar de Zero Trust
Architecture, y se concreta en **once pasos** distribuidos en cuatro
planos: ingreso, aplicación, datos y auditoría.

La regla operativa fundamental es **deny by default**. Cada paso —
Identity-Aware Proxy, Cloud Identity, Access Context Manager, IAM
Conditions, Workload Identity, VPC Service Controls — verifica
independientemente. No hay confianza heredada por estar dentro de la
red.

> *[Bajar voz]*

Y el paso once es el que cierra el modelo: **Cloud Audit Logs en
Bucket WORM (Write Once, Read Many)**. Todo lo que ocurrió en los
diez pasos anteriores queda registrado en un repositorio inmutable.
Nadie lo edita.

> *[Pausa]*

Si en cualquier punto la autenticación o el contexto falla, la
petición termina en un **HTTP 403** y nunca toca el backend.

Diego, sigues con el detalle interno del clasificador.

---

## Slide 23 — PIA del clasificador · 55s

> *[Transición: Entras después de Carlos en el slide 22]*

Llegamos a uno de los entregables más importantes de TT1: el
**Análisis de Impacto a la Privacidad** del módulo de clasificación.

El proceso se estructura en **siete bloques** siguiendo la
metodología del NIST Privacy Framework.

Bloque uno: descripción del tratamiento — el flujo del pipeline
completo, paso por paso.

Bloque dos: categorías de datos — los cuatro niveles de
sensibilidad, N1 a N4.

Bloque tres: actores y encargados — aquí formalizamos que Google
Cloud opera como encargado del tratamiento bajo el artículo 52 del
Reglamento.

Bloque cuatro: finalidad y base jurídica.

Bloque cinco: riesgos a derechos del titular — identificamos siete
riesgos concretos.

Bloque seis: controles mitigantes — cada riesgo queda mapeado a
uno o varios controles del catálogo.

> *[Énfasis · contacto visual]*

Y bloque siete, el más importante: la **decisión residual**. Después
de aplicar los controles, el riesgo residual se evaluó como
**medio**, con la recomendación de mitigar antes de pasar a
producción. Esa mitigación es exactamente lo que se va a demostrar
operativamente en TT2.

Diego, cierras con las conclusiones técnicas.

---

## Slide 26 — Gracias · Cierre conjunto

> *[Junto con Diego y Carlos · centro del escenario]*

Muchas gracias por su atención. Quedamos a sus órdenes para las
preguntas.

---

## Notas finales para Miguel

1. **Tu valor es la narrativa del proceso.** Cada vez que muestras un
   resultado (estado del arte, brecha, flujo, PIA), explica el
   **cómo** — no solo el qué. El sinodal ya ve el qué en pantalla.
2. **El slide 20 (Zero Trust) es tu pico dramático.** No lo
   apresures. Pausa después del paso 11 antes de explicar el HTTP
   403. Bajar la voz en esa parte refuerza la idea.
3. **Cuando menciones el art. 22 en el slide 12,** prepárale el
   terreno a Diego para que él lo remate en el slide 21. Es una
   pelota que le pasas, no un punto que cierres tú.
4. **Si te preguntan sobre la matriz bibliográfica o analítica del
   estado del arte,** la primera está en el Anexo H y la segunda
   también — son los Productos 6 y 7. La metodología la indicó el
   Dr. Aguirre Anaya en sesión.
