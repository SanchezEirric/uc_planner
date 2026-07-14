# Registro de Defectos (Defect Log)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Fase de Gestión:** Control y Cierre del Proyecto  
**Elaborado por:** Erick Sanchez Vicente  
**Fecha de Actualización:** 14 de julio de 2026 (Versión Definitiva de Cierre)  

---

## 1. Propósito
A diferencia de los incidentes (problemas generales), este registro consolida exclusivamente los **defectos de código (bugs)** detectados durante las fases de pruebas unitarias, de integración y de usuario (QA). Se clasifica su severidad, trazabilidad y la evidencia técnica de su corrección.

---

## 2. Registro Completo de Defectos y Correcciones Validadas

| ID | Componente / Módulo Afectado | Descripción del Defecto Detectado | Clasificación / Severidad | Estado | Corrección Técnica (Resolución) | Evidencia de Validación (Trazabilidad) |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| **DEF-01** | `ScheduleGrid.jsx` (Frontend React) | El calendario renderizaba celdas superpuestas y rotas visualmente si una asignatura tenía 4 créditos (bloque dividido de 3h + 1.5h). | **Alta** (Rompe la UI) | **Cerrado** | Se ajustó la lógica de cálculo de *Row-Span* en CSS Grid, normalizando las coordenadas enviadas desde la API hacia componentes divisibles. | Suite de pruebas E2E (Cypress) validadas visualmente sin solapamientos en la grilla. |
| **DEF-02** | `genetic.js` (Motor Backend) | La función de *Fitness* no penalizaba ni descartaba combinaciones donde la suma total era de 19 créditos (violando la regla estricta de 20-22). | **Crítica** (Fallo funcional) | **Cerrado** | Se introdujo una función de *Poda Algorítmica* previa al inicio de las mutaciones. El bucle ahora descarta sumatorias inválidas antes de iterar. | Pruebas unitarias (Jest) arrojaron 100% de aserción comprobando el rechazo automático de mallas < 20 créditos. |
| **DEF-03** | `authController.js` (Seguridad) | El Token JWT no se invalidaba correctamente en el backend tras ejecutar el flujo de "Cerrar Sesión" (Logout). | **Media** (Vulnerabilidad) | **Cerrado** | Se implementó una arquitectura de *Blacklist* de tokens en caché temporal hasta su expiración natural, bloqueando accesos post-logout. | Auditoría de seguridad local superada; la API rechaza peticiones (HTTP 401) con tokens pertenecientes a sesiones cerradas. |
| **DEF-04** | Base de Datos (Mongoose) | Peticiones concurrentes creaban IDs duplicados para secciones temporales durante el proceso de matriculación masiva. | **Alta** (Corrupción de BD) | **Cerrado** | Refactorización de la Capa de Acceso a Datos. Inyección de índices únicos compuestos (`{id_docente: 1, hora: 1}`) a nivel de MongoDB. | Simulaciones de estrés con *Artillery.io* generaron 0 colisiones en la creación de secciones bajo alta concurrencia. |

---

## 3. Conclusión de Calidad (QA)
Al cierre del proyecto, el catálogo de defectos (Bug Backlog) se encuentra **reducido a cero (0)** en severidades Críticas, Altas y Medias. La trazabilidad de cada corrección está directamente validada por el incremento en la cobertura global de pruebas al **89.4%**, garantizando una línea base de software madura y lista para su despliegue institucional.
