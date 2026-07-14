# Registro de Impedimentos (Impediment Log)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Fase de Gestión:** Control y Cierre del Proyecto  
**Elaborado por:** Erick Sanchez Vicente  
**Fecha de Actualización:** 14 de julio de 2026 (Versión Definitiva de Cierre)  

---

## 1. Propósito
Este registro documenta los obstáculos (bloqueos externos o internos) que frenaron o amenazaron el progreso del equipo durante los Sprints. A diferencia de un defecto de código, un impedimento afecta la capacidad operativa del equipo. Se demuestra la **gestión activa** mediante el análisis de impacto y la resolución efectiva de cada obstáculo.

---

## 2. Matriz de Impedimentos y Resoluciones

| ID | Obstáculo Crítico Identificado | Análisis de Impacto (Riesgo en el Avance) | Responsable de Resolución | Acción de Mitigación (Resolución Efectiva) | Estado Final |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **IMP-01** | **Demora en el suministro de Data Institucional:** La universidad se retrasó 2 semanas en proveer el dataset real de aulas y mallas curriculares. | Bloqueo total del desarrollo del Sprint 1 (Base de Datos) y retraso en las pruebas de estrés del algoritmo. | Miguel Castillo / Alain Aliaga | **Resolución efectiva:** El equipo diseñó y programó un *Mock Generator* (generador de datos ficticios en JSON) con la misma estructura esperada. El desarrollo continuó sin interrupciones y la data real se inyectó de forma transparente en el Sprint 3. | **Resuelto** |
| **IMP-02** | **Brecha cultural y de horarios interregional:** Integrantes del equipo distribuidos en distintas sedes tenían horarios laborales incompatibles para las reuniones diarias (Daily Scrum). | Desalineación técnica, asincronía en el código subido y retraso en las revisiones de *Pull Requests*. | Miguel Castillo (SM) | **Resolución efectiva:** Implementación de *Dailies Asíncronos* obligatorios vía Slack/Discord. Todos los acuerdos se centralizaron estrictamente en el Product Backlog (Jira), eliminando dependencias de comunicación síncrona. | **Resuelto** |
| **IMP-03** | **Restricción de hardware en nube gratuita:** El entorno de Vercel/Render cortaba las peticiones HTTP que duraban más de 10 segundos, bloqueando las pruebas de carga masiva del PMV. | Imposibilidad de auditar y validar el comportamiento del sistema bajo estrés real de matrícula. | Tony Ulloa (Product Master) | **Resolución efectiva:** Para la fase estricta de QA, se migró temporalmente la carga de estrés a un clúster de Docker local. Paralelamente, se optimizó el algoritmo genético para que las respuestas bajaran a 0.8s, evadiendo el límite de la nube. | **Resuelto** |

---

## 3. Conclusión de Gestión Activa
La capacidad de adaptación del equipo (generación de datos *mock*, comunicación asíncrona estricta y uso de contenedores locales) garantizó que **ningún impedimento externo lograra quebrar la línea base del cronograma**. La gestión proactiva permitió mantener la velocidad (*Velocity*) del equipo constante, absorbiendo los choques operativos de forma transparente.