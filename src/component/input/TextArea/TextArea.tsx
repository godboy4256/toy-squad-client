import React from 'react';
import styled from 'styled-components';

const TextAreaContainer = styled.div`
  & textarea {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
    padding: 10px;
    font-size: 1.5rem;
  }
`;

const TextCount = styled.div`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #777;
`;

type TextAreaPropsType = {
  placeHolder?: string;
};

const TextArea = ({ placeHolder }: TextAreaPropsType) => {
  return (
    <TextAreaContainer>
      <textarea
        placeholder={placeHolder ? placeHolder : '글자를 입력해주세요.'}
      ></textarea>
      <TextCount>0 / 300</TextCount>
    </TextAreaContainer>
  );
};

export default TextArea;
