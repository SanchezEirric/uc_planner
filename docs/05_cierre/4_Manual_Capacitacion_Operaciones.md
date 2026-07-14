# Manual de Capacitación y Operaciones (Training & Operations Handover)

**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Audiencia:** Equipo de Soporte TI (Operaciones) y Usuarios Finales (Coordinadores/Estudiantes)  
**Fecha de Emisión:** 14 de julio de 2026  
**Versión del Sistema:** 3.0.0 (Línea Base PMV)  

---

## 1. Propósito del Documento
Este manual constituye la documentación oficial de capacitación para facilitar la transición del producto de software **Planner-UC** desde el equipo de ingeniería (desarrollo) hacia el equipo de Operaciones TI de la Universidad Continental. Su objetivo es brindar material didáctico, claro y enfocado en el soporte técnico y en la experiencia de los usuarios finales para garantizar la continuidad operativa del sistema.

---

## 2. Guía Técnica para el Equipo de Operaciones (Soporte TI)

El sistema opera bajo una arquitectura **MERN** (MongoDB, Express, React, Node.js). El mantenimiento y soporte diario debe considerar los siguientes aspectos críticos:

### A. Despliegue y Variables de Entorno
Para levantar el sistema en un nuevo servidor (o reiniciarlo), el equipo de TI debe asegurarse de contar con el archivo `.env` en el directorio backend con las siguientes claves obligatorias:
```env
PORT=5000
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster.mongodb.net/planner_uc
JWT_SECRET=tu_firma_criptografica_aqui
```
**Comando de inicio en producción:**
Se recomienda el uso de un gestor de procesos como PM2 para mantener Node.js activo:
```bash
cd backend
pm2 start server.js --name "planner-uc-api"
```

### B. Mantenimiento del Algoritmo Genético (Configuración CSP)
El corazón del sistema es el archivo `backend/src/engine/genetic.js`. Si en el futuro la universidad adquiere servidores mucho más potentes, el equipo de TI puede aumentar la precisión matemática del sistema modificando los parámetros heurísticos:
*   **Límite de Iteraciones (Max Generations):** Actualmente fijado en `300` para ahorrar memoria. Si los servidores tienen más de 16GB de RAM, se puede subir a `500` o `1000` para horarios extremadamente complejos.
*   **Tasa de Mutación:** Fijada en `0.05` (5%). **NO** se recomienda alterar este valor, ya que tasas más altas destruyen los horarios válidos generados.

### C. Gestión de Caché y Base de Datos
*   **Importante:** Se ha configurado una política activa de mitigación de emisiones de CO2 mediante peticiones cacheadas (HTTP 304). Si TI actualiza un aula directamente en MongoDB, el cambio tardará aproximadamente **60 segundos** en reflejarse en las pantallas de los alumnos.

---

## 3. Guía Didáctica para el Usuario Final (Estudiantes)

### Paso 1: Selección de Carga Académica
1.  Ingresa a tu portal y dirígete a **"Planificador de Horarios"**.
2.  En el panel izquierdo, haz clic sobre los cursos que deseas llevar.
3.  **Regla de Negocio:** El sistema sumará automáticamente los créditos. El botón **"Generar Horario Óptimo"** permanecerá bloqueado y en color gris hasta que tu selección sume un mínimo de **20 créditos** y un máximo de **22 créditos**.

### Paso 2: Visualización de la Grilla (Calendario)
1.  Al hacer clic en Generar, el sistema tardará aproximadamente 1 segundo en calcular millones de posibilidades.
2.  Se desplegará una grilla visual (Lunes a Sábado). 
3.  **Garantía:** El sistema te garantiza que **ninguno de los bloques mostrados se cruza**. Si hay bloques más largos, significa que esa asignatura tiene 4 o más créditos (Ej: Laboratorios).

---

## 4. Troubleshooting (Resolución Rápida de Errores para Mesa de Ayuda)

Esta es la tabla de diagnóstico rápido para que la Mesa de Ayuda de TI responda a las consultas de los estudiantes:

| Mensaje / Código de Error en Pantalla | Significado (Causa Raíz) | Acción de Soporte / Respuesta al Estudiante |
| :--- | :--- | :--- |
| **Error 401 (No Autorizado / Sesión Expirada)** | El Token de seguridad del alumno ha superado las 2 horas de vida útil. | Indicar al alumno que refresque la página (F5) para forzar un nuevo inicio de sesión. |
| **"Horario no encontrado. Seleccione otra combinación"** | El Algoritmo llegó al intento 300 y no halló ningún horario viable matemáticamente (ej. cursos que solo se dictan a la misma hora). | Pedir al alumno que elimine 1 curso electivo o solicitar a coordinación académica que abra nuevas secciones. |
| **Grilla en blanco / Pantalla congelada** | Falla de conexión a internet del alumno o caída temporal del clúster de MongoDB Atlas. | Revisar los logs de PM2 (`pm2 logs`). Si el backend está activo, es problema de red del cliente. |
| **Botón "Generar Horario" no se activa** | El estudiante tiene 19 o 23 créditos seleccionados, rompiendo la regla institucional. | Explicar al estudiante que debe ajustar su selección estrictamente entre 20 y 22 créditos. |

---

## 5. Control de Aprobación de Capacitación
El presente manual se adjunta como Anexo Técnico Final del proyecto y se declara transferido al Área de Operaciones TI.

* **Elaborado por:** Erick Sanchez Vicente.
* **Aprobado para Transición a Producción:** 14 de julio de 2026.
