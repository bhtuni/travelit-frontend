import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/travelit-newlogo.png"; 

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/register", form);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("❌ Error al registrarse");
    }
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30px"
      }}>
        <img src={logo} alt="TravelIt Logo" style={{ height: "180px" }} />
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "20px"
      }}>
        <h2>Crear Cuenta en TravelIt</h2>
        <form style={{ marginTop: "20px", width: "100%", maxWidth: "400px" }} onSubmit={handleRegister}>
          <div style={{ marginBottom: "10px" }}>
            <label>Nombre:</label><br />
            <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Correo Electrónico:</label><br />
            <input type="email" name="email" value={form.email} onChange={handleChange} required style={inputStyle} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Contraseña:</label><br />
            <input type="password" name="password" value={form.password} onChange={handleChange} required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>Registrarse</button>
        </form>
        <p style={{ marginTop: "20px" }}>
          ¿Ya tienes cuenta? <Link to="/" style={{ color: "#00B4D8" }}>Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  backgroundColor: "#00B4D8",
  color: "white",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Register;

