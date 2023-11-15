import styled from "styled-components";

export const CommonCenterWrapper = styled.div`
  width: 1110px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 850px;
  }

  @media screen and (max-width: 768px) {
    max-width: 550px;
  }
`;
