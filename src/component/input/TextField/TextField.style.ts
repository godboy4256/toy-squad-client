import styled from "styled-components";

export const TextFieldStyle = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: ${(props: { marginBottom: string }) => props.marginBottom};
`;

export const TextFieldLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin-bottom: 5px;
  display: block;
`;
