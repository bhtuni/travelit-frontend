import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "./DashboardLayout";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail");
        const response = await axios.get(`http://localhost:8080/favoritos?email=${userEmail}`);
        if (Array.isArray(response.data)) {
          setFavorites(response.data);
        } else {
          setMessage("❌ No se pudieron cargar favoritos.");
        }
      } catch (error) {
        console.error(error);
        setMessage("❌ Error al cargar favoritos.");
      }
    };
    fetchFavorites();
  }, []);

  const eliminarFavorito = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
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
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Mis Favoritos</h2>

        {message && <p style={{ textAlign: "center", color: "red" }}>{message}</p>}

        {favorites.length > 0 ? (
          <ul style={{ padding: 0 }}>
            {favorites.map((trip, index) => (
              <li key={index} style={{
                listStyle: "none",
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

                <button onClick={() => eliminarFavorito(index)} style={deleteButtonStyle}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center" }}>No tienes viajes favoritos aún.</p>
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

export default Favorites;
