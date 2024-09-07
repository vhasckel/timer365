import React from "react";
import { NavLink } from "react-router-dom";
import { Timer, ScrollText } from "lucide-react";
import "./header.css";

export default function Header() {
  return (
    <header className="container--header">
      <img src="/Logo.png" alt="Logotipo do Vite" />
      <nav>
        <NavLink to="/" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/historico" end>
          <ScrollText size={24} />
        </NavLink>
      </nav>
    </header>
  );
}
