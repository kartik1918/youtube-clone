import React from "react";
import Button from "./Button";

const buttons = [
  "All",
  "Live",
  "Gaming",
  "Gadgets",
  "Satsang",
  "Mixes",
  "Thoughts",
  "Music",
  "Camping",
  "Eating",
];

const ButtonList = () => {
  return (
    <div className="flex justify-start">
      {buttons.map((button, index) => {
        return <Button key={index} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
