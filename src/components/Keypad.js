import React from "react";

export default function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <input 
      type="password" 
      onChange={handleChange}
    />
  );
}
