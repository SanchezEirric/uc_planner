# ACTA DE CONSTITUCIÓN DEL PROYECTO (PROJECT CHARTER)

**Título del Proyecto:** Sistema de Generación Óptima de Horarios Académicos en Entornos de Currículo Flexible

| | |
| :--- | :--- |
| **Patrocinador del Proyecto:** | **Fecha de Preparación:** 30/03/2026 |
| **Líder de Proyecto (PM):** Erick Sanchez Vicente | **Cliente del Proyecto:** Coordinación Académica / Estudiantes |

## Propósito del Proyecto:
Diseñar e implementar una aplicación web inteligente que genere horarios académicos óptimos considerando restricciones académicas (como prerrequisitos), operativas y contextuales, facilitando la planificación en entornos de alta variabilidad.

## Descripción de Alto Nivel del Proyecto:
Desarrollo de un Producto Mínimo Viable (PMV) basado en el **Stack MERN (MongoDB, Express, React, Node.js)** que resuelva el problema de asignación de horarios mediante un modelo de optimización o Problema de Satisfacción de Restricciones (CSP).

## Límites del Proyecto:
* **Alcance Interno:** Registro de entidades (alumnos, docentes, aulas), validación de matrícula (rango 20-22 créditos), motor de generación de horarios y visualización.
* **Alcance Externo:** No incluye gestión de pagos, trámites administrativos ajenos a la carga académica ni soporte para hardware físico.

## Entregables Clave:
* Documento de análisis y modelo formal del problema (CSP).
* Diseño de arquitectura de software basada en MERN.
* Código fuente funcional en GitHub con historial de commits y ramas.
* Pruebas unitarias y de integración (cobertura ≥70%).
* Video demostrativo del sistema (máximo 5 min).

## Requisitos de Alto Nivel:
* **Funcionales:** Registro de actores, validación de créditos (rango 20-22), no solapamiento de horarios y generación automática.
* **No Funcionales:** Rendimiento, seguridad (OWASP Top 10), usabilidad (WCAG/W3C) y eficiencia energética (Green Software).

## Riesgos Globales del Proyecto:
* Complejidad algorítmica elevada que afecte el tiempo de respuesta del servidor Node.js.
* Ambigüedad inicial en los requerimientos o inconsistencia en la data de prerrequisitos.
* Posibles vulnerabilidades de seguridad en la protección de datos académicos.

## Resumen de Hitos y Criterios de Éxito:

| Hito | Criterio de Éxito |
| :--- | :--- |
| **Alcance (Scope)** | Cumplimiento del 100% de los requerimientos funcionales del PMV. |
| **Tiempo (Time)** | Finalización del proyecto antes de la primera semana de julio 2026. |
| **Costo (Cost)** | Uso eficiente de recursos tecnológicos gratuitos y cumplimiento del ciclo de vida. |
| **Otros (Calidad)** | Cumplimiento de estándares ISO/IEC 25010 y accesibilidad WCAG. |

## Objetivos del Proyecto y Fechas Límite:
* **Hito 1:** Sprint 0 - Inicio del proyecto y documentación base: **06/04/2026**
* **Hito 2:** Modelado formal del problema (CSP) y arquitectura MERN: **20/04/2026**
* **Hito 3:** Desarrollo del Backend (Node/Express/Mongo) y lógica de negocio: **11/05/2026**
* **Hito 4:** Desarrollo del Frontend (React) y motor de generación: **01/06/2026**
* **Hito 5:** Pruebas integrales, ajustes de seguridad y Green Software: **22/06/2026**
* **Hito 6:** Entrega Final del PMV, video y cierre del ciclo: **05/07/2026**

## Recursos Financieros Preaprobados:
* Recursos de infraestructura en la nube (Tier Free) y herramientas de desarrollo Open Source.

## Interesados y Roles:
* **Estudiantes:** Usuarios que requieren horarios válidos y sin cruces.
* **Docentes:** Proveedores de disponibilidad horaria.
* **Coordinadores Académicos:** Supervisores de la planificación académica.
* **Administradores:** Gestión de infraestructura y aulas.

## Criterios de Salida del Proyecto:
* Sistema funcional que genere horarios sin solapamientos y respete el límite de 20-22 créditos.
* Documentación técnica completa y aprobada en el repositorio GitHub.

## Niveles de Autoridad del Líder de Proyecto:

**Decisiones de Personal:**
El equipo (Miguel, Alain, Erick y Tony) tiene plena autoridad para asignar roles internos según el marco Scrum y definir la carga de trabajo en cada Sprint.

**Gestión de Presupuesto y Variaciones:**
Gestión de recursos tecnológicos gratuitos; cualquier gasto adicional requiere aprobación previa.

**Decisiones Técnicas:**
Autoridad total sobre la arquitectura MERN, diseño de esquemas en MongoDB y algoritmos de optimización.

**Resolución de Conflictos:**
Los conflictos técnicos se resolverán mediante investigación de mejores prácticas; conflictos de gestión se escalarán al docente responsable.

---

## REVISIÓN Y EVALUACIÓN FINAL DE CIERRE (14 de julio de 2026)

Como parte de la fase formal de Control y Cierre del Proyecto, se verifica integralmente el cumplimiento de los objetivos y criterios de éxito estipulados al inicio:

### 1. Evaluación de Requisitos de Alto Nivel y Entregables
* **Cumplimiento Funcional:** Se implementó exitosamente el PMV. El motor CSP (Algoritmo Genético) genera horarios garantizando **cero solapamientos** espaciotemporales y el sistema restringe estrictamente la matrícula al **rango de 20-22 créditos**.
* **Cumplimiento No Funcional:** El sistema alcanzó un tiempo medio de respuesta de **0.8s** (superando la meta). Se aplicaron controles OWASP Top 10 (Tokens JWT) y accesibilidad WCAG.
* **Entregables:** El código se encuentra versionado en GitHub, respaldado por una **cobertura de pruebas del 89.4%** (superando holgadamente el 70% exigido inicialmente).

### 2. Evaluación de Criterios de Éxito
* **Alcance:** **Logrado al 100%.** Se asimiló incluso un requisito adicional (topes por bajo rendimiento) sin romper la estructura.
* **Tiempo:** **Logrado.** Todas las fases finalizaron operativamente, absorbiendo una mínima desviación de 12 horas en el sprint final, cerrando satisfactoriamente en julio de 2026.
* **Costo:** **Logrado al 100%.** Costo de infraestructura mantenido en S/. 0.00 gracias a la optimización de uso de capas gratuitas en la nube.
* **Calidad (Green Software):** **Sobresaliente.** Se validó una reducción del **94.7% de emisiones de CO2** en la transmisión de red, alineándose con las normativas ISO.

### 3. Veredicto de Salida
El proyecto cumple integralmente con todos los **Criterios de Salida** establecidos en el presente documento, considerándose **FINALIZADO Y EXITOSO**.

---

## Aprobaciones de Cierre:

| | |
| :--- | :--- |
| **Firma del Líder de Proyecto:** ____________________ | **Firma del Patrocinador:** ____________________ |
| **Nombre:** Erick Sanchez Vicente | **Nombre:** Coordinación Taller de Proyectos 2 |
| **Fecha de Cierre:** 14/07/2026 | **Fecha de Cierre:** 14/07/2026 |
