import React from "react";
import Timer from "../../components/timer";
import NewCycle from "../../components/new-cycle";
import "./home.css";

export default function HomePage() {
  return (
    <div className="container--home">
      <NewCycle />
      <Timer />
    </div>
  );
}
