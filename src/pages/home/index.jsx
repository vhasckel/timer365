import React from "react";
import Timer from "../../components/timer";
import NewCycle from "../../components/new-cycle";
import "./home.css";
import Button from "../../components/button";

export default function HomePage() {
  return (
    <div className="container--home">
      <NewCycle />
      <Timer />
      <Button>Iniciar</Button>
    </div>
  );
}
