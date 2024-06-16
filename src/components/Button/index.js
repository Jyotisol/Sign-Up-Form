import React from "react";
import "./Styles.css";
// button function to handle click
function Button({ text, onClick, disabled, width }) {
  return (
    <div
      onClick={onClick}
      className="custom-btn"
      disabled={disabled}
      style={{ width: width }}
    >
      {text}
    </div>
  );
}

export default Button;