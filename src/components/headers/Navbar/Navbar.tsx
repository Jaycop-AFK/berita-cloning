import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from 'react-router-dom'
type Props = {};

const Navbar = (props: Props) => {
  const pages = [
    { title: "Home", path: "/home" },
    { title: "Berita Muslim", path: "/berita" },
    { title: "Baitul", path: "/baitul" },
    { title: "M Style", path: "/mstyle" },
    { title: "Muallaf", path: "/muallaf" },
    { title: "Love", path: "/love" },
    { title: "Halal", path: "/halal" },
    { title: "Clip Video", path: "/clipvideo" },
    { title: "Portfolio", path: "/portfolio" },
  ];

  const navRef = useRef<HTMLElement | null>(null);

  const [activePage, setActivePage] = useState(pages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showNavbar = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header>
        <img
          style={{ width: 65 }}
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://beritamuslimmag.com/wp-content/themes/berita/assets/images/logo.png"
          alt=""
        />
        <nav ref={navRef}>
          {pages.map((page, index) => (
            <div key={index} className="nav-item">
              <Link
                to={page.path}
                className={page.title === "Berita Muslim" ? "nav-dropdown" : ""}
              >
                {page.title}
              </Link>
              {page.title === "Berita Muslim" && dropdownOpen && (
                <div className="dropdown-content">
                  {/* Replace anchor tags with Link */}
                  <Link to="/category1">Category 1</Link>
                  <Link to="/category2">Category 2</Link>
                  <Link to="/category3">Category 3</Link>
                </div>
              )}
            </div>
          ))}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};

export default Navbar;
