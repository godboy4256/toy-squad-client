import React from "react";
import styled from "styled-components";
import { MyPageSectionTitle } from "../MyPage.style";

const AnnouncementCardStyle = styled.li`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px;
  background-color: #f7f7f8;
  margin-bottom: 5px;
  border-radius: 5px;
  & > h4 {
    width: 80%;
    border-right: 1px solid #ccc;
    font-size: 1.6rem;
    font-weight: 700;
  }
  & > div {
    color: #777;
    font-size: 1.6rem;
  }
`;

const AnnouncementCardList = styled.ul``;

const AnnouncementCard = () => {
  return (
    <AnnouncementCardStyle>
      <h4>2023년 9월 16일 토이스쿼드가 출시되었습니다.</h4>
      <div>2023-09-16</div>
    </AnnouncementCardStyle>
  );
};

const Announcement = () => {
  return (
    <div>
      <MyPageSectionTitle>공지사항</MyPageSectionTitle>
      <AnnouncementCardList>
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
        <AnnouncementCard />
      </AnnouncementCardList>
    </div>
  );
};

export default Announcement;
