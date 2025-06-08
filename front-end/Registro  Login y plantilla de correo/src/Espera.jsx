function Espera() {
  return (
    <div style={{
      backgroundColor: "#ffeedd",
      color: "#333",
      fontFamily: "sans-serif",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}>
        <h1>Ahora debes confirmar tu email</h1>
        <p>Te hemos enviado un correo de confirmacion</p>
      </div>
    </div>
  );
}

export default Espera;
