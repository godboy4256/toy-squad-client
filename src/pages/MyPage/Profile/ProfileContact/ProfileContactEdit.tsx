import { ModalBackground } from "@/component/input/PositionFiled/PositionModal.style";
import { myUserId } from "@/utils/GetMyInfo";
import { SendToServer } from "@/utils/SendToServer";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "antd";
import React from "react";
import styled from "styled-components";

const ProfileContactEditContainer = styled.div`
  padding: 30px;
  width: 500px;
  border-radius: 5px;
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  z-index: 9999999000;
  transform: translate(-50%, -50%);
  & > div {
    font-size: 1.4rem;
    &:first-of-type {
      margin-bottom: 20px;
    }
  }
  & > h3 {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  & div > h4 {
    margin-bottom: 5px;
  }
`;

const ProfileContactEditEditButtons = styled.div`
  margin-top: 40px;
  & button {
    margin-right: 5px;
  }
`;

const ProfileContactEdit = ({ value, setValue, offEdit }) => {
  let phone = value?.phone;
  return (
    <>
      <ModalBackground />
      <ProfileContactEditContainer>
        <h3>전화번호 수정</h3>
        <div>
          <h4>
            전화번호 <FontAwesomeIcon icon={faPhone} />
          </h4>
          <Input
            onChange={(event) => (phone = event.target.value)}
            placeholder="전화번호를 입력해주세요."
            defaultValue={value?.phone}
          />
        </div>
        <ProfileContactEditEditButtons>
          <Button
            onClick={() => {
              const postData = {
                userId: myUserId,
                phone,
              };
              setValue(postData);
              sessionStorage.setItem(
                "my_info",
                JSON.stringify({
                  ...JSON.parse(sessionStorage.getItem("my_info")),
                  phone,
                })
              );
              SendToServer({
                path: `users`,
                method: "PATCH",
                data: postData,
                needAuth: true,
              });
              offEdit();
            }}
            type="primary"
          >
            확인
          </Button>
          <Button onClick={offEdit}>취소</Button>
        </ProfileContactEditEditButtons>
      </ProfileContactEditContainer>
    </>
  );
};

export default ProfileContactEdit;
