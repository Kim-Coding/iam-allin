import { Link } from "react-router-dom";
import "./nav.css";

function Layout({ children }) {
  return (
    <>
      <nav className="Nav">
        <Link to="/" className="LinkHome">
          iam-allin
        </Link>
        <div className="Func">
          <Link to="/Create" className="LinkCreate">
            번호만들기
          </Link>
          <Link to="/Numlist" className="LinkNumlist">
            내 번호목록
          </Link>
        </div>
      </nav>
      {children}
    </>
  );
}

export default Layout;
