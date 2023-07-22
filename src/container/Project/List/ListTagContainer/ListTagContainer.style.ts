import { Tag } from '@/component/common/Tag/Tag';
import styled from 'styled-components';

export const ProjectListTags = styled.section`
  display: flex;
  align-self: center;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 150px;
`;
export const FilterTag = styled(Tag)`
  :hover {
    border-color: ${({ theme }) => theme.color.red};
    color: ${({ theme }) => theme.color.red};
    cursor: pointer;
  }
`;
