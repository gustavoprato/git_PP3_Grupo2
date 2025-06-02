function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Simulación de envío (luego se reemplaza con backend real)
    alert("Intentando iniciar sesión con:\n" + email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input type="email" name="email" placeholder="Correo electrónico" required /><br /><br />
      <input type="password" name="password" placeholder="Contraseña" required /><br /><br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
