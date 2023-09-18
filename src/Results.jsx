import React from "react";

export function Result({ caloricMaintenance }) {
  return (
    <div id="submission-message">
      <h1>Caloric Maintenance</h1>
      <div>
        <h1 id="result-container">
          {caloricMaintenance !== null ? caloricMaintenance : ""}
        </h1>
      </div>
    </div>
  );
}