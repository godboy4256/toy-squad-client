import styled from 'styled-components';

export const CheckBoxStyle = styled.div`
  display: flex;
  align-items: center;
`;
export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;
export const Label = styled.label<{ checked: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.m};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? '#e0234d' : 'white')};
`;

export const Span = styled.span`
  position: absolute;
  left: 20px;
  width: 100px;
  margin-left: 1em;
  display: flex;
  align-items: center;
`;

export const CheckIcon = styled.div`
  color: white;
`;
