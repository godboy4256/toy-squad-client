import * as React from "react";
import { TextFieldStyle, TextFieldLabel } from "./TextField.style";
import { FieldValues, UseFormRegister } from "react-hook-form";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<FieldValues>;
  label?: string;
  params?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeFunc?: () => void;
  type?: string;
  value?: string;
  marginBottom?: string;
  errorsMessage?: string;
}

const TextField = ({
  register,
  label,
  params,
  placeholder,
  onChangeFunc,
  type,
  disabled,
  value,
  marginBottom,
  errorsMessage,
}: InputType) => {
  return (
    <>
      {label && <TextFieldLabel>{label}</TextFieldLabel>}
      <TextFieldStyle
        type={type}
        disabled={disabled}
        autoComplete="new-password"
        {...(register && params && register(params))}
        placeholder={placeholder}
        onChange={onChangeFunc}
        defaultValue={value}
        marginBottom={errorsMessage ? "0" : marginBottom}
      />
      {errorsMessage && <ErrorMessage message={errorsMessage} />}
    </>
  );
};

export default TextField;
