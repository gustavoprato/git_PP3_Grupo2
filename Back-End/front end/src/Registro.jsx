import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Registro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación simple
    if (!email.includes("@") || password.length < 4) {
      alert("Email o contraseña inválidos.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const mensaje = await res.text();
      alert(mensaje);

      // 🔁 Redirigir a pantalla de espera
      navigate("/espera");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Error al registrar.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
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
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Registro;
