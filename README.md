# DentCare: Sistema de Gestión Odontológica

Aplicación web diseñada para la gestión integral de una clínica odontológica, facilitando la administración de pacientes, odontólogos, especialidades y el seguimiento de turnos.

## Características Principales
* **Gestión de Profesionales:** Visualización de doctores, sus especialidades y horarios disponibles.
* **Sistema de Turnos:** Interfaz dinámica para agendar y gestionar consultas.
* **Persistencia de Datos:** Implementación de `localStorage` y carga de datos desde archivos JSON mediante `fetch`.
* **Interfaz Profesional:** Navegación fluida y notificaciones de usuario mediante *SweetAlert2*.

##  Tecnologías Utilizadas
* **Lenguajes:** HTML5, CSS3, JavaScript (ES6+).
* **Asincronismo:** Uso de `async/await` para el consumo de datos.
* **Librerías:** SweetAlert2 y FontAwesome.
* **Entorno:** Visual Studio Code.

##  Estructura del Proyecto
```text
/
├── css/            # Estilos y diseño responsivo
├── data/           # Archivos .json con la base de datos
├── js/             # Lógica (main.js, views.js, utils.js)
└── index.html      # Estructura principal