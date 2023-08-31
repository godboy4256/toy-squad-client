import styled from 'styled-components';

export const MemberListContainer = styled.div`
  background-color: white;
  border-radius: 30px;
  padding: 30px;
`;
export const MemberListTitle = styled.h3`
  font-size: 1.7rem;
  white-space: nowrap;
  text-align: center;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const MemberListBody = styled.div``;
export const MemberContainer = styled.div`
  width: 500px;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
`;
export const LeaderMark = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.color.green};
`;
export const MemberSetting = styled.div`
  display: flex;
  align-items: center;
  & > button {
    white-space: nowrap;
    padding: 10px 12px;
    margin-left: 10px;
    font-size: 1.4rem;
    &:last-child {
      background-color: #777;
      /* background-color: ${({ theme }) => theme.color.red}; */
    }
  }
`;
