import { TextFieldStyle, TextFieldLabel } from './TtextField.style';

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
      <div></div>
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
