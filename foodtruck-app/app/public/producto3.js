document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.producto button');
  const listaCarrito = document.getElementById('lista-carrito');
  const totalElemento = document.querySelector('.carrito .total');
  let carrito = [];

  botonesAgregar.forEach((boton) => {
    boton.addEventListener('click', () => {
      const producto = boton.closest('.producto');
      const nombre = producto.querySelector('h3').textContent;
      const precioTexto = producto.querySelector('.precio').textContent;
      const precio = parseFloat(precioTexto.replace('$', ''));

      const item = { nombre, precio };
      carrito.push(item);
      actualizarCarrito();
    });
  });

  function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
      listaCarrito.appendChild(li);
      total += item.precio;
    });

    totalElemento.textContent = `Total: $${total.toFixed(2)}`;
  }

  const botonFinalizar = document.querySelector('.carrito button');
  botonFinalizar.addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío.');
      return;
    }

    const confirmacion = confirm('¿Deseas finalizar el pedido?');
    if (confirmacion) {
      alert('¡Pedido realizado con éxito!');
      carrito = [];
      actualizarCarrito();
    }
  });
});