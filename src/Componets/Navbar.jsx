import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import "../Css/navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          <Link className="navbar-logo" to="/">
            <span className="navbar-logo-text">
              ASV.
            </span>
          </Link>
          <nav className={`navbar-nav ${isMenuOpen ? "navbar-nav-mobile" : ""}`}>
            <Link className="navbar-nav-link" to="/">
              Home
            </Link>
            <Link className="navbar-nav-link" to="/gallery">
              Gallery
            </Link>
          </nav>
          <button 
            className="navbar-menu-button" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="navbar-menu-icon" />
            ) : (
              <Menu className="navbar-menu-icon" />
            )}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <button 
            className="navbar-mobile-menu-close" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X className="navbar-menu-icon" />
          </button>
          <div className="navbar-mobile-menu-content">
            <Link className="navbar-mobile-menu-link" to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="navbar-mobile-menu-link" to="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;