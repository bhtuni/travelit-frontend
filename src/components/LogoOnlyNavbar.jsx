import logo from "../assets/travelit-newlogo.png";

function LogoOnlyNavbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "30px",
      backgroundColor: "#FFFFFF",
      height: "150px" 
    }}>
      <img src={logo} alt="TravelIt Logo" style={{ height: "120px" }} />
    </div>
  );
}

export default LogoOnlyNavbar;
