import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/travelit-horizontal.png";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div style={navbarStyle}>
      <div style={leftStyle}>
        <img src={logo} alt="TravelIt Logo" style={logoStyle} />
        <Link to="/vuelos" style={linkStyle}>Vuelos</Link>
        <Link to="/trenes" style={linkStyle}>Trenes</Link>
        <Link to="/cruceros" style={linkStyle}>Cruceros</Link>
        <Link to="/coches" style={linkStyle}>Coches</Link>
        <Link to="/alojamiento" style={linkStyle}>Alojamiento</Link>
        <Link to="/actividades" style={linkStyle}>Actividades</Link>
      </div>
      <div style={rightStyle}>
        <Link to="/favorites" style={{ ...buttonStyle, backgroundColor: "#0077b6" }}>❤️ Favoritos</Link>
        <Link to="/dashboard" style={{ ...buttonStyle, backgroundColor: "#0077b6" }}>👤 Mi Cuenta</Link>
        <button onClick={handleLogout} style={{ ...buttonStyle, backgroundColor: "#d00000" }}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

const navbarStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "80px",
  width: "100%",
  backgroundColor: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  zIndex: 1000,
};

const leftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const rightStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginRight: "30px", 
};

const logoStyle = {
  height: "50px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  color: "#fff",
  padding: "8px 15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "14px",
  textDecoration: "none",
};

export default Navbar;

