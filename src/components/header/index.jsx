import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="container--header">
      <img src="/Logo.png" alt="Logotipo do Vite" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Histórico</a>
      </nav>
    </header>
  );
}
