import React from "react";
import FoodCard from "../FoodCard/FoodCard";

const FoodCategory = ({ items }) => {
  return (
    <div>
      <div className="grid my-8 lg:grid-cols-3 gap-12 md:grid-cols-2 grid-cols-1">
        {
            items.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
        }
      </div>
    </div>
  );
};

export default FoodCategory;
