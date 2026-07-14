# Declaración de Trabajo (Statement of Work - SOW)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Elaborado por:** Erick Sanchez Vicente  
**Cliente / Patrocinador:** Universidad Continental - Coordinación Académica  
**Fecha de Emisión/Cierre:** 14 de julio de 2026  

---

## 1. Propósito del Documento
El presente documento tiene carácter contractual y formaliza los términos técnicos y operativos bajo los cuales el equipo de desarrollo entregó el Producto Mínimo Viable (PMV) del proyecto **Planner-UC**. Sirve como instrumento definitivo para verificar que todo el trabajo pactado está completo y validado antes de firmar el cierre del contrato.

---

## 2. Alcance del Trabajo (Scope of Work)
El proveedor (equipo de desarrollo) se comprometió a diseñar, codificar, probar y desplegar un sistema basado en el Stack MERN capaz de resolver el Problema de Satisfacción de Restricciones (CSP) para la generación de horarios. 
**El trabajo incluyó:**
* Construcción del motor de optimización (Algoritmo Genético) en Node.js.
* Creación de API RESTful segura con Express y base de datos MongoDB Atlas.
* Interfaz de usuario responsiva (SPA) en React para los estudiantes.
* Aplicación de auditorías de calidad (QA), Green Software (CO2.js) y seguridad perimetral (OWASP).

**Exclusiones (Fuera del alcance):**
* No se incluyó mantenimiento de hardware de servidores.
* No se incluyeron integraciones con la pasarela de pagos financieros de la universidad.

---

## 3. Cronograma y Tiempos de Ejecución
El proyecto se ejecutó en estricto cumplimiento con el cronograma acordado de 4 Sprints, totalizando un esfuerzo de ingeniería de **332 horas-hombre** en el siguiente periodo:
* **Fecha de Inicio Contractual:** 06 de abril de 2026 (Sprint 0).
* **Fecha Límite de Entrega:** Primera semana de julio de 2026.
* **Fecha Real de Cierre Técnico:** 14 de julio de 2026.

---

## 4. Entregables Comprometidos y Entregados
El contrato exigió los siguientes artefactos, los cuales han sido transferidos al cliente:

| ID | Entregable (Deliverable) | Descripción Técnica (Formato) | Estado |
| :--- | :--- | :--- | :---: |
| **ENT-01** | **Código Fuente Completo** | Repositorio GitHub con todo el Stack MERN (Frontend, Backend, Motor Genético) e historial de *Commits* semánticos. | **Entregado** |
| **ENT-02** | **Documento de Arquitectura** | Modelado formal del problema CSP y diagramas de componentes (Carpeta `docs/`). | **Entregado** |
| **ENT-03** | **Suite de QA Automatizada** | Scripts de pruebas unitarias (Jest) y de extremo a extremo (Cypress). | **Entregado** |
| **ENT-04** | **Auditoría de Sostenibilidad** | Módulo *Environmental Tracker* midiendo emisiones de CO2 de las peticiones de la API. | **Entregado** |
| **ENT-05** | **Video Demostrativo** | Prueba de concepto visual y funcional del PMV operando bajo estrés simulado. | **Entregado** |

---

## 5. Criterios de Aceptación Contractual (Validación)
Para declarar el contrato como "Completado", el software debió superar los siguientes criterios de aceptación sin ambigüedades. **Todos han sido auditados y superados:**

### A. Funcionales y de Reglas de Negocio
* **CA-01 (Cero Solapamientos):** El motor genético no debe generar bajo ninguna circunstancia horarios donde un alumno deba estar en dos aulas a la vez o un docente dicte dos cursos al mismo tiempo. **(Validado con 100% de éxito en entorno local).**
* **CA-02 (Rango de Créditos):** El sistema debe bloquear la inscripción si el alumno selecciona menos de 20 o más de 22 créditos. **(Validado mediante aserciones de Jest y Cypress en Frontend/Backend).**

### B. Técnicos y Estándares de Ingeniería
* **CA-03 (Calidad ISO 25010):** El motor genético debe retornar una solución matemática válida en un tiempo **menor a 2.0 segundos**. **(Validado: Convergencia promedio alcanzada en 0.8s).**
* **CA-04 (Seguridad OWASP):** Cero accesos directos permitidos a rutas protegidas sin validación de JWT, y prevención activa contra inyecciones NoSQL. **(Validado mediante escaneo de seguridad Mongoose).**
* **CA-05 (Accesibilidad WCAG 2.1):** Nivel AA de legibilidad. **(Validado mediante atributos `aria-label` en la grilla visual de horarios).**
* **CA-06 (Sostenibilidad):** Demostrar reducción medible en la transferencia de bytes en la red. **(Validado: Reducción certificada del 94.7% en consumo de CO2 por `CO2.js`).**

---

## 6. Firmas de Cierre Contractual (Sign-Off)

Por la presente, ambas partes declaran que los entregables y criterios de aceptación descritos en este documento (SOW) han sido verificados satisfactoriamente. Se da por concluido el trabajo técnico y se autoriza el cierre del contrato de desarrollo del PMV Planner-UC.

| | |
| :--- | :--- |
| **Por el Proveedor (Equipo de Desarrollo):** ____________________ | **Por el Cliente (Patrocinador):** ____________________ |
| **Nombre:** Erick Sanchez Vicente | **Nombre:** Coordinación Taller de Proyectos 2 |
| **Fecha de Aceptación:** 14/07/2026 | **Fecha de Aceptación:** 14/07/2026 |
