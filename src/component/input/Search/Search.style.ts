import styled from 'styled-components';

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  width: 47px;
  height: 47px;
  background-color: rgb(224, 35, 77, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 593px;
  height: 67px;
  border-radius: 40px;
  border: 1px solid #cccccc;
  font-size: 25px;
  padding-left: 20px;
  padding-right: 20px;
`;
