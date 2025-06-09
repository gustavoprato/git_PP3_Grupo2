const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulación de usuarios registrados en memoria
let usuarios = [];

// 📧 Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "federicoagustinestudia@gmail.com", // tu correo real
    pass: "unhh qpdc mxzf vhgw"               // contraseña de aplicación de 16 caracteres
  }
});

// 📩 Registro de usuario
app.post("/api/register", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Faltan campos");
  }

  const usuarioExistente = usuarios.find(u => u.email === email);
  if (usuarioExistente) {
    return res.status(409).send("El usuario ya existe");
  }

  const usuario = { email, password, confirmed: false };
  usuarios.push(usuario);

  const token = encodeURIComponent(email);
  const link = `http://localhost:3000/api/confirm/${token}`;
  const mensaje = `
    <p>Gracias por registrarte.</p>
    <p>Hacé clic en el siguiente enlace para confirmar tu cuenta:</p>
    <a href="${link}">Confirmar cuenta</a>
  `;

  transporter.sendMail({
    from: "federicoagustinestudia@gmail.com",
    to: email,
    subject: "Confirmá tu cuenta",
    html: mensaje
  }, (error, info) => {
    if (error) {
      console.error("❌ Error al enviar el correo:", error);
      return res.status(500).send("Error al enviar correo: " + error.message);
    }

    console.log("✅ Correo enviado a:", email);
    res.send("Usuario registrado y correo enviado");
  });
});

// ✅ Confirmación de cuenta desde el enlace
app.get("/api/confirm/:token", (req, res) => {
  const email = decodeURIComponent(req.params.token);
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    return res.status(400).send("Token inválido");
  }

  usuario.confirmed = true;
  console.log(`✅ Usuario confirmado: ${email}`);
  res.redirect("http://localhost:5173/mi-tienda"); // Redirige a la app React
});

// 🔐 Login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if (!usuario) {
    return res.status(401).send("Email o contraseña incorrectos");
  }

  if (!usuario.confirmed) {
    return res.status(403).send("Tu cuenta aún no está confirmada");
  }

  res.send("Inicio de sesión exitoso");
});

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

