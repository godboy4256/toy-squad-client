import styled from "styled-components";

export const SideFilterContainer = styled.div`
  margin-bottom: 20px;
  border-radius: 20px;
  position: sticky;
  top: 100px;
  border: 1px solid #ccc;
  padding: 30px;
  margin-right: 50px;
  height: fit-content;
  & > button {
    margin-top: 50px;
  }
`;

export const FilterTitle = styled.h2`
  font-size: 1.6rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  font-weight: 700;
`;

export const FilterLabel = styled.h3`
  font-size: 1.4rem;
  padding: 25px 0 5px;
`;
