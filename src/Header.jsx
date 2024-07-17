import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <header>
        <Link to="/" className="header-link">
          <h1>Greek Body</h1>
        </Link>
      </header>
    </div>
  );
}

export default Header;
