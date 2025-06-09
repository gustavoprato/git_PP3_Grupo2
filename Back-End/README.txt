# Back-End - Pedidos Online Food Truck

Este es el servidor back-end del proyecto **Pedidos Online para un Food Truck**, desarrollado con **Node.js**, **Express** y **Nodemailer**.

## 🚀 Funcionalidades

- Registro de usuarios con email y contraseña.
- Envío automático de correo de confirmación con Nodemailer.
- Confirmación de cuenta a través de un enlace.
- Inicio de sesión con verificación de cuenta confirmada.

## 📦 Tecnologías utilizadas

- Node.js
- Express
- Nodemailer
- CORS

## 📁 Estructura

Back-End/
├── server.js # Lógica del servidor
├── package.json # Dependencias y configuración
├── package-lock.json # Versiones exactas

markdown
Copiar código

## ⚙️ Instalación

1. Cloná el repositorio (o asegurate de estar en el proyecto raíz).
2. Entrá a la carpeta del back-end:

```bash
cd Back-End
Instalá las dependencias:

bash
Copiar código
npm install
▶️ Ejecución
Para iniciar el servidor local:

bash
Copiar código
node server.js
El servidor se ejecutará en:
http://localhost:3000

📬 Configuración del correo
Este servidor usa Nodemailer con Gmail. En el archivo server.js, asegurate de reemplazar estas líneas:

js
Copiar código
auth: {
  user: "TU_CORREO@gmail.com",
  pass: "TU_CONTRASEÑA_DE_APLICACIÓN"
}
⚠️ Debés usar una contraseña de aplicación generada desde tu cuenta de Google (no tu contraseña real).
