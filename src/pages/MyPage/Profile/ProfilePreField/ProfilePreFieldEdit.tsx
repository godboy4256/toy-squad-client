import CustomSelect from "@/component/input/CustomSelect/CustomSelect";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const ProfilePreFieldEditContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  & .ant-select {
    width: 100%;
  }
`;

const ProfilePreFieldEditButtons = styled.div`
  margin-top: 10px;
  & button {
    margin-right: 5px;
  }
`;

const ProfilePreFieldEdit = ({ value, setValue, offEdit }) => {
  let addList = [...value];
  return (
    <ProfilePreFieldEditContainer>
      <CustomSelect
        defaultValue={value.map((filed) => {
          return { value: filed };
        })}
        onChangeFunc={(event) => {
          addList = event;
        }}
        placeHolder="포지션 선택"
        options={[
          { value: "건강/운동" },
          { value: "뷰티/패션" },
          { value: "이커머스" },
          { value: "금융" },
          { value: "스포츠" },
          { value: "뉴스" },
          { value: "의료" },
          { value: "매칭 서비스" },
          { value: "어린이" },
          { value: "소셜네트워크" },
          { value: "인공지능" },
        ]}
        mode="tags"
      />
      <ProfilePreFieldEditButtons>
        <Button
          onClick={() => {
            const set: any = new Set([...addList]);
            setValue([...set]);
            offEdit();
          }}
          type="primary"
        >
          확인
        </Button>
        <Button onClick={offEdit}>취소</Button>
      </ProfilePreFieldEditButtons>
    </ProfilePreFieldEditContainer>
  );
};

export default ProfilePreFieldEdit;
