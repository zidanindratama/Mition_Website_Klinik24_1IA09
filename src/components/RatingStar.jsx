import React from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";

const RatingStar = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(rating)].map((_, id) => {
        return (
          <BsFillStarFill size={20} style={{ color: "#FFC27A" }} key={id} />
        );
      })}
      {[...Array(5 - rating)].map((_, id) => {
        return <BsStar size={20} style={{ color: "#FFC27A" }} key={id} />;
      })}
    </div>
  );
};

export default RatingStar;
