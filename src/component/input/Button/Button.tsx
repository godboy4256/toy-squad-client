import { MouseEventHandler } from 'react';
import { NormalButtonStyle } from './Button.style';

type ButtonType = {
  value: string;
  type?: 'submit' | 'button' | 'reset';
  click_func?: MouseEventHandler<HTMLButtonElement>;
  //   style: 'account_button' | 'link';
};

const Button = ({ value, click_func }: ButtonType) => {
  return <NormalButtonStyle onClick={click_func}>{value}</NormalButtonStyle>;
};

export default Button;
