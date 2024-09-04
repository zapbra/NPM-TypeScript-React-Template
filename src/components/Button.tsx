import React from "react";
import { ButtonProps } from "./types";
import "./button.css";

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <div className="button">{text}</div>;
};

export default Button;
