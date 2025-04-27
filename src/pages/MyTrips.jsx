import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "./DashboardLayout";


function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        const response = await axios.get(`http://localhost:8080/viajes?email=${userEmail}`);
        setTrips(response.data);
      } catch (error) {
        console.error(error);
        setMessage("❌ Error al cargar los viajes");
      }
    };
    fetchTrips();
  }, []);

  const addToFavorites = async (trip) => {
    try {
      const userEmail = localStorage.getItem("userEmail");
      await axios.post(`http://localhost:8080/favorito?email=${userEmail}`, trip);
      alert("✅ Viaje agregado a favoritos!");
    } catch (error) {
      console.error(error);
      alert("❌ Error al agregar a favoritos");
    }
  };

  const reservarViaje = (trip) => {
    const existingReservations = JSON.parse(localStorage.getItem("reservas")) || [];
    existingReservations.push(trip);
    localStorage.setItem("reservas", JSON.stringify(existingReservations));
    alert("✅ ¡Viaje reservado exitosamente!");
  };

  const eliminarViaje = (index) => {
    const updatedTrips = [...trips];
    updatedTrips.splice(index, 1);
    setTrips(updatedTrips);
    localStorage.setItem("viajes", JSON.stringify(updatedTrips));
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Mis Viajes</h2>

        {message && <p style={{ textAlign: "center", color: "red" }}>{message}</p>}

        {trips.length > 0 ? (
          trips.map((trip, index) => (
            <div key={index} style={{
              marginBottom: "20px",
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#f0f8ff",
              position: "relative"
            }}>
              <strong>Nombre del Viaje:</strong> {trip.nombre} <br />
              <strong>Destino:</strong> {trip.destino} <br />
              <strong>Fecha:</strong> {trip.fecha} <br />
              <strong>Vuelo:</strong> {trip.vuelo} <br />
              <strong>Hotel:</strong> {trip.hotel} <br />
              <strong>Tren:</strong> {trip.tren} <br />
              <strong>Crucero:</strong> {trip.crucero}
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <button onClick={() => addToFavorites(trip)} style={favoriteButtonStyle}>
                  Agregar a Favoritos
                </button>
                <button onClick={() => reservarViaje(trip)} style={reserveButtonStyle}>
                  Reservar/Pagar
                </button>
              </div>
              <button onClick={() => eliminarViaje(index)} style={deleteButtonStyle}>
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No hay viajes aún.</p>
        )}
      </div>
    </DashboardLayout>
  );
}

const favoriteButtonStyle = {
  backgroundColor: "#00B4D8",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

const reserveButtonStyle = {
  backgroundColor: "#0077b6",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

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

export default MyTrips;
