import styled from "@emotion/styled";
import React, { useState } from "react";

const Calender = () => {
  const [newDate, setNewDate] = useState(new Date());
  const WEEKDAY = ['일','월','화','수','목','금','토'];
  let week = WEEKDAY[newDate.getDay()];
 
  const changeYear = (e:number)=>{
    const date = new Date(newDate.getTime());
    date.setFullYear(date.getFullYear() + e);
    setNewDate(date)
  }

  const changeMonth = (e:number)=>{
    const date = new Date(newDate.getTime());
    date.setMonth(date.getMonth() + e);
    setNewDate(date)
  }

  const monthList = (newDate: Date) => {
    const nowYear = newDate.getFullYear();
    const nowMonth = newDate.getMonth();
  
    const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
    const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();
  
    const result: Date[] = [];
    const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
    const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();
  
    for (let i = dayOneWeek - 1; i >= 0; i--) {
      result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
    }
  
    for (let i = 1; i <= nowMonthEnd; i++) {
      result.push(new Date(nowYear, nowMonth, i));
    }
  
    for (let i = 1; i < 7 - dayLastWeek; i++) {
      result.push(new Date(nowYear, nowMonth + 1, i));
    }
  
    return result;
  };
  const allDay: Date[] = monthList(newDate);

  const dateToyyyymmdd = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}${month}${day}`;
  };
  
  console.log(allDay.map((el) => {
    console.log(dateToyyyymmdd(el).slice(6,8));
  }));
  
  return (
    <CalenderWrapper>
      <YearMonthContainer>
        <div>
          <button onClick={()=>{changeMonth(-1)}}>이전</button>
        </div>
        <div>{`${newDate.getFullYear()}년  ${newDate.getMonth() + 1}월`}</div>
        <div>
          <button onClick={()=>{changeMonth(1)}}>다음</button>
        </div>
      </YearMonthContainer>
      {/* 요일 */} 
      <WeekContainer>
        {WEEKDAY.map(el=> <DayDiv>{el}</DayDiv>)}
      </WeekContainer>
      {/* 날짜 */}
      <DateContainer>
        <Datebox>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
        </Datebox>
        <Datebox>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
        </Datebox>
        <Datebox>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
        </Datebox>
        <Datebox>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
        </Datebox>
        <Datebox>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
        </Datebox>
        <Datebox>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
          <Day>#</Day>
        </Datebox>
      </DateContainer>
    </CalenderWrapper>
  );
};
const CalenderWrapper = styled.div`
  width: 364px;
  height: 416px;
  margin: 0 auto;
`;
const YearMonthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 290px;
  height: 32px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const WeekContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  width: 304px;
  height: 32px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
const DayDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 32px;
`;
const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 304px;
  height: 242px;

  margin: 30px auto 0 auto;
`;
const Datebox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 304px;

  margin-bottom: 10px;
`;
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 32px;
`;

export default Calender;
