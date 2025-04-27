import DashboardLayout from "./DashboardLayout";
import { useState } from "react";

function Cruceros() {
  const [searchData, setSearchData] = useState({
    origen: "",
    destino: "",
    fecha: ""
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const guardarBusqueda = () => {
    const existingBusquedas = JSON.parse(localStorage.getItem("busquedas")) || [];
    existingBusquedas.push({ tipo: "Crucero", ...searchData });
    localStorage.setItem("busquedas", JSON.stringify(existingBusquedas));
    alert("✅ Búsqueda guardada exitosamente!");
  };

  return (
    <DashboardLayout>
      <h2>Buscar Cruceros</h2>
      <div style={{ marginBottom: "20px" }}>
        <input name="origen" placeholder="Origen" value={searchData.origen} onChange={handleChange} style={inputStyle} />
        <input name="destino" placeholder="Destino" value={searchData.destino} onChange={handleChange} style={inputStyle} />
        <input type="date" name="fecha" value={searchData.fecha} onChange={handleChange} style={inputStyle} />
      </div>
      <button onClick={guardarBusqueda} style={buttonStyle}>Guardar Búsqueda</button>
    </DashboardLayout>
  );
}

const inputStyle = {
  margin: "10px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  backgroundColor: "#00B4D8",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Cruceros;