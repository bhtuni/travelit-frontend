import { useState } from "react";
import axios from "axios";
import DashboardLayout from "./DashboardLayout"; // ✅

function CreateTrip() {
  const [tripData, setTripData] = useState({
    nombre: "",
    destino: "",
    fecha: "",
    vuelo: "",
    hotel: "",
    tren: "",
    crucero: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTripData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userEmail = localStorage.getItem("userEmail");
      const response = await axios.post(`http://localhost:8080/viaje?email=${userEmail}`, tripData);
      console.log(response.data);
      setMessage("✅ ¡Viaje creado exitosamente!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al crear el viaje");
    }
  };

  return (
    <DashboardLayout>
      <form onSubmit={handleSubmit} style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>
        <h2 style={{ textAlign: "center" }}>Crear un Nuevo Viaje</h2>

        <input type="text" name="nombre" placeholder="Nombre del Viaje" value={tripData.nombre} onChange={handleChange} required />
        <input type="text" name="destino" placeholder="Destino" value={tripData.destino} onChange={handleChange} required />
        <input type="date" name="fecha" placeholder="Fecha" value={tripData.fecha} onChange={handleChange} required />
        <input type="text" name="vuelo" placeholder="Vuelo" value={tripData.vuelo} onChange={handleChange} />
        <input type="text" name="hotel" placeholder="Hotel" value={tripData.hotel} onChange={handleChange} />
        <input type="text" name="tren" placeholder="Tren" value={tripData.tren} onChange={handleChange} />
        <input type="text" name="crucero" placeholder="Crucero" value={tripData.crucero} />

        <button type="submit" style={{
          backgroundColor: "#00B4D8",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}>
          Crear Viaje
        </button>

        {message && <p style={{ textAlign: "center", marginTop: "10px" }}>{message}</p>}
      </form>
    </DashboardLayout>
  );
}

export default CreateTrip;

