import styled from 'styled-components';

export const TextFieldStyle = styled.input`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
`;

export const TextFieldLabel = styled.label``;
