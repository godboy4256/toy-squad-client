import { Button, Input } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";
import UserProfile from "/assets/images/common/default_profile.svg";
import CustomSelect from "@/component/input/CustomSelect/CustomSelect";
import { ModalBackground } from "@/component/common/Modal/Modal.style";
import { EditButtonWrapper } from "../ProfileIntro/ProfileIntro.style";

const ProfileMyInfoEditContainer = styled.div`
  & > h4 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999999;
  padding: 30px;
  border-radius: 20px;
`;
const ProfileMyInfoEditImage = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto 20px;
  position: relative;
  text-align: center;
  & > input {
    display: none;
  }
  & > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  cursor: pointer;
`;

const ProfileMyInfoEdit = ({ value, setValue, offEdit }) => {
  const fileRef: any = useRef();
  const profileRef: any = useRef();
  let nameVal = "";
  let positionVal = "";

  const onClickEditImageUrl = (e) => {
    fileRef.current.input.click();
  };
  const onChangeEditImageUrl = (event) => {
    const input = event.target;

    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(input.files[0]);

      reader.onload = (e) => {
        profileRef.current.src = e.target.result;
      };
    }
  };
  const handleEdit = () => {
    setValue((prev) => {
      return {
        name: nameVal || prev.name,
        position: positionVal || prev.position,
        imgUrl: profileRef.current.src || prev.imgUrl,
      };
    });
    offEdit();
  };
  return (
    <>
      <ModalBackground />
      <ProfileMyInfoEditContainer>
        <h4>내 정보 편집</h4>
        <ProfileMyInfoEditImage onClick={onClickEditImageUrl}>
          <img
            ref={profileRef}
            src={value?.imgUrl ? value.imgUrl : UserProfile}
            alt="user profile img"
          />
          <Input ref={fileRef} onChange={onChangeEditImageUrl} type="file" />
        </ProfileMyInfoEditImage>
        <Input
          onChange={(e) => {
            console.log(e.currentTarget.value);
            nameVal = e.currentTarget.value;
          }}
          style={{ marginBottom: "10px" }}
          defaultValue={value?.name}
          placeholder="이름을 입력해주세요."
        />
        <CustomSelect
          onChangeFunc={(e) => (positionVal = e)}
          placeHolder="포지션 선택"
          defaultValue={
            value?.position && {
              label: value?.position,
              value: value?.position,
            }
          }
          options={[
            {
              label: "기획자",
              options: [
                { value: "서비스 기획자" },
                { value: "웹 기획자" },
                { value: "프로젝트 매니저" },
                { value: "프로젝트 오너" },
                { value: "게임 기획자" },
              ],
            },
            {
              label: "개발자",
              options: [
                { value: "웹 프론트엔드 개발자" },
                { value: "웹 백엔드 개발자" },
                { value: "웹 풀스택 개발자" },
                { value: "안드로이드 개발자" },
                { value: "IOS 개발자" },
                { value: "크로스플랫폼 앱 개발자" },
                { value: "게임 개발자" },
                { value: "데이터 사이언티스트" },
                { value: "빅데이터 엔지니어" },
                { value: "머신러닝 엔지니어" },
                { value: "데브옵스 엔지니어" },
                { value: "웹 퍼블리셔" },
              ],
            },
            {
              label: "디자이너",
              options: [
                { value: "UI / UX 디자이너" },
                { value: "GUI 디자이너" },
                { value: "웹 디자이너" },
                { value: "캐릭터 디자이너" },
                { value: "모바일 디자이너" },
                { value: "그래픽 디자이너" },
                { value: "3D 디자이너" },
              ],
            },
          ]}
        />
        <EditButtonWrapper>
          <Button onClick={handleEdit} type="primary">
            확인
          </Button>
          <Button onClick={offEdit}>취소</Button>
        </EditButtonWrapper>
      </ProfileMyInfoEditContainer>
    </>
  );
};

export default ProfileMyInfoEdit;
