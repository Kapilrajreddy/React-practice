import { Link } from "react-router-dom";
import ThemeToggle from "./Toggle";

const Navbar=()=>{
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          background: "#7c3aed",
          color: "#fff",
          fontWeight: "600",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            padding: "0% 4%",
          }}
        >
          <Link to="/counter" style={{ color: "#fff", textDecoration: "none" }}>
            <p>Dark Theme</p>
          </Link>
          <Link
            to="/text-change"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            <p>Change Text</p>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    );
}
export default Navbar