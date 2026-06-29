import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo">
        <img
          src="/logo.webp"
          alt="CrackTheCampus Logo"
          className="navbar-logo-img"
        />

        
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#hero">Home</a>

        <a href="#features">Features</a>

        <a href="#courses">Courses</a>

        <a href="#companies">Companies</a>

        <a href="#testimonials">Testimonials</a>
      </nav>

      <button className="navbar-button">Get Started</button>

      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

export default Navbar;
