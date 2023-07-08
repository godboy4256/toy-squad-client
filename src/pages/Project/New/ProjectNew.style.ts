import styled from "styled-components";

export const Section = styled.section`
  margin-bottom: 60px;
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
export const ImageRow = styled(Row)`
  gap: 10px;
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

export const RadioInput = styled.input.attrs({ type: "radio" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.color.red};
  margin: 0;
`;

export const CheckBoxInput = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${({ theme }) => theme.color.red};
`;

export const DateInput = styled.input.attrs({ type: "date" })`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSize.l};
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: ${({ theme }) => theme.border.boxRadius};
`;

export const FileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: ${({ theme }) => theme.border.boxRadius};
  overflow: hidden;
  :hover {
    span {
      color: ${({ theme }) => theme.color.white};
    }

    background-color: ${({ theme }) => theme.color.lightGrey};
  }
`;

export const ImagePreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.color.lightGrey};
  border-radius: ${({ theme }) => theme.border.boxRadius};
  overflow: hidden;
  :hover {
    span {
      color: ${({ theme }) => theme.color.white};
    }

    background-color: ${({ theme }) => theme.color.lightGrey};
  }
  img {
    width: 300px;
    height: 200px;
  }
`;

export const FileInputSapn = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.color.lightGrey};
`;

export const Form = styled.form``;

export const EditorBlock = styled.div`
  width: 100%;
  .ql-toolbar {
    border-top-right-radius: ${({ theme }) => theme.border.boxRadius};
    border-top-left-radius: ${({ theme }) => theme.border.boxRadius};
  }
  .ql-container {
    background-color: white;
    border-bottom-right-radius: ${({ theme }) => theme.border.boxRadius};
    border-bottom-left-radius: ${({ theme }) => theme.border.boxRadius};
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  .quill {
    height: 100%;
  }

  height: 500px;
`;
