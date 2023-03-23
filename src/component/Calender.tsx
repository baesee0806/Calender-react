import styled from "@emotion/styled";
import React from "react";

const Calender = () => {
  return (
    <CalenderWrapper>
      <YearMonthContainer>
        <div>
          <button>이전</button>
        </div>
        <div>####년##월</div>
        <div>
          <button>다음</button>
        </div>
      </YearMonthContainer>
      {/* 요일 */}
      <WeekContainer>
        <DayDiv>월</DayDiv>
        <DayDiv>화</DayDiv>
        <DayDiv>수</DayDiv>
        <DayDiv>목</DayDiv>
        <DayDiv>금</DayDiv>
        <DayDiv>토</DayDiv>
        <DayDiv>일</DayDiv>
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
