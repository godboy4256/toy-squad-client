import * as React from 'react';
import { TextFieldStyle, TextFieldLabel } from './TextField.style';

type InputType = {
  type?: string;
  placeholder?: string;
  register?: any;
  style?: 'account_input';
  label?: string;
};

const TextField = ({ placeholder, register, label, type }: InputType) => {
  return (
    <>
      {label && <TextFieldLabel>{label}</TextFieldLabel>}
      <TextFieldStyle
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </>
  );
};

export default TextField;
