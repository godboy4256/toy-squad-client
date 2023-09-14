import styled from "styled-components";

type SwitchCircleProps = {
  direction: boolean;
};

export const SwtichContainer = styled.div`
  border: 1px solid #ccc;
  background-color: white;
  padding: 3px;
  width: 50px;
  height: 25px;
  border-radius: 10px;
`;

export const SwitchCircle = styled.div`
  background-color: #48b3ff;
  width: 50%;
  height: 100%;
  border-radius: 8px;
  margin-left: ${(props: SwitchCircleProps) => (props.direction ? "auto" : "")};
`;
