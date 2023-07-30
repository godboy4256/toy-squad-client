import styled from 'styled-components';

export const HrStyle = styled.hr`
  background: ${({ theme }) => theme.color.lightGrey};
  margin: 0;
  height: 1px;
  border: 0;
`;
