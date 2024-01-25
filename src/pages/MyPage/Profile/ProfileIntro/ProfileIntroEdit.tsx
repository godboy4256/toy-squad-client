import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import styled from "styled-components";

const ProfileIntroEditContainer = styled.div`
  margin-top: 20px;
`;
const ProfileIntroEditButtons = styled.div`
  margin-top: 10px;
  & > button {
    margin-right: 5px;
  }
`;

const ProfileIntroEdit = ({ value, setValue, offEdit }) => {
  let introValue = "";
  const onClickEdit = () => {
    setValue(introValue);
    offEdit();
  };
  return (
    <ProfileIntroEditContainer>
      <TextArea
        onChange={(e) => {
          introValue = e.currentTarget.value;
        }}
        defaultValue={value}
        placeholder="소개를 작성해주세요."
        autoSize={{ minRows: 2, maxRows: 6 }}
      />
      <ProfileIntroEditButtons>
        <Button onClick={onClickEdit} type="primary">
          {value ? "수정" : "확인"}
        </Button>
        <Button onClick={() => offEdit()}>취소</Button>
      </ProfileIntroEditButtons>
    </ProfileIntroEditContainer>
  );
};

export default ProfileIntroEdit;
