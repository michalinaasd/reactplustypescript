import React from "react";

interface CoffeeItemProps {
  coffee: Coffee;
}

export const CoffeeItem: React.FC<CoffeeItemProps> = ({ coffee }) => {
  return (
    <div className="card">
      <p>{coffee.title}</p>
      <p>{coffee.description}</p>
      <p>{coffee.ingredients}</p>
    </div>
  );
};
