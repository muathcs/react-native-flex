import React, { useState, useEffect } from "react";

export const ColorStatus = ({ initialColor }: { initialColor?: "yellow" }) => {
  const [color, setColor] = useState(initialColor ?? "blue");

  useEffect(() => {
    setColor("red");
  }, [initialColor]);

  // red
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-black">hello</p>
        <p className="text-black">{color}</p>
      </div>
    </>
  );
};
