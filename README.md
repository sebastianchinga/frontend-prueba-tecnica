
# TareaFy - Frontend 🎯

Este es el frontend de **TareaFy**, una aplicación web creada con **React** que permite a los usuarios gestionar sus tareas diarias de manera fácil e intuitiva. Se conecta a una API REST construida en Node.js para manejar la lógica del backend.


## 🚀 Tecnologías utilizadas

- React
- Axios
- React Router DOM
- Tailwind CSS (si aplica)
- Vite (si usas Vite como bundler)
## Installation

Instala todas las dependencias

```bash
  npm install
```

Luego completa los variables con tus credenciales

```bash

# URL del backend
VITE_URL_BACKEND=http://localhost:4000/api

```


## Usage/Examples

Levanta el servidor en modo desarrollo
```bash
npm run dev
```

El servidor estará disponible por defecto en:
```bash
http://localhost:5173
```


## 📌 Funcionalidades del frontend

Registro de nuevos usuarios

Login y autenticación con JWT

Confirmación de cuentas por correo

CRUD de tareas (crear, editar, eliminar, marcar como completada)

Vista protegida según el estado del usuario

Integración con backend mediante Axios