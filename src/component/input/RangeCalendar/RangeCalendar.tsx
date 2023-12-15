import React, { useState } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  margin: 10px 0;
`;
const CalendarHeader = styled.div`
  width: 500px;
  padding: 20px 0;
  display: flex;
  border: 1px solid #ccc;
  font-size: 1.5rem;
  justify-content: space-between;
  & > button {
    cursor: pointer;
  }
`;
const CalendarAnswer = styled.div``;
const CalendarHeaderMonth = styled.ul`
  display: flex;
  & > li {
    margin: 0 20px;
  }
`;

const CalendarWeek = styled.ul`
  width: 250px;
  display: flex;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  & > li {
    text-align: center;
    width: 14.2857%;
    padding: 10px 0;
  }
`;

const CalendarWeekBox = styled.ul`
  width: 500px;
  display: flex;
  &:last-of-type {
    border-right: 1px solid #ccc;
  }
`;

const CalendarDays = styled.div`
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  & > button {
    width: 14.2857%;
    text-align: center;
    padding: 10px 0;
  }
`;
const CalendarDaysBox = styled.div`
  display: flex;
  width: 500px;
  border: 1px solid #ccc;
  border-top: none;
  & > div:first-of-type {
    border-right: 1px solid #ccc;
  }
`;

const Days_Option_Generater = (year: number, month: number) => {
  const days_arr = new Array(new Date(year, month - 1, 1).getDay()).fill("");
  const days_count = new Date(year, month, 0).getDate();
  for (let i = 0; i < days_count; i++) {
    days_arr.push(String(i + 1));
  }
  return days_arr;
};
const RangeCalendar = () => {
  const [years, setYears] = useState([2023, 2023]);
  const [months, setMonths] = useState([1, 2]);
  const [daysLeft, setDaysLeft] = useState(
    Days_Option_Generater(years[0], months[0])
  );
  const [daysRight, setDaysRight] = useState(
    Days_Option_Generater(years[1], months[1])
  );
  const onClickNextMonth = () => {
    setMonths((month) => {
      return [month[1], month[1] + 1 === 13 ? 1 : month[1] + 1];
    });
    setYears((year) => {
      return [
        months[1] + 1 === 14 ? year[1] + 1 : year[1],
        months[1] + 1 === 13 ? year[1] + 1 : year[1],
      ];
    });
    setDaysLeft(Days_Option_Generater(years[0], months[0]));
    setDaysRight(Days_Option_Generater(years[1], months[1]));
  };
  const onClickPrevMonth = () => {
    setMonths((month) => {
      return [month[0] - 1 === 0 ? 12 : month[0] - 1, month[0]];
    });
    setYears((year) => {
      return [
        months[0] - 1 === 0 ? year[0] - 1 : year[0],
        months[0] - 1 === 1 ? year[0] - 1 : year[0],
      ];
    });
    setDaysLeft(Days_Option_Generater(years[0], months[0]));
    setDaysRight(Days_Option_Generater(years[1], months[1]));
  };
  return (
    <>
      <CalendarAnswer></CalendarAnswer>
      <CalendarContainer>
        <CalendarHeader>
          <button onClick={onClickPrevMonth}>이전</button>
          <CalendarHeaderMonth>
            <li>
              {years[0]} 년 {months[0]} 월
            </li>
            <li>
              {years[1]} 년 {months[1]} 월
            </li>
          </CalendarHeaderMonth>
          <button onClick={onClickNextMonth}>다음</button>
        </CalendarHeader>
        <CalendarWeekBox>
          <CalendarWeek>
            <li>일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </CalendarWeek>
          <CalendarWeek>
            <li>일</li>
            <li>월</li>
            <li>화</li>
            <li>수</li>
            <li>목</li>
            <li>금</li>
            <li>토</li>
          </CalendarWeek>
        </CalendarWeekBox>
        <CalendarDaysBox>
          <CalendarDays>
            {daysLeft.map((day: number) => {
              return <button>{day}</button>;
            })}
          </CalendarDays>
          <CalendarDays>
            {daysRight.map((day: number) => {
              return <button>{day}</button>;
            })}
          </CalendarDays>
        </CalendarDaysBox>
      </CalendarContainer>
    </>
  );
};

export default RangeCalendar;
