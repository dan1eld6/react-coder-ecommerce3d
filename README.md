# 🛍️ 3Dworld - E-commerce con Realidad Extendida

## 🌟 Visión General del Proyecto

**3Dworld** es una innovadora plataforma de comercio electrónico construida con **React** y **Vite**, diseñada para ofrecer una experiencia de usuario moderna y atractiva. Este proyecto se enfoca en la implementación de características interactivas y visuales, como el posible uso de modelos 3D (dado el nombre del proyecto y el título `<title>3Dworld</title>` en `index.html`), junto con una robusta funcionalidad de backend proporcionada por Firebase.

## 🚀 Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías clave:

* **Frontend:**
    * **React 19.1.1:** Para construir la interfaz de usuario.
    * **Vite 7.1.2:** Como herramienta de construcción rápida y servidor de desarrollo.
    * **Bootstrap 5.3.8:** Para un diseño responsivo y estilizado.
    * **AOS (Animate On Scroll):** Para animaciones de desplazamiento (incluido en `index.html`).
    * **React Router DOM 7.9.2:** Para la gestión de rutas.
* **Backend & Servicios:**
    * **Firebase 12.4.0:** Utilizado para la base de datos (Firestore), autenticación, y almacenamiento (Storage).

---

## 🛠️ Instalación y Configuración

Sigue estos pasos para configurar y ejecutar el proyecto localmente.

### Prerrequisitos

* Node.js (LTS recomendado)
* npm o yarn

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL-DEL-REPOSITORIO]
    cd ecommerce3d
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas yarn
    # yarn install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo llamado `.env` en la raíz del proyecto y añade tus credenciales de Firebase. Estas variables son esenciales para la conexión con Firestore y otros servicios.


4.  **Ejecutar el proyecto:**
    Inicia el servidor de desarrollo con Vite.
    ```bash
    npm run dev
    # o si usas yarn
    # yarn dev
    ```

    El proyecto estará disponible en `http://localhost:[PUERTO]` (generalmente `http://localhost:5173`).

---

## 📂 Estructura de Directorios

Una estructura típica de un proyecto React/Vite:

ecommerce3d/ ├── public/ ├── src/ │ ├── components/ # Componentes reutilizables │ ├── pages/ # Vistas principales de la aplicación │ ├── context/ # Contextos de React para estado global │ ├── firebase/ # Archivo de configuración de Firebase │ └── ... ├── .env # Variables de entorno (¡NO debe subirse a GitHub!) ├── package.json ├── vite.config.js └── README.md


---

## 💻 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

* `npm run dev`: Ejecuta la aplicación en modo desarrollo.
* `npm run build`: Construye la aplicación para producción en la carpeta `dist`.
* `npm run lint`: Ejecuta ESLint para verificar errores de código.
* `npm run preview`: Sirve la compilación de producción localmente.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias, mejoras o quieres reportar un error, no dudes en abrir un *issue* o enviar un *pull request*.

---

## 📄 Licencia

Este proyecto está bajo la licencia **[PENDIENTE DE DEFINIR]**.