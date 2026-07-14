# Informe Final del Proyecto (Final Project Report)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Versión de Línea Base:** 3.0.0 (PMV Liberado)  
**Fecha de Cierre:** 14 de julio de 2026  

---

## 1. Resumen Ejecutivo
El proyecto **Planner-UC** se ha ejecutado y cerrado con éxito, entregando a la Universidad Continental un Producto Mínimo Viable (PMV) plenamente funcional y trazable. El sistema resuelve el complejo Problema de Satisfacción de Restricciones (CSP) derivado de la planificación de horarios en un entorno de currículo flexible. Empleando un enfoque algorítmico genético sobre el **Stack MERN**, el proyecto ha superado el desempeño de planificadores tradicionales. Este informe consolida la evidencia verificable del éxito del proyecto, destacando la viabilidad técnica, la optimización de recursos presupuestales y una integración innovadora de prácticas de sostenibilidad (*Green Software*).

---

## 2. Análisis Comparativo: Plan vs. Ejecución
Para garantizar la evaluación del desempeño, se presenta el análisis comparativo entre la línea base planificada (Project Charter) y la ejecución real al cierre:

| Área de Gestión | Planificado (Línea Base) | Ejecutado (Real) | Variación | Conclusión del Desempeño |
| :--- | :--- | :--- | :--- | :--- |
| **Alcance** | Motor CSP, Control de 20-22 Créditos, Cero Cruces. | PMV 100% Funcional + Gestión de penalidad académica. | **+1 Requisito** | **Favorable.** Se absorbió requerimiento no planificado sin quebrar el sistema. |
| **Cronograma** | 4 Sprints (320 horas-hombre). | 4 Sprints (332 horas-hombre). | **+ 12 horas** | **Aceptable.** Desviación mínima (+3.75%) absorbida exitosamente en el Hito final. |
| **Costos** | Presupuesto: S/. 11,200.00 | Gasto Real: S/. 11,620.00 | **+ S/. 420.00** | **Aceptable.** Costos de infraestructura mantenidos en S/. 0.00 mediante Tiers Gratuitos. |
| **Calidad** | Tiempo de respuesta < 2.0s | Tiempo de respuesta **0.8s** | **- 1.2 seg** | **Sobresaliente.** Motor heurístico altamente optimizado. |

---

## 3. Desempeño del Alcance y Trazabilidad Total
El alcance del proyecto demostró una **trazabilidad total** desde los requerimientos (RF/RNF) hasta el código entregado. 
* Se validó el 100% de las historias de usuario relacionadas al motor algorítmico, garantizando la restricción dura de **cero solapamientos** espaciotemporales (aulas, docentes y estudiantes).
* El diseño arquitectónico demostró alta adaptabilidad, permitiendo incorporar validaciones dinámicas (como topes de creditaje por bajo rendimiento académico) sin corromper el modelo de datos de MongoDB ni la interfaz reactiva del usuario final.

---

## 4. Desempeño de Calidad y Métricas Cuantitativas
La calidad técnica del software se valida mediante evidencias cuantitativas alineadas al estándar **ISO/IEC 25010** y normativas internacionales:
* **Cobertura y QA:** Se alcanzó un **89.4% de cobertura global de código** y **92.3%** en los módulos críticos del motor genético, respaldado por suites en Jest y Cypress.
* **Sostenibilidad y Green IT:** Auditorías con `CO2.js` evidencian una **reducción verificable del 94.7% de emisiones de carbono** (cayendo a 0.000055g por solicitud) gracias a compresión Gzip, Lazy Loading y optimización del payload de red.
* **Seguridad y Accesibilidad:** Cumplimiento verificado de directrices OWASP Top 10 (tokens JWT, encriptación) y accesibilidad web bajo nivel WCAG 2.1 (AA).

---

## 5. Resumen de Riesgos
A lo largo del ciclo de vida, la gestión activa del registro de riesgos permitió asegurar la entrega:
* **Riesgos Mitigados (Cerrados):** La amenaza de baja cobertura de código (R-12) y el riesgo de exceder cuotas de uso de red en la nube (R-06) fueron neutralizados mediante refactorización temprana y el uso estricto de cachés (HTTP 304).
* **Riesgos Transferidos a Operación:** Para el inicio de la etapa de producción, se heredan riesgos documentados con planes de contingencia claros, destacando: la mitigación de cuellos de botella por concurrencia extrema de estudiantes (R-17) y el control de falsos negativos ("Horario No Encontrado") debido a las limitaciones impuestas para el ahorro de energía del servidor (R-13).

---

## 6. Resumen de Incidentes
Se certifica el **cierre resolutivo del 100% de incidentes técnicos (Issue Log)** registrados:
* **Persistencia (INC-01):** Bug de sesiones asíncronas solucionado mediante control estricto del `localStorage`.
* **Inconsistencia de Datos (INC-02):** Fallos multiusuario resueltos estructurando transacciones ACID robustas en MongoDB.
* **Sobrecarga de Servidor:** Se neutralizó el riesgo inminente de *Out of Memory* al limitar los bucles del algoritmo genético (máximo 500 iteraciones) e indexar las colecciones de la base de datos, logrando un entorno de producción estable.

---

## 7. Conclusiones Estratégicas
El cierre de la fase de control demuestra que el proyecto **Planner-UC es técnicamente sólido, financieramente viable y estratégicamente valioso** para la Universidad Continental. 

Como aprendizaje organizacional, se evidencia que la adopción de algoritmos evolutivos supera con creces los enfoques tradicionales CSP para mallas flexibles. Además, la integración pionera de métricas de *Green Software* posiciona a esta solución no solo como una herramienta de gestión administrativa de alta velocidad (0.8s), sino como un activo institucional alineado con políticas globales de ecoeficiencia e innovación tecnológica.
