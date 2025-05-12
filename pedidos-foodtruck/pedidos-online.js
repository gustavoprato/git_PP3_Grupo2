const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// Configurar transporte de correo con Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'federicoagustinestudia@gmail.com',
    pass: 'unhh qpdc mxzf vhgw'
  }
});

// Ruta principal: envía correo al entrar a http://localhost:3000
app.get('/', (req, res) => {
  const destinatario = 'federicoagustinestudia@gmail.com'; // Cambiar a correo real
  const token = '12345';
  const link = `http://localhost:3000/api/confirm/${token}`;

  const mailOptions = {
    from: 'TU_CORREO@gmail.com',
    to: destinatario,
    subject: 'Confirma tu cuenta',
    html: `<p>Haz clic <a href="${link}">aquí</a> para confirmar tu cuenta.</p>`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado:', info.response);
      res.send('Correo de confirmación enviado al usuario.');
    }
  });
});

// Ruta para confirmar cuenta
app.get('/api/confirm/:token', (req, res) => {
  const token = req.params.token;
  console.log('Token recibido:', token);
  res.send(`Tu cuenta fue confirmada con el token: ${token}`);
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000');
});
