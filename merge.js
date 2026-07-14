const fs = require('fs');
const path = require('path');

const files = [
    'docs/01_inicio/3_project_charter.md',
    'docs/01_inicio/9_Declaracion.md',
    'docs/05_cierre/1_Informe_Final.md',
    'docs/05_cierre/2_Lecciones_Aprendidas.md',
    'docs/04_seguimiento_control/3_Registros_Riesgos.md',
    'docs/04_seguimiento_control/4_Incidentes.md',
    'docs/04_seguimiento_control/5_Impedimentos.md',
    'docs/04_seguimiento_control/6_Registro_Defectos.md',
    'docs/02_planificacion/4_supuestos_restricciones.md',
    'docs/05_cierre/4_Manual_Capacitacion_Operaciones.md'
];

let masterContent = `# PORTAFOLIO FINAL DE CIERRE DE PROYECTO
**Proyecto:** Sistema de Generación Óptima de Horarios Académicos (Planner-UC)  
**Elaborado por:** Erick Sanchez Vicente  
**Fecha de Presentación:** 14 de julio de 2026  

---

## 🔗 ENLACE OFICIAL DEL REPOSITORIO (GITHUB)
Para revisión técnica, auditoría de código, historial de commits y evaluación del despliegue, por favor visite el siguiente enlace oficial del proyecto:

**Repositorio GitHub:** [INSERTE SU LINK DE GITHUB AQUÍ]  
*(Ejemplo: https://github.com/ErickSanchez/planner-uc)*

---

<br><br>

`;

files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        masterContent += content + '\n\n<br><br><br>\n\n';
    } else {
        masterContent += `## Faltante: ${file}\n\n`;
    }
});

fs.writeFileSync(path.join(__dirname, 'docs/05_cierre/Portafolio_Final_Consolidado.md'), masterContent);
console.log('Consolidated file created successfully at docs/05_cierre/Portafolio_Final_Consolidado.md');
