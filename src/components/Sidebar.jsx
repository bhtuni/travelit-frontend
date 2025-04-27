import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={sidebarStyle}>
      <div style={itemStyle}>
        <Link to="/mis-busquedas" style={linkStyle}>
          🔍 Mis Búsquedas
        </Link>
      </div>
      <div style={itemStyle}>
        <Link to="/my-trips" style={linkStyle}>
          ✈️ Mis Viajes
        </Link>
      </div>
      <div style={itemStyle}>
        <Link to="/favorites" style={linkStyle}>
          ❤️ Mis Favoritos
        </Link>
      </div>
      <div style={itemStyle}>
        <Link to="/mis-reservas" style={linkStyle}>
          🏨 Mis Reservas
        </Link>
      </div>
    </div>
  );
}

const sidebarStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#f5f5f5",
  padding: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const itemStyle = {};

const linkStyle = {
  textDecoration: "none",
  color: "#00B4D8",
  fontWeight: "bold",
  fontSize: "16px",
};

export default Sidebar;
