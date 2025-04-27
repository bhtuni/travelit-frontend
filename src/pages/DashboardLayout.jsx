import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

function DashboardLayout({ children }) {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <Navbar />
      {/* Spacer to push content below fixed Navbar */}
      <div style={{ height: "80px" }}></div>  

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{
          width: "250px",
          backgroundColor: "#f5f5f5",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
          overflowY: "auto",
          height: "calc(100vh - 80px)"
        }}>
          <Sidebar />
        </div>
        <div style={{
          flex: 1,
          overflowY: "auto",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          height: "calc(100vh - 80px)"
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
