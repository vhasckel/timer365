import React from "react";
import Timer from "../../components/timer";
import NewCycle from "../../components/new-cycle";

export default function HomePage() {
  return (
    <div>
      <NewCycle />
      <Timer />
    </div>
  );
}
