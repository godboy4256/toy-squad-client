import { DatePicker } from "antd";
import React from "react";
import { CustomCalendarContainer } from "./CustomCalendar.style";

const CustomCalendar = ({ placeholder }) => {
  return (
    <CustomCalendarContainer>
      <DatePicker placeholder={placeholder} />
    </CustomCalendarContainer>
  );
};

export default CustomCalendar;
