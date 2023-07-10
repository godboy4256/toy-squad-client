import * as React from 'react';
import { TextFieldStyle, TextFieldLabel } from './TextField.style';

type InputType = {
  type?: string;
  placeholder?: string;
  register?: any;
  style?: 'account_input';
  label?: string;
  disabled?: boolean;
  onChange?: CallableFunction;
  onFocus?: CallableFunction;
};

const TextField = ({
  placeholder,
  register,
  label,
  type,
  disabled,
  onChange,
  onFocus,
}: InputType) => {
  return (
    <>
      {label && <TextFieldLabel>{label}</TextFieldLabel>}
      <TextFieldStyle
        autoComplete="off"
        disabled={disabled}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        {...register}
      />
    </>
  );
};

export default TextField;
