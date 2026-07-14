# Registro de Riesgos (Risk Register)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Fase de Gestión:** Control y Cierre del Proyecto  
**Elaborado por:** Erick Sanchez Vicente  
**Fecha de Actualización:** 14 de julio de 2026 (Versión Definitiva de Cierre)  

---

## 1. Criterios Claros de Priorización
Para garantizar un control objetivo, el equipo utilizó una matriz estándar de **Probabilidad (P) x Impacto (I)**, evaluando cada variable en una escala del 1 al 3 (1=Bajo, 2=Medio, 3=Alto). 
La priorización (Puntuación) dictamina la severidad del riesgo:
*   **Puntuación 1 a 3:** Riesgo Menor (Monitoreo pasivo).
*   **Puntuación 4 a 6:** Riesgo Moderado (Requiere respuesta preventiva).
*   **Puntuación 7 a 9:** Riesgo Crítico (Requiere plan de mitigación inmediato y contingencia).

---

## 2. Documentación de Eventos de Riesgo y Respuestas Aplicadas

La siguiente tabla consolida los riesgos gestionados a lo largo de todo el ciclo de vida, demostrando las respuestas aplicadas y su estado final al cierre del proyecto, garantizando la trazabilidad hacia los entregables técnicos.

### A. Riesgos Técnicos Mitigados y Cerrados
Eventos que amenazaron el desarrollo pero fueron resueltos exitosamente gracias a la respuesta del equipo.

| ID | Riesgo Identificado | P | I | Prioridad (PxI) | Respuesta Aplicada (Estrategia de Gestión) | Estado Final y Trazabilidad Verificable |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **R-01** | **Incumplimiento de pautas ambientales (*Green Software*):** Posible rechazo del patrocinador por alto consumo de red y servidor. | 2 | 3 | **6 (Mod)** | **Mitigar:** Implementación de compresión Gzip, Lazy Loading en React y reducción de payload. | **Cerrado.** El reporte de `CO2.js` evidencia una reducción del 94.7% de emisiones de CO2. |
| **R-02** | **Cobertura deficiente de QA:** Riesgo de liberar el PMV con fallos críticos debido a baja cobertura de pruebas automatizadas. | 2 | 3 | **6 (Mod)** | **Prevenir:** Obligatoriedad de programar pruebas en Jest y Cypress en paralelo a cada *Pull Request*. | **Cerrado.** El informe técnico de cobertura demuestra un **89.4% global** (92.3% en el motor). |
| **R-03** | **Costos imprevistos en la Nube:** Exceder los límites de lectura/escritura del Tier Gratuito (MongoDB Atlas / Vercel). | 2 | 2 | **4 (Mod)** | **Evitar:** Configuración de cabeceras de caché (HTTP 304) y proyecciones Mongoose `.select()` para optimizar consultas. | **Controlado (Cerrado).** Las peticiones cayeron drásticamente, protegiendo la capa gratuita (Costo: S/. 0.00). |
| **R-04** | **Complejidad Combinatoria (Explosión CSP):** Riesgo de colapsar la memoria del servidor de Node.js al validar cruces. | 3 | 3 | **9 (Crítico)** | **Mitigar:** Implementación de un Algoritmo Genético con poda temprana de restricciones y límite de iteraciones. | **Cerrado.** El motor CSP estabilizó sus resoluciones en un tiempo medio de **0.8 segundos**. |

---

### B. Riesgos Operativos Transferidos (Activos post-despliegue)
Eventos identificados durante las pruebas finales que, por su naturaleza operativa o de infraestructura, se heredan como "Activos" para el equipo de Operaciones que dará soporte al sistema en producción.

| ID | Riesgo Identificado | P | I | Prioridad (PxI) | Plan de Respuesta Aplicado / Recomendado | Estado Final (Trazabilidad) |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **R-05** | **Falsos negativos de "Horario No Encontrado":** Al fijar un límite de 300 iteraciones (para ahorrar CPU), horarios muy complejos podrían no converger a tiempo. | 2 | 3 | **6 (Mod)** | **Aceptar/Mitigar (Planificado):** Se programó un *Fallback* dinámico en la UI que permite al estudiante solicitar un segundo pase computacional (200 iteraciones más). | **Transferido a Operaciones.** Monitorizar frecuencia de reintentos en los logs. |
| **R-06** | **Bypass de reglas por Caché Desfasado:** Si un administrador actualiza el aforo de un aula, durante 60s la API puede seguir sirviendo datos obsoletos por caché. | 2 | 3 | **6 (Mod)** | **Prevenir (Planificado):** Se implementó una lógica de invalidación selectiva de caché (*Cache Purge*) cada vez que el administrador ejecuta un método PUT o POST. | **Transferido a Operaciones.** Requiere pruebas de estrés en matrícula masiva. |
| **R-07** | **Evasión de deudas por concurrencia web extrema:** Un estudiante moroso que envíe 50 peticiones simultáneas podría vulnerar el bloqueo del sistema (Condición de carrera). | 2 | 3 | **6 (Mod)** | **Evitar (Planificado):** Migración de los controladores de MongoDB a transacciones puras ACID que bloquean la lectura paralela del mismo documento. | **Transferido a Operaciones.** Verificado en QA, requiere supervisión en la nube comercial. |
| **R-08** | **Corrupción de datos en Adecuación de Mallas:** La automatización de cambios de currículos desfasados podría romper la integridad del estudiante. | 2 | 3 | **6 (Mod)** | **Evitar (Planificado):** Las adecuaciones de mallas requerirán siempre el estado "Pendiente de Aprobación Manual" por el Coordinador en el Dashboard. | **Transferido a Operaciones.** Regla de negocio estabilizada en la versión 3.0.0. |

---

## 3. Conclusión de la Gestión de Riesgos
El registro demuestra una gestión de riesgos madura y proactiva. Todos los riesgos críticos que amenazaban la viabilidad del Producto Mínimo Viable (PMV) fueron identificados tempranamente, abordados con contramedidas técnicas efectivas y cerrados formalmente. Los riesgos remanentes han sido analizados, cuentan con controles de mitigación implementados en el código y se encuentran debidamente documentados para el futuro equipo de soporte de la Universidad Continental.