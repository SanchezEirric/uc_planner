# Registro de Incidentes o Problemas (Issue Log)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Fase de Gestión:** Control y Cierre del Proyecto  
**Fecha de Actualización:** 14 de julio de 2026 (Versión Definitiva de Cierre)  

---

## 1. Propósito del Registro
Este documento consolida los problemas reales (Issues) que ocurrieron materialmente durante la ejecución del proyecto, afectando el desempeño o la estabilidad del desarrollo. El registro demuestra la capacidad de respuesta del equipo para aplicar acciones correctivas inmediatas, asegurando la entrega del Producto Mínimo Viable (PMV) libre de bloqueos operativos.

---

## 2. Matriz de Incidentes y Resoluciones (Estado al Cierre)

El registro se presenta estructurado y alineado con el seguimiento real de las iteraciones (Sprints), evidenciando la resolución definitiva y el control efectivo de cada incidente:

| ID | Descripción del Incidente Real (Problema) | Prioridad | Responsable Asignado | Acción Correctiva Aplicada (Solución) | Evidencia de Control Efectivo | Estado Final |
| :--- | :--- | :---: | :--- | :--- | :--- | :---: |
| **INC-01** | **Bug de Persistencia de Sesiones en React:** Al recargar la página del sistema, los usuarios perdían su autenticación y fallaba la redirección asíncrona hacia el Dashboard del perfil. | **Alta** | Alain Aliaga (PO / Frontend) | Se reestructuró el flujo de autenticación, implementando una limpieza explícita y forzada del `localStorage` junto con el manejo seguro de estados globales en React. | Las pruebas E2E en Cypress completan flujos de sesión sin cierres abruptos al refrescar. | **Cerrado** |
| **INC-02** | **Inconsistencias Multiusuario (DB):** Durante las pruebas de estrés simulando matrícula, las peticiones concurrentes causaron desalineación de datos (dos alumnos reservaban el mismo cupo en laboratorio). | **Alta** | Miguel Castillo (SM / Backend) | Refactorización crítica de la capa de acceso a datos (DAL) en Mongoose, aplicando consultas atómicas e indexación estricta para asegurar un bloqueo concurrente efectivo. | El clúster de MongoDB Atlas mantiene coherencia de datos bajo simulación de 100 peticiones simultáneas. | **Cerrado** |
| **INC-03** | **Riesgo Inminente de *Out of Memory*:** Las primeras ejecuciones del motor CSP lineal saturaron la memoria RAM del servidor Node.js al validar cientos de cruces de aulas. | **Alta** | Tony Ulloa (Product Master) | Sustitución del modelo exhaustivo por el Algoritmo Genético, inyectando un límite máximo estricto de 500 iteraciones y técnicas de poda heurística temprana. | El tiempo de respuesta de la API descendió dramáticamente, estabilizándose en **0.8 segundos**. | **Cerrado** |
| **INC-04** | **Conflictos del Entorno QA (CI/CD):** Errores de sintaxis y bloqueos de compilación al integrar la suite de pruebas unitarias Jest con el entorno moderno de Vite (ES Modules). | **Media** | Tony Ulloa (QA / Backend) | Estandarización de rutas de importación y desacoplamiento total de la configuración mediante un archivo externo y exclusivo `jest.config.js`. | La suite automatizada compila sin fallos, reportando un **89.4% de cobertura de código**. | **Cerrado** |
| **INC-05** | **Peticiones "Basura" a la API:** El frontend de React realizaba llamadas redundantes a `/api/cursos` de forma injustificada, generando tráfico inútil y consumo de recursos. | **Baja** | Erick Sanchez (PO / Frontend) | Implementación de caché dinámica en el servidor (cabeceras `Cache-Control` devolviendo código HTTP 304 Not Modified). | Las auditorías con CO2.js validaron una reducción del tráfico de red, mitigando el gasto energético. | **Cerrado** |

---

## 3. Conclusión de Control Efectivo
Al momento del cierre técnico del proyecto, se certifica que el **100% de los incidentes bloqueantes y funcionales han sido resueltos**. No existen problemas o *issues* críticos activos en la línea de código base (Versión 3.0.0). El equipo aplicó el control de calidad riguroso exigido por el patrocinador institucional, garantizando un producto maduro y listo para su paso a entorno de producción.