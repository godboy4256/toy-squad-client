import Button from '@/component/input/Button/Button';
import styled from 'styled-components';

export const RecruitContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  width: 340px;
  height: 755px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: ${({ theme }) => theme.border.boxRadius};
  padding: 30px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const PositionList = styled.ul`
  padding-left: 1.5em;
  margin-bottom: 2em;
`;
export const PositionItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.l};
  list-style: inside;
`;

export const RecruitSection = styled.section`
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const RecruitNotice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const RecruitTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 10px;
`;
export const RecruitButton = styled(Button)`
  margin-top: auto;
`;
