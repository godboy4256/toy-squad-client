import { useForm } from 'react-hook-form';
import {
  CheckBoxInput,
  CheckBoxStyle,
  CheckIcon,
  Label,
  Span,
} from './CheckBox.style';

interface CheckBoxProps {
  name: string;
  label: string;
}

function CheckBox({ name, label }: CheckBoxProps) {
  const { register, watch } = useForm();
  const checked = watch(name);

  return (
    <CheckBoxStyle>
      <Label htmlFor={label} checked={checked}>
        <CheckBoxInput {...register(name)} id={label} />
        <Span>{label}</Span>
        {checked ? <CheckIcon>✓</CheckIcon> : null}
      </Label>
    </CheckBoxStyle>
  );
}

export default CheckBox;
