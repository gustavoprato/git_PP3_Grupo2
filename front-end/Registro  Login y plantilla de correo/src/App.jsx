import Espera from './Espera';
import MiTienda from './MiTienda';
import { Routes, Route, Link } from 'react-router-dom';
import Registro from './Registro';
import Login from './Login';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Pedidos Online - Food Truck</h1>

      {/* Menú de navegación */}
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/registro" style={{ marginRight: '1rem' }}>Registro</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/espera" element={<Espera />} />   
        <Route path="/mi-tienda" element={<MiTienda />} />   
      </Routes>
    </div>
  );
}

export default App;
