import * as React from 'react';
import { TextFieldStyle, TextFieldLabel } from './TextField.style';
import { UseFormRegisterReturn } from 'react-hook-form';

// type InputType = {
//   type?: string;
//   placeholder?: string;
//   register?: any;
//   style?: 'account_input';
//   label?: string;
//   disabled?: boolean;
//   onChange?: CallableFunction;
//   onFocus?: CallableFunction;
// };

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
  label?: string;
}

const TextField = ({ register, label, ...props }: InputType) => {
  return (
    <>
      {label && <TextFieldLabel>{label}</TextFieldLabel>}
      <TextFieldStyle autoComplete="off" {...props} {...register} />
    </>
  );
};

export default TextField;
