import styled from "styled-components";

export const NormalButtonStyle = styled.button`
  background-color: ${(props) => (props.disabled ? "#ccc" : "#e0234d")};
  width: 100%;
  padding: 14px 0;
  border-radius: 8px;
  color: white;
  font-size: 1.6rem;
  height: fit-content;
`;
