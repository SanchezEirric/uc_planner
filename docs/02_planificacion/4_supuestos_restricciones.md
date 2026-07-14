# Registro de Supuestos (Assumption Log)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Fase de Gestión:** Control y Cierre del Proyecto  
**Elaborado por:** Erick Sanchez Vicente  
**Fecha de Actualización:** 14 de julio de 2026 (Versión Definitiva de Cierre)  

---

## 1. Propósito
Los supuestos son afirmaciones que el equipo asumió como verdaderas durante la fase de inicio o planificación sin contar con evidencia empírica. Este registro detalla el análisis de impacto de dichos supuestos, su relación con las decisiones arquitectónicas clave del proyecto y su validación final (Verdadero/Falso) durante la ejecución. Es un documento vital para futuros equipos de la universidad que hereden el producto.

---

## 2. Matriz Detallada de Supuestos e Impacto

| ID | Supuesto Inicial Asumido (Fase de Planificación) | Análisis de Impacto (Riesgo si resultaba ser Falso) | Relación con Decisiones Clave del Proyecto | Validación al Cierre (Resultado Final) |
| :--- | :--- | :--- | :--- | :--- |
| **SUP-01** | "El entorno de ejecución Node.js podrá manejar las permutaciones lógicas (CSP) de manera lineal en memoria sin colapsar." | **Alto Impacto.** Si era falso, el sistema consumiría toda la RAM y se caería al intentar cuadrar horarios complejos, inutilizando el PMV. | Forzó al equipo a realizar pruebas de estrés tempranas en el Sprint 2. Al fallar, se tomó la decisión crítica de abandonar la lógica iterativa lineal y **migrar a un Algoritmo Genético.** | **FALSO.** La suposición falló. Validó que para entornos académicos flexibles, los algoritmos heurísticos son obligatorios. |
| **SUP-02** | "La disponibilidad horaria de los docentes y los aforos de laboratorio no cambiarán una vez iniciado el proceso de generación." | **Alto Impacto.** Si cambiaban en tiempo real, el motor generaría horarios viables que al segundo siguiente serían inválidos (cruce de aulas). | Condicionó el diseño del flujo de datos, imponiendo un "Bloqueo de Escritura" (Freeze) en las colecciones de MongoDB referidas a docentes y aulas durante el cálculo. | **VERDADERO.** La institución emitió una regla de negocio donde la disponibilidad de recursos queda bloqueada días previos a la matrícula. |
| **SUP-03** | "Los recursos de la capa gratuita en la nube (Tier Free de MongoDB Atlas) soportarán el volumen de datos de prueba del PMV." | **Impacto Moderado.** Si era falso, el equipo tendría que asumir costos financieros no presupuestados para levantar bases de datos comerciales. | Determinó que el equipo implementara políticas extremas de **Green Software**, aplicando proyecciones restrictivas (`.select()`) para no malgastar bytes en transferencia. | **VERDADERO.** Gracias a las optimizaciones de código aplicadas, el consumo de red cayó un 94.7%, asegurando el uso del Tier Gratuito (Costo S/. 0.00). |
| **SUP-04** | "Los alumnos priorizarán bloques de clases continuos (minimizar ventanas de tiempo libres) frente a la selección específica de un docente." | **Impacto Moderado.** Si era falso, el motor optimizaría variables que el usuario final no valora, generando insatisfacción en la UX. | Moduló los pesos de la función de *Fitness* en el backend, dándole un peso moderado (10 pts) a la regla blanda de "Minimizar huecos de tiempo". | **VERDADERO.** Encuestas informales de validación UX demostraron que los estudiantes de la universidad prefieren horarios compactos para optimizar traslados. |

---

## 3. Conclusión y Aprendizaje para Futuros Proyectos
El análisis de impacto de los supuestos demuestra que **la arquitectura técnica no fue diseñada al azar**. Decisiones críticas como la adopción del Algoritmo Genético, el endurecimiento transaccional y la optimización de código ecológico nacieron directamente de la necesidad de validar (o mitigar el fallo) de los supuestos iniciales. La principal lección es que en ingeniería de sistemas complejos (CSP), **todo supuesto técnico debe ser sometido a pruebas de estrés** en los primeros Sprints para evitar refactorizaciones tardías inmanejables.
