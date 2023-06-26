import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: 100px;
`;
export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.5em;
  margin-top: 2em;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-right: 3em;
  margin-left: 0.5em;
  cursor: pointer;
`;
export const RadioSpan = styled.span`
  margin-left: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
export const GridItem = styled.div`
  margin-bottom: 1em;
`;

export const RadioInput = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.color.red};
  margin: 0;
`;

export const CheckBoxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.color.red};
`;

export const DateInput = styled.input.attrs({ type: 'date' })`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 0.5em;
`;

export const Form = styled.form`
  margin-top: 238px;
`;

export const EditorBlock = styled.div`
  .wrapper-class {
    border: 1px solid ${({ theme }) => theme.color.lightGrey};
    border-radius: 0.5em;
    overflow: hidden;
  }
  .editor-class {
    height: 400px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding-left: 12px;
  }
  .toolbar-class {
    /* animation reset */
    .rdw-option-wrapper,
    .rdw-dropdown-wrapper {
      :hover {
        box-shadow: none;
      }
    }
    .rdw-option-active {
      box-shadow: none;
      background-color: ${({ theme }) => theme.color.lightGrey};
    }

    .rdw-option-wrapper,
    .rdw-dropdown-wrapper {
      :hover {
        background-color: ${({ theme }) => theme.color.lightGrey};
      }
    }
  }
`;
