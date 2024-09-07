import React from "react";
import { Timer, ScrollText } from "lucide-react";
import "./header.css";

export default function Header() {
  return (
    <header className="container--header">
      <img src="/Logo.png" alt="Logotipo do Vite" />
      <nav>
        <a href="#">
          <Timer size={24} />
        </a>
        <a href="#">
          <ScrollText size={24} />
        </a>
      </nav>
    </header>
  );
}
