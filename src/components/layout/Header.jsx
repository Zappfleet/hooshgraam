import { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '../../utils/analytics';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCTAClick = () => {
    trackCTAClick('شروع رایگان', 'Header');
  };

  return (
    <header  className="header">
      <nav className="nav container " >
        <Link to="/" className="logo " >
          <img className="logo-icon" src='/images/logo.png' ></img>
          <span className="logo-text"> هوشگرام</span>
        </Link>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>خانه</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>درباره ما</Link></li>
          <li><Link to="/pricing" onClick={() => setIsMenuOpen(false)}>قیمت‌ها</Link></li>
          <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>وبلاگ</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>تماس</Link></li>
        </ul>

       <div className="nav-cta ">
          {/*<Link to="/login" className="btn-link">ورود</Link>*/}
          <Link 
            to="/pricing" 
            className="btn btn-primary"
            onClick={handleCTAClick}
          >
            شروع کنید
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;