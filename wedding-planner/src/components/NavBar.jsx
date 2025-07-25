import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#f8f8f8",
        color: "black",
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
      }}
    >
      
      <div>
        <Link to="/venue" style={{ color: "black", marginRight: "20px" }}>Venue</Link>
        <Link to="/vendors" style={{ color: "black", marginRight: "20px" }}>Vendors</Link>
        <Link to="/photo" style={{ color: "black", marginRight: "20px" }}>Photo</Link>
        <Link to="/realWedding" style={{ color: "black", marginRight: "20px" }}>Real Wedding</Link>
        <Link to="/e_invites" style={{ color: "black", marginRight: "20px" }}>E-Invites</Link>
      </div>

     
      <div>
        <Link to="/register" style={{ color: "black", marginRight: "20px" }}>Register</Link>
        <Link to="/login" style={{ color: "black" }}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
