import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const mensaje = await res.text();

      if (res.status === 200) {
        alert("✅ " + mensaje);
        navigate("/mi-tienda");
      } else if (res.status === 403) {
        alert("⚠️ " + mensaje); // Cuenta no confirmada
      } else if (res.status === 401) {
        alert("❌ " + mensaje); // Datos incorrectos
      } else {
        alert("Error inesperado.");
      }

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br /><br />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br /><br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
