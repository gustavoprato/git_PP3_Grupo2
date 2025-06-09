function MiTienda() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <header style={{ backgroundColor: "#222", color: "white", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Mi Tienda</h1>
        <nav>
          <a href="#quienes" style={{ color: "white", margin: "0 1rem", textDecoration: "none", fontWeight: "bold" }}>¿Quiénes somos?</a>
          <a href="#contacto" style={{ color: "white", margin: "0 1rem", textDecoration: "none", fontWeight: "bold" }}>Contacto</a>
        </nav>
      </header>

      <section style={{ padding: "2rem", backgroundColor: "#fffbe6", border: "1px dashed #aaa", marginTop: "2rem" }} id="quienes">
        <h2>¿Quiénes somos?</h2>
        <p>Somos una tienda dedicada a ofrecer los mejores productos. Nuestra misión es brindarte calidad y confianza en cada compra.</p>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#fffbe6", border: "1px dashed #aaa", marginTop: "2rem" }}>
        <h2>Productos</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
          {[1, 2, 3].map((num) => (
            <div key={num} style={{
              background: "white", padding: "1rem", borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)", transition: "transform 0.2s ease"
            }}>
              <img src={`https://via.placeholder.com/250x150?text=Producto+${num}`} alt={`Producto ${num}`} style={{ width: "100%", borderRadius: "8px" }} />
              <h3>Producto {num}</h3>
              <p>Descripción breve del producto.</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "2rem", backgroundColor: "#fffbe6", border: "1px dashed #aaa", marginTop: "2rem" }} id="contacto">
        <h2>Contacto</h2>
        <p>Email: contacto@mitienda.com</p>
        <p>Teléfono: 11-2345-6789</p>
      </section>

      <footer style={{ backgroundColor: "#222", color: "white", textAlign: "center", padding: "1rem", marginTop: "2rem" }}>
        © 2025 Mi Tienda
      </footer>
    </div>
  );
}

export default MiTienda;
