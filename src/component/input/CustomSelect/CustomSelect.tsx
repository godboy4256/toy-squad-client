import * as React from "react";
import { Dispatch, SetStateAction } from "react";
import { SelectContainer } from "./CustomSelect.style";
import { Select } from "antd";

type OptionsType = {
  value?: string;
  label?: string;
}[];

type LabelOptionsType = {
  label?: string;
  options: OptionsType;
}[];

const CustomSelect = ({
  options,
  placeHolder,
  setValue,
  defaultValue,
  onChangeFunc,
  onSearchFunc,
  mode,
}: {
  options: OptionsType | LabelOptionsType;
  placeHolder?: string;
  setValue?: Dispatch<SetStateAction<string | number>>;
  defaultValue?: { value: string; label?: string };
  onChangeFunc?: CallableFunction;
  onSearchFunc?: CallableFunction;
  mode?: "tags" | "multiple";
}) => {
  const handleChange = () => {
    onChangeFunc && onChangeFunc();
    setValue && setValue("");
  };
  const handleSearch = (value: string) => {
    onSearchFunc && onSearchFunc(value);
  };
  return (
    <SelectContainer>
      <Select
        onSearch={handleSearch}
        onChange={handleChange}
        options={options}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        mode={mode}
      />
    </SelectContainer>
  );
};

export default CustomSelect;
