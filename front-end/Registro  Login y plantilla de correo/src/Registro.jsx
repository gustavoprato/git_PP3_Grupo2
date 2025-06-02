function Registro() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Password ingresada:", password); // 🐞 Debug

    const resultado = validarRegistro(email, password);
    alert(resultado);
  };

  const validarRegistro = (email, password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!emailRegex.test(email)) return "Email inválido";

    if (!passRegex.test(password)) {
      return `Contraseña insegura. Debe tener al menos:
- 8 caracteres
- 1 letra mayúscula
- 1 letra minúscula
- 1 número
- 1 caracter especial`;
    }

    return "OK";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
      /><br /><br />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
      /><br /><br />
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default Registro;
