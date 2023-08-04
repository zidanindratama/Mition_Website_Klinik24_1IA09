import React from "react";

const Button = ({ style, icon, text }) => {
  return (
    <>
      <button className={`button-primary gap-4 text-[18px] ${style}`}>
        <span>{icon}</span>
        {text}
      </button>
    </>
  );
};

export default Button;
