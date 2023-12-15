import styled from "styled-components";

export const Circle = styled.div`
  width: 35px;
  height: 35px;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background-color: rgb(224, 35, 77, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 15px;
  }
`;
export const SearchStyle = styled.div`
  width: 597px;
  position: relative;
  height: 50px;
  border-radius: 40px;
  border: 1px solid #cccccc;
`;

export const Input = styled.input`
  width: 547px;
  height: 100%;
  font-size: 1.6rem;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  background: none;
`;
