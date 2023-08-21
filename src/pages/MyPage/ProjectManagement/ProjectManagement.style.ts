import theme from '@/styles/theme';
import styled from 'styled-components';

export const ProjectManageTopMenuContainer = styled.ul`
  display: flex;
  border: 1px solid #222;
  border-radius: 5px;
  padding: 20px 0;
  & > li {
    width: 25%;
    text-align: center;
    font-size: 1.4rem;
    border-left: 1px solid rgba(0, 0, 0, 0.4);
    color: rgba(0, 0, 0, 0.5);
    &:first-child {
      border-left: none;
    }
    cursor: pointer;
    & > div:first-child {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
    &.active {
      color: #222;
    }
  }
`;

export const ProjectManegeContent = styled.section`
  padding-top: 50px;
`;

export const RecruitList = styled.li`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
`;

export const RecruitTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const RecruitThumnail = styled.div`
  background-color: #ccc;
  width: 130px;
  height: 120px;
`;

export const RecruitContent = styled.div`
  width: calc(100% - 130px);
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RecruitDate = styled.div`
  font-size: 1.3rem;
  line-height: 1.3;
  margin-top: 10px;
  & > div {
    display: flex;
    font-weight: 700;
    & > div {
      width: 100px;
    }
  }
  & span {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const RecruitCount = styled.div`
  font-size: 1.2rem;
`;

export const RecruitHandler = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px 0;
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
  & span {
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
