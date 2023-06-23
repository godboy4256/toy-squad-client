import { TextFieldStyle, TextFieldLabel } from './TextField.style';

type InputType = {
  type?: string;
  placeholder?: string;
  register?: any;
  style?: 'account_input';
  label?: string;
};

const TextField = ({ placeholder, register, label }: InputType) => {
  return (
    <>
      {label && <TextFieldLabel>{label}</TextFieldLabel>}
      <TextFieldStyle
        autoComplete="off"
        placeholder={placeholder}
        {...register}
      />
    </>
  );
};

export default TextField;
