# Informe Final de Lecciones Aprendidas (Final Lessons Learned Report)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Fecha de Cierre:** 14 de julio de 2026  
**Elaborado por:** Erick Sanchez Vicente  

---

## 1. Propósito del Documento
El presente informe compila y consolida la información obtenida de las sesiones de retrospectiva (Scrum) realizadas a lo largo del ciclo de vida del proyecto **Planner-UC**. Su propósito principal es realizar un análisis crítico y reflexivo para identificar qué prácticas técnicas y metodológicas funcionaron bien (para que otros equipos las adopten) y qué errores o ineficiencias se cometieron (para evitarlos en futuras iniciativas), evidenciando así un verdadero aprendizaje organizacional.

---

## 2. Retrospectiva Crítica: ¿Qué salió bien? (Buenas Prácticas)
A lo largo de los 4 Sprints, el equipo identificó estrategias técnicas y de gestión que fueron fundamentales para el éxito del Producto Mínimo Viable (PMV):

1. **Uso de un Enfoque Heurístico (Algoritmo Genético):** En lugar de forzar un planificador lineal (CSP puro) que habría colapsado la memoria del servidor, la decisión de utilizar selección por torneo y mutaciones permitió resolver el complejo problema de horarios de la universidad en solo **0.8 segundos**. Esta es una práctica altamente recomendada para problemas de alta combinatoria.
2. **Implementación Temprana de Prácticas Green IT:** La integración de la librería `CO2.js` y el uso de compresión de red desde las primeras fases no solo redujo la huella de carbono en un 94.7%, sino que forzó al equipo a escribir código más limpio y eficiente, mejorando el rendimiento global.
3. **Flujo de Trabajo Estricto en Git (GitHub Flow):** Bloquear la rama `main` y obligar a realizar revisiones cruzadas en los *Pull Requests* evitó que el código roto llegara a producción.

---

## 3. Retrospectiva Crítica: ¿Qué no funcionó? (Errores y Desafíos)
No todo el proceso fue fluido; se identificaron fallas críticas que impactaron temporalmente la velocidad del equipo:

1. **Ambigüedad Temprana en el Backlog:** En los primeros Sprints, las historias de usuario carecían de criterios de aceptación técnicos (ej. no se especificó la transición obligatoria de 11 minutos). Esto generó retrabajo porque Frontend y Backend programaron validaciones incompatibles.
2. **Subestimación de la Concurrencia en la Base de Datos:** Se confió demasiado en la flexibilidad de MongoDB sin prever transacciones ACID. Cuando simulamos a varios alumnos matriculándose a la vez, el sistema asignó la misma aula a dos personas, quebrando la integridad de los datos.
3. **Pruebas Automatizadas Inestables (*Flaky Tests*):** Inicialmente, se usaron tiempos de espera fijos en milisegundos para Cypress. Al haber variaciones en la red, las pruebas fallaban sin motivo real, generando desconfianza en el proceso de QA.

---

## 4. Acciones Correctivas Aplicadas
Para mitigar los errores mencionados, el equipo aplicó de manera adaptativa las siguientes soluciones durante el proyecto:
* **Frente a la ambigüedad:** Se integró el diseño de "Contratos de API" (estructuras JSON predefinidas) antes de escribir una sola línea de código, alineando a ambos frentes de desarrollo.
* **Frente a la concurrencia:** Se refactorizaron los controladores de Mongoose para aplicar actualizaciones atómicas e indexación estricta, resolviendo el problema de las aulas duplicadas.
* **Frente al QA inestable:** Se eliminaron las esperas fijas y se programaron aserciones reactivas en Cypress (esperar a que el *spinner* de carga desaparezca o a que el componente de React cambie de estado).

---

## 5. La Importancia y Beneficios del Uso de "Skills"
Un factor diferenciador en la velocidad y calidad técnica del proyecto Planner-UC fue la identificación, desarrollo y aplicación estratégica de **Skills** (habilidades especializadas, tanto humanas como herramientas de automatización/IA):

* **Aceleración de la Curva de Aprendizaje (Hard Skills):** Desarrollar *skills* altamente especializados en tecnologías específicas (como CSS Grid para interfaces complejas o Mongoose para indexación avanzada) permitió al equipo resolver bloqueos en horas en lugar de días. La especialización técnica evita la mediocridad en el código.
* **Integración de Skills de Automatización:** El uso de herramientas y *skills* de asistencia automatizada (como linters, analizadores de código, motores de pruebas unitarias y asistentes de IA para refactorización) multiplicó la productividad. **Beneficio directo:** Redujo el tiempo dedicado a buscar errores de sintaxis (*debugging* manual) y permitió al equipo enfocarse en la arquitectura y la lógica de negocio (el algoritmo genético).
* **Adaptabilidad y Resolución de Problemas (Soft Skills):** Frente a los cambios abruptos en los requerimientos de la universidad (como las restricciones por bajo rendimiento académico a mitad del proyecto), el desarrollo de *skills* de comunicación asertiva y gestión del cambio garantizó que el equipo no se frustrara, sino que pivotara la solución de manera ágil.

El uso consciente de estos *skills* transformó a un grupo de estudiantes en un equipo de ingeniería de alto rendimiento.

---

## 6. Oportunidades de Mejora Aplicables (Para Futuros Equipos)
Para garantizar que otros proyectos de la Universidad Continental eviten nuestros tropiezos, proponemos las siguientes mejoras aplicables:

| Área de Mejora | Práctica a Evitar (El Error) | Práctica a Adoptar (La Solución) |
| :--- | :--- | :--- |
| **Arquitectura de Datos** | Desarrollar el Backend y Frontend de manera aislada sin definir cómo se comunicarán. | **Diseñar y congelar contratos de API (Swagger/Postman)** antes de iniciar cualquier fase de codificación. |
| **Aseguramiento de Calidad** | Dejar la configuración de entornos de pruebas (Jest/Vitest) para el último Sprint. | **Implementar TDD (Test-Driven Development)** o configurar los frameworks de testing en el Sprint 0. |
| **Gestión de la Nube** | Ignorar el impacto ecológico y los límites gratuitos de la nube mediante consultas excesivas. | **Forzar la compresión Gzip, usar cachés HTTP** y devolver solo los campos necesarios de la base de datos (Ej. `select()`). |

---

## 7. Evidencia de Aprendizaje Organizacional (Conclusión)
La principal lección consolidada por el equipo de **Planner-UC** es que el éxito del software no se mide únicamente por compilar sin errores, sino por la resiliencia del equipo frente a la incertidumbre. Superar el riesgo de una explosión combinatoria mediante un motor CSP genético, estabilizar la persistencia de datos concurrente y lograr una reducción validada del 94.7% en la huella de carbono digital demuestra un nivel de madurez técnica y metodológica superior. 

Estos errores corregidos y buenas prácticas documentadas quedan como activos de conocimiento institucional, listos para ser heredados y perfeccionados por las futuras generaciones de proyectos de la Universidad.
