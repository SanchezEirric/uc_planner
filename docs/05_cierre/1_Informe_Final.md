# Informe Final del Proyecto (Final Project Report)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Versión de Línea Base:** 3.0.0 (PMV Liberado)  
**Fecha de Cierre:** 14 de julio de 2026  
**Elaborado por:** Erick Sanchez Vicente  

---

## 1. Resumen Ejecutivo (Visión General)
El proyecto **Planner-UC** se ha ejecutado y cerrado con éxito, entregando a la Universidad Continental un Producto Mínimo Viable (PMV) plenamente funcional. El sistema resuelve el Problema de Satisfacción de Restricciones (CSP) derivado de la planificación masiva de horarios en un entorno de currículo flexible. Empleando un enfoque algorítmico basado en inteligencia heurística (Algoritmo Genético) sobre una arquitectura moderna **MERN** (MongoDB, Express, React, Node.js), el proyecto ha superado el desempeño de planificadores lógicos tradicionales. 

Este informe consolida la evidencia verificable del éxito del proyecto, certificando la viabilidad técnica, la optimización de recursos presupuestales del cronograma y una integración sobresaliente de prácticas de sostenibilidad (*Green Software*).

---

## 2. Desempeño del Proyecto y Análisis Comparativo (Plan vs. Ejecución)
Para garantizar la evaluación integral de la gestión, se presenta el análisis comparativo entre la línea base planificada (Project Charter) y la ejecución real auditada al cierre:

| Área de Gestión | Planificado (Línea Base) | Ejecutado (Real) | Variación | Conclusión del Desempeño |
| :--- | :--- | :--- | :--- | :--- |
| **Alcance** | Motor CSP, Control de 20-22 Créditos, Evitar solapamientos. | PMV 100% Funcional + Restricciones de bajo rendimiento académico (RF-04). | **+1 Requisito Crítico** | **Favorable.** Se absorbió requerimiento no planificado con éxito sin alterar la estabilidad del motor. |
| **Cronograma** | 4 Sprints (320 horas-hombre). | 4 Sprints (332 horas-hombre). | **+ 12 horas** | **Aceptable.** Desviación mínima (+3.75%) justificada por la adaptación al nuevo requerimiento. Se cumplió fecha de cierre. |
| **Costos** | Presupuesto Base: S/. 11,200.00 | Gasto Real (Esfuerzo): S/. 11,620.00 | **+ S/. 420.00** | **Aceptable.** El costo físico de infraestructura se mantuvo en S/. 0.00 utilizando Tiers Gratuitos. |
| **Calidad** | Tiempo de respuesta < 2.0s | Tiempo de convergencia del motor: **0.8s** | **- 1.2 seg** | **Sobresaliente.** Poda heurística altamente optimizada para minimizar uso de CPU. |

---

## 3. Desempeño del Alcance y Trazabilidad Total
El proyecto evidenció una **trazabilidad total** y bidireccional desde el levantamiento de requisitos (RF/RNF) hasta el despliegue del código final:
*   Se cumplió la restricción dura institucional: **Cero solapamientos** espaciotemporales simultáneos (aulas físicas, disponibilidad de docentes y agenda de estudiantes).
*   Se aseguró la validación automatizada de los rangos de crédito (20-22 créditos regulares) conectando la interfaz reactiva del usuario directamente con las penalizaciones del motor genético.
*   El diseño del sistema demostró adaptabilidad (Agile) permitiendo inyectar topes de creditaje por bajo rendimiento sin corromper las colecciones en MongoDB Atlas.

---

## 4. Desempeño de Calidad y Métricas Cuantitativas
La solidez técnica del PMV queda demostrada a través de métricas cuantitativas que validan los atributos de calidad (ISO/IEC 25010):

*   **Cobertura de Código (QA):** Mediante suites automatizadas (Jest para backend/motor y Cypress para E2E), el monorepositorio alcanzó un **89.4% de cobertura global**, destacando un **92.3%** en los archivos críticos del algoritmo (`genetic.js`).
*   **Sostenibilidad Ambiental (Green IT):** Bajo el estándar *Sustainable Web Design*, la librería `CO2.js` certificó una **reducción verificable del 94.7% de emisiones de carbono** (cayendo de 0.001049g a solo 0.000055g por solicitud). Esto se logró mediante compresión Gzip, políticas estrictas de caché (HTTP 304) y proyecciones Mongoose (`.select()`).
*   **Seguridad:** Cumplimiento de directrices OWASP Top 10 mitigando fallas de control de acceso mediante tokens JWT firmados criptográficamente.

---

## 5. Resumen Consolidado de Riesgos
La matriz de riesgos se gestionó activamente durante todo el ciclo de vida, documentando el siguiente estado final:

*   **Riesgos Cerrados/Mitigados:** Se neutralizaron las amenazas críticas de baja cobertura de código (R-12) y el riesgo de exceder los límites del servidor gratuito (R-06) disminuyendo drásticamente el payload de red.
*   **Riesgos Transferidos a Operación:** El equipo hereda a la fase de operaciones un catálogo con respuestas definidas:
    1.  *R-13 (Rendimiento):* Falsos negativos de "Horario No Encontrado" debido al tope de 300 iteraciones genéticas (ahorro de energía).
    2.  *R-14 (Consistencia):* Posibles bypass de aforo a causa de la invalidación de caché.
    3.  *R-17 (Transaccional):* Evasión de deudas por peticiones web concurrentes extremas, a mitigar con transacciones ACID de MongoDB.

---

## 6. Resumen Consolidado de Incidentes (Issue Log)
Se certifica el **cierre resolutivo del 100% de los incidentes reales** detectados durante las fases de integración y pruebas:

*   **INC-01 (Sesiones):** Bug de persistencia y enrutamiento solucionado saneando estados globales de React y `localStorage`.
*   **INC-02 (Concurrencia de Datos):** Problema de inconsistencia multiusuario mitigado al refactorizar los controladores de Mongoose hacia operaciones atómicas.
*   **INC-03 (Conflictos CI/CD):** Fallas de sintaxis en el entorno de pruebas estabilizadas mediante el aislamiento de la configuración `jest.config.js`.
*   **INC-04 (Consumo Innecesario):** Peticiones huérfanas o redundantes eliminadas activando cabeceras dinámicas `Cache-Control`.

---

## 7. Síntesis de Solidez Técnica (Arquitectura MERN y CSP)
El entregable se considera **técnicamente sólido** al superar las limitaciones de la ingeniería de software clásica:
En lugar de depender de bucles lineales exhaustivos, la solución inyectó inteligencia artificial heurística (**Algoritmo Genético**) alojada en un entorno no bloqueante (**Node.js**). La flexibilidad de los currículos de la universidad fue mapeada sin fricciones mediante la naturaleza documental de **MongoDB**, y los resultados matemáticos se renderizaron instantáneamente en una Single Page Application de alta respuesta usando **React** y CSS Grid.

---

## 8. Conclusiones Estratégicas y Aprendizaje Organizacional
El proyecto **Planner-UC** se declara cerrado cumpliendo holgadamente los criterios de éxito estipulados. 
Como conclusión estratégica, se evidencia que la adopción de arquitecturas orientadas a heurísticas evolutivas (*Genetics*) representa el futuro viable para la administración universitaria, minimizando semanas de esfuerzo humano a cálculos de menos de un segundo. Asimismo, la integración pionera de reportes **Green Software** añade un diferencial de valor corporativo indiscutible, demostrando que es posible construir software de grado institucional que sea simultáneamente veloz, escalable y respetuoso con el medio ambiente global.
