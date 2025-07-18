import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        background: "black",
        borderBottom: "3px solid #ff0000ff",
        padding: "0.5rem 0",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
          gap: "2rem",
        }}
      >
        <li>
          <Link
            to="/home"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              transition: "background 0.2s",
            }}
            onMouseOver={e => (e.target.style.background = "#ff9800")}
            onMouseOut={e => (e.target.style.background = "transparent")}
          >
            Home 🏡
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              transition: "background 0.2s",
            }}
            onMouseOver={e => (e.target.style.background = "#34899fff")}
            onMouseOut={e => (e.target.style.background = "transparent")}
          >
            About 🤔
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              transition: "background 0.2s",
            }}
            onMouseOver={e => (e.target.style.background = "#ff9800")}
            onMouseOut={e => (e.target.style.background = "transparent")}
          >
            Contact 📞
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              transition: "background 0.2s",
            }}
            onMouseOver={e => (e.target.style.background = "#ede7deff")}
            onMouseOut={e => (e.target.style.background = "transparent")}
          >
            Projects 📈
          </Link>
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;