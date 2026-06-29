import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Courses",
      href: "#courses",
    },
    {
      title: "Companies",
      href: "#companies",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
  ];

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="/" className="text-2xl font-extrabold tracking-tight">
          CrackTheCampus
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="nav-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <button className="login-button">Login</button>

          <button className="primary-button">Get Started</button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.title}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </a>
          ))}

          <button className="primary-button w-full">Get Started</button>
        </div>
      )}
    </header>
  );
}

export default Navbar;
