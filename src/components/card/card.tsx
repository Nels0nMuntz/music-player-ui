import type React from "react";

export const Card: React.FC<{title: string}> = ({title}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>This is a simple card component.</p>
    </div>
  );
};
