import React from "react";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#94f799ff", color: "white" }}>
      <a href="#home" style={{ margin: "0 1rem" }}>Home</a>
      <a href="#projects" style={{ margin: "0 1rem" }}>Projects</a>
      <a href="#contact" style={{ margin: "0 1rem" }}>Contact</a>
    </nav>
  );
}
