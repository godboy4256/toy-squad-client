import * as React from "react";
import { NormalButtonStyle } from "./Button.style";

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...props }: ButtonType) => {
  return <NormalButtonStyle {...props} />;
};

export default Button;
