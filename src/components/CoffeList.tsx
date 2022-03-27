import React from "react";
import { CoffeeItem } from "./CoffeeItem";
interface CoffeListProps {
  coffeList: Coffee[];
}

export const CoffeList: React.FC<CoffeListProps> = ({ coffeList }) => {
  return (
    <div className="container">
      {coffeList.map((item) => (
        <CoffeeItem coffee={item} />
      ))}
    </div>
  );
};
