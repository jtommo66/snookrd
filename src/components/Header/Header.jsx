import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link>Rules</Link>
      <h1>Snookrd</h1>
      <Link>Reset</Link>
    </div>
  );
}

export default Header;
