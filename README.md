# Librería TAO - Ecommerce

Librería TAO es una aplicación web de ecommerce diseñada para la venta de productos de librería y artículos ecológicos. Ofrece una experiencia completa para el usuario, permitiéndole navegar por los productos, gestionar su cuenta personal y realizar compras de forma sencilla. Para los administradores, la plataforma incluye herramientas robustas para la gestión de productos y categorías.

## ✨ Características Principales

- **Autenticación de Usuarios:** Completo sistema de registro, inicio de sesión, gestión de perfil y opción de eliminación de cuenta.
- **Roles de Usuario:** Soporte para roles de "Usuario" y "Administrador" con permisos diferenciados.
- **Gestión de Productos:** Funcionalidades CRUD (Crear, Editar, Eliminar) para productos, incluyendo la subida de imágenes.
- **Gestión de Categorías:** Permite crear y eliminar categorías para organizar los productos.
- **Carrito de Compras Persistente:** El carrito de compras se mantiene guardado en localStorage para una experiencia continua.
- **Filtrado y Búsqueda:** Herramientas para encontrar productos fácilmente por filtros y búsquedas.
- **Panel de Administración:** Interfaz dedicada para la gestión de productos y categorías por parte de los administradores.
- **Diseño Responsive:** Interfaz adaptable a diferentes dispositivos, garantizando una experiencia de usuario amigable.

## 📂 Estructura del Proyecto

El proyecto libreria-tao está organizado en una arquitectura de cliente-servidor, dividida de la siguiente manera:

libreria-tao-main/

- client - Frontend desarrollado con React
- src - Código fuente de React
- public - Archivos estáticos
  
- src - Backend desarrollado con Node.js y Express
- controllers - Lógica de controladores para las rutas
- models - Definición de esquemas de datos (Mongoose)
- routes - Definición de rutas API
- middlewares - Middlewares personalizados (autenticación, validación)
- schemas - Esquemas de validación de datos (Zod)

- uploads - Directorio para almacenar imágenes subidas de productos
- package.json - Configuración de dependencias del Backend
- package.json - Configuración de dependencias del Frontend



## 🚀 Instalación y Uso

Sigue estos pasos para poner en marcha la aplicación en tu entorno local:

### 1. Clona el repositorio


git clone https://github.com/tuusuario/libreria-tao-main.git
cd libreria-tao-main

### 2. Instala las dependencias

*Backend*

Navega al directorio raíz del proyecto e instala las dependencias del backend:

*Frontend*

Navega al directorio client e instala las dependencias del frontend:

### 3. Configura la base de datos

Asegúrate de tener MongoDB corriendo localmente. La aplicación está configurada para conectarse a mongodb:
`//localhost/merndb` por defecto. Si necesitas cambiar esta URL, puedes hacerlo en el archivo src/db.js.

### 4. Ejecuta el Backend

Desde el directorio raíz del proyecto, inicia el servidor backend:

El backend estará disponible en http://localhost:3000.

### 5. Ejecuta el Frontend

Desde el directorio client, inicia la aplicación frontend:

El frontend se ejecutará en http://localhost:5173.

### 6. Accede a la aplicación

Abre tu navegador y navega a http://localhost:5173 para empezar a usar la aplicación.

## 🧑‍💻 Uso de la Aplicación

Usuarios pueden registrarse, iniciar sesión, explorar el catálogo de productos, añadirlos al carrito de compras y finalizar el proceso de compra.
Administradores pueden acceder al panel de administración para crear, editar y eliminar productos, así como gestionar las categorías disponibles en la tienda.

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido utilizando un stack MERN moderno:

**Frontend**

- **React:** Biblioteca para construir interfaces de usuario interactivas.
- **Vite:** Herramienta de construcción rápida para proyectos web.
- **Axios:** Cliente HTTP basado en promesas para el navegador y Node.js.
- **CSS:** Para el estilizado y diseño de la interfaz.

**Backend**

- **Node.js:** Entorno de ejecución para JavaScript del lado del servidor.
- **Express:** Framework de aplicación web para Node.js.
- **MongoDB:** Base de datos NoSQL orientada a documentos.
- **Mongoose:** Modelado de objetos MongoDB para Node.js.
- **Multer:** Middleware para Node.js para el manejo de multipart/form-data (principalmente para la subida de archivos).
- **Zod:** Librería de declaración y validación de esquemas.
- **JWT (JSON Web Tokens):** Para la autenticación segura.
- **bcryptjs:** Para el hashing de contraseñas.

## ✍️ Autor

*Edgard1312*
