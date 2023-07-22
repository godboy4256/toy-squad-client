import * as React from 'react';
import { NormalButtonStyle } from './Button.style';

interface ButtonType extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset';
}

const Button = ({ type, ...props }: ButtonType) => {
  return <NormalButtonStyle {...props} />;
};

export default Button;
