import { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";

function MisReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem("reservas")) || [];
    setReservas(storedReservations);
  }, []);

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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Mis Reservas</h2>

        {reservas.length > 0 ? (
          reservas.map((reserva, index) => (
            <div key={index} style={{
              marginBottom: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
            }}>
              <strong>Nombre del Viaje:</strong> {reserva.nombre} <br />
              <strong>Destino:</strong> {reserva.destino} <br />
              <strong>Fecha:</strong> {reserva.fecha} <br />
              <strong>Vuelo:</strong> {reserva.vuelo} <br />
              <strong>Hotel:</strong> {reserva.hotel} <br />
              <strong>Tren:</strong> {reserva.tren} <br />
              <strong>Crucero:</strong> {reserva.crucero}
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No hay reservas aún.</p>
        )}
      </div>
    </DashboardLayout>
  );
}

export default MisReservas;
