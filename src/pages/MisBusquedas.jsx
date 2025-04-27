import { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";

function MisBusquedas() {
  const [busquedas, setBusquedas] = useState([]);

  useEffect(() => {
    const storedBusquedas = JSON.parse(localStorage.getItem("busquedas")) || [];
    setBusquedas(storedBusquedas);
  }, []);

  const eliminarBusqueda = (index) => {
    const updatedBusquedas = [...busquedas];
    updatedBusquedas.splice(index, 1); 
    setBusquedas(updatedBusquedas);
    localStorage.setItem("busquedas", JSON.stringify(updatedBusquedas));
  };

  return (
    <DashboardLayout>
      <div style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Mis Búsquedas Guardadas</h2>

        {busquedas.length > 0 ? (
          busquedas.map((busqueda, index) => (
            <div key={index} style={{
              marginBottom: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
              position: "relative"
            }}>
              <strong>Tipo:</strong> {busqueda.tipo} <br />
              <strong>Origen:</strong> {busqueda.origen} <br />
              <strong>Destino:</strong> {busqueda.destino} <br />
              <strong>Fecha:</strong> {busqueda.fecha}
              <button onClick={() => eliminarBusqueda(index)} style={deleteButtonStyle}>
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No tienes búsquedas guardadas aún.</p>
        )}
      </div>
    </DashboardLayout>
  );
}

const deleteButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#d00000",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "8px",
  fontSize: "12px",
  cursor: "pointer",
};

export default MisBusquedas;

