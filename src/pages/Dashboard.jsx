import DashboardLayout from "./DashboardLayout";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const userEmail = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  const handleCreateTrip = () => {
    navigate("/create-trip");
  };

  return (
    <DashboardLayout>
      <div style={{
        backgroundColor: "#f9f9f9",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <h2>¡Bienvenido {userEmail} a TravelIt!</h2>
        <p>Elige una opción:</p>
        <button onClick={handleCreateTrip} style={buttonStyle}>
          Crear Viaje
        </button>
      </div>
    </DashboardLayout>
  );
}

const buttonStyle = {
  backgroundColor: "#00B4D8",
  color: "white",
  border: "none",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "8px",
  marginTop: "20px",
  cursor: "pointer"
};

export default Dashboard;
