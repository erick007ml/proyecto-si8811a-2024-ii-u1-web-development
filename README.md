# Juegos Florales - Proyecto React

Este proyecto es una plataforma web para visualizar las participaciones y los ganadores de cada facultad en los Juegos Florales organizados por la universidad. Está construido utilizando **React** para la interfaz de usuario y tiene como objetivo presentar de manera clara y atractiva los resultados de las competencias.

## Descripción 📄

La aplicación permite a los usuarios navegar a través de las diferentes categorías de los Juegos Florales, ver las participaciones de las distintas facultades y conocer a los ganadores de cada una de las competencias. Además, presenta una interfaz moderna y fácil de usar, diseñada para resaltar la creatividad y talento de los participantes.

## Tecnologías Utilizadas 🚀

- **React** - Framework de JavaScript para la construcción de interfaces de usuario.
- **Vite** - Herramienta de desarrollo rápida para React.
- **Tailwind CSS** - Framework de estilos para una interfaz moderna y responsiva.

## Características ✨

- Visualización de participaciones de cada facultad.
- Presentación de los ganadores de cada categoría.
- Interfaz intuitiva con un diseño responsivo.
- Navegación por categorías y facultades.
- Búsqueda rápida y filtrado de resultados.

## Requisitos 📋

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes requisitos:

- **Node.js** (versión 14.0 o superior).
- **npm** (versión 6.0 o superior) o **yarn** como gestor de dependencias.
- **Git** para clonar el repositorio.

## Instalación 🔧

Para configurar el entorno de desarrollo en tu máquina local, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/UPT-FAING-EPIS/proyecto-si8811a-2024-ii-u1-web-development.git

## Instalación 🔧

Para configurar el entorno de desarrollo en tu máquina local, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/UPT-FAING-EPIS/proyecto-si8811a-2024-ii-u1-web-development.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd proyecto-si8811a-2024-ii-u1-web-development
   ```

3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
   o, si usas **yarn**:
   ```bash
   yarn install
   ```

## Comandos Disponibles 📦

- **`npm start`** - Inicia la aplicación en modo de desarrollo en [http://localhost:3000](http://localhost:3000).
- **`npm run build`** - Genera una compilación optimizada para producción.
- **`npm test`** - Ejecuta las pruebas unitarias del proyecto.
- **`npm run lint`** - Revisa el código en busca de errores y malas prácticas.

## Estructura del Proyecto 📁

```plaintext
proyecto-si8811a-2024-ii-u1-web-development/
├── .scannerwork/         # Archivos generados por el analizador de código
├── public/               # Archivos públicos como index.html y favicons
├── src/                  # Código fuente del proyecto
│   ├── api/              # Servicios y llamadas a API
│   │   └── services/
│   ├── assets/           # Imágenes y recursos estáticos (ej. fuentes)
│   ├── components/       # Componentes reutilizables de la aplicación
│   │   └── layouts/      # Layouts y estructuras de páginas
│   ├── constants/        # Constantes y configuraciones del proyecto
│   ├── hooks/            # Custom hooks de React
│   ├── pages/            # Páginas principales de la aplicación
│   ├── router/           # Configuración de rutas
│   ├── store/            # Gestión de estado (Redux o Context API)
│   │   ├── auth/
│   │   └── event/
│   └── utils/            # Funciones utilitarias y helpers
├── tests/                # Pruebas unitarias y de integración
│   └── components/
├── .dockerignore         # Ignorar archivos para Docker
├── .env.template         # Variables de entorno (plantilla)
├── .eslintrc             # Configuración de ESLint para la calidad del código
├── .gitignore            # Archivos y directorios ignorados por Git
├── babel.config.cjs      # Configuración de Babel para la transpilación de ES6
├── eslint.config.js      # Reglas personalizadas para ESLint
├── jest.config.cjs       # Configuración para pruebas con Jest
├── jest.setup.js         # Configuración inicial de Jest
├── jsconfig.json         # Configuración para la integración con editores
├── nginx.conf            # Configuración para despliegue con Nginx
├── package-lock.json     # Información sobre las dependencias instaladas
├── package.json          # Dependencias y scripts del proyecto
├── postcss.config.js     # Configuración para PostCSS
├── tailwind.config.js    # Configuración de Tailwind CSS
├── vite.config.js        # Configuración de Vite para el entorno de desarrollo
└── README.md             # Documentación del proyecto
```

## Cómo Usar el Proyecto 🖥️

1. Asegúrate de tener Docker instalado.
2. Abre una terminal.
3. Ejecuta el siguiente comando:

```bash
docker run -d -p 8080:80 --name juegosflorales ghcr.io/upt-faing-epis/proyecto-si8811a-2024-ii-u1-web-development/juegosflorales:latest
```
4. Abre [http://localhost:8080](http://localhost:8080/) para ver la aplicación en tu navegador.


```mermaid
%%{ init : { "theme" : "default" } }%%
%%{ config: { "themeVariables": { "actorFill": "#f9f", "actorStroke": "#f00" } } }%%
%%{flowchart: {usecase: {}}}%%

classDiagram
    class Usuario {
        <<Actor>>
    }
    
    class VisualizarHome
    class ConsultarEventos
    class VerEquipos
    class VerParticipantes
    class ExplorarLugares
    class AccederInformacion
    class IniciarSesion

    Usuario --> VisualizarHome
    Usuario --> ConsultarEventos
    Usuario --> VerEquipos
    Usuario --> VerParticipantes
    Usuario --> ExplorarLugares
    Usuario --> AccederInformacion
    Usuario --> IniciarSesion

    VisualizarHome --> ConsultarEventos
    VisualizarHome --> VerEquipos
    VisualizarHome --> VerParticipantes
    VisualizarHome --> ExplorarLugares
    VisualizarHome --> AccederInformacion
