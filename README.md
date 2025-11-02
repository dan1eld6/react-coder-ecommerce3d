# 🛍️ 3Dworld - E-commerce

## 🌟 Visión General del Proyecto

**3Dworld** es una innovadora plataforma de comercio electrónico construida con **React** y **Vite**, diseñada para ofrecer una experiencia de usuario moderna y atractiva. Este proyecto se enfoca en la implementación de características interactivas y visuales, junto con una robusta funcionalidad de backend proporcionada por Firebase.

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

```bash
ecommerce3d/
├── public/                     # Archivos estáticos públicos (favicon, index.html, imágenes)
├── src/
│   ├── components/             # 🧩 Componentes reutilizables (Navbar, Cards, etc.)
│   ├── pages/                  # 📄 Vistas principales (Home, Cart, Checkout, etc.)
│   ├── context/                # 🌐 Contextos globales (carrito, usuario)
│   ├── firebase/               # 🔥 Configuración y funciones Firebase
│   ├── App.jsx                 # Componente raíz
│   └── main.jsx                # Punto de entrada de React
│
├── .env                        # ⚙️ Variables de entorno (NO subir a GitHub)
├── package.json                # 📦 Dependencias y scripts
├── vite.config.js              # ⚡ Configuración de Vite
└── README.md     

---

## 💻 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

* `npm run dev`: Ejecuta la aplicación en modo desarrollo.
* `npm run build`: Construye la aplicación para producción en la carpeta `dist`.
* `npm run lint`: Ejecuta ESLint para verificar errores de código.
* `npm run preview`: Sirve la compilación de producción localmente.

---


## 📄 Licencia

Este proyecto está bajo la licencia **TODORUK DANIEL**.