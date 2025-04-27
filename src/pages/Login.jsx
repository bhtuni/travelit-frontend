import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/travelit-newlogo.png"; 

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: form.email,
        password: form.password
      });
      console.log(response.data);
      localStorage.setItem("userEmail", form.email);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("❌ Error al iniciar sesión");
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
        <h2>Iniciar Sesión en TravelIt</h2>
        <form style={{ marginTop: "20px", width: "100%", maxWidth: "400px" }} onSubmit={handleLogin}>
          <div style={{ marginBottom: "10px" }}>
            <label>Correo Electrónico:</label><br />
            <input type="email" name="email" value={form.email} onChange={handleChange} required style={inputStyle} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>Contraseña:</label><br />
            <input type="password" name="password" value={form.password} onChange={handleChange} required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>Iniciar Sesión</button>
        </form>
        <p style={{ marginTop: "20px" }}>
          ¿No tienes cuenta? <Link to="/register" style={{ color: "#00B4D8" }}>Regístrate aquí</Link>
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

export default Login;

