import styled from "styled-components";

type MemberCountStyleProps = {
  isCount?: number;
};

export const MemberCountContainer = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  padding: 13px;
  font-size: 1.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CountButton = styled.div`
  display: flex;
  & > div {
    color: #ccc;
    font-size: 2.2rem;
    cursor: pointer;
    &:first-of-type {
      margin-right: 5px;
    }
  }
`;

export const MemberContent = styled.div`
  color: ${(props: MemberCountStyleProps) => !(props.isCount > 0) && "#ccc"};
  & svg {
    margin-right: 10px;
  }
  & span {
    font-weight: 800;
  }
`;
