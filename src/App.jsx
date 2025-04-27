import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import MyTrips from "./pages/MyTrips.jsx";
import CreateTrip from "./pages/CreateTrip.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";      
import Register from "./pages/Register.jsx"; 
import MisBusquedas from "./pages/MisBusquedas.jsx";
import Vuelos from "./pages/Vuelos.jsx";
import Trenes from "./pages/Trenes.jsx";
import Cruceros from "./pages/Cruceros.jsx";
import Coches from "./pages/Coches.jsx";
import Alojamientos from "./pages/Alojamientos.jsx";
import Actividades from "./pages/Actividades.jsx";
import MisReservas from "./pages/MisReservas.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />          
        <Route path="/register" element={<Register />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/create-trip" element={<CreateTrip />} />
	<Route path="/mis-busquedas" element={<MisBusquedas />} />
	<Route path="/vuelos" element={<Vuelos />} />
	<Route path="/trenes" element={<Trenes />} />
	<Route path="/cruceros" element={<Cruceros />} />
	<Route path="/coches" element={<Coches />} />
	<Route path="/alojamiento" element={<Alojamientos />} />
	<Route path="/actividades" element={<Actividades />} />
	<Route path="/mis-reservas" element={<MisReservas />} />
      </Routes>
    </Router>
  );
}

export default App;

