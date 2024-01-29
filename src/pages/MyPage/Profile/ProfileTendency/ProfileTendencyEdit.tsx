import { ModalBackground } from "@/component/common/Modal/Modal.style";
import { myInfoData } from "@/utils/GetMyInfo";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import { AutoComplete, Button } from "antd";
import React from "react";
import styled from "styled-components";

const ProfileTendencyEditContainer = styled.div`
  margin-top: 50px;
  position: fixed;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  z-index: 99999;
  border-radius: 10px;
  & .ant-select.ant-select-auto-complete {
    width: 500px;
  }
`;

const ProfileTendencyEditButtons = styled.div`
  margin-top: 10px;
  & button {
    margin-right: 5px;
  }
`;

const ProfileTendencyEdit = ({ value, setValue, offEdit }) => {
  let addValue;
  const options = [
    {
      value: "계획 수립과 일정 관리를 통해 프로젝트를 체계적으로 추진합니다.",
    },
    {
      value:
        "새로운 아이디어와 접근 방식을 통해 프로젝트에 창의성을 부여합니다.",
    },
    {
      value:
        "효과적인 의사소통을 중시하며 팀 내외에서의 원활한 소통을 이끌 수 있습니다.",
    },
    {
      value:
        "어려운 상황에서도 냉정하게 문제를 해결하고 팀원들에게 효과적인 해결책을 제시합니다.",
    },
    {
      value:
        "팀을 이끌어 나가는 데 주도적이며 팀원들을 동기부여하고 통솔할 수 있습니다.",
    },
    {
      value:
        "팀의 목표를 중시하며 다양한 역할 수행과 팀원 간 협력을 촉진시킬 수 있습니다.",
    },
    {
      value:
        "독립적으로 일할 수 있으며 자신의 업무에 책임감을 가지고 주도적으로 진행합니다.",
    },
    {
      value:
        "빠르게 변화하는 상황에 유연하게 대처하며 필요에 따라 역할을 조절할 수 있습니다.",
    },
    {
      value:
        "팀 내 정보를 적극적으로 공유하고 투명한 의사결정을 통해 팀원들 간의 이해관계를 강화하는 역할을 합니다.",
    },
    {
      value:
        "다양한 의견과 피드백을 열렬히 수용하며 개선의 여지가 있는 부분을 찾아낼 수 있습니다.",
    },
  ];

  return (
    <>
      <ModalBackground />

      <ProfileTendencyEditContainer>
        <ul>
          {value.map((tendency, idx) => {
            return (
              <li key={ListKeyGenerater(idx, tendency)}>
                {tendency}{" "}
                <button
                  onClick={() => {
                    setValue((prev) => {
                      return prev.filter((item) => {
                        return item !== tendency;
                      });
                    });
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
        <AutoComplete
          onChange={(event) => (addValue = event)}
          onSelect={(event) => (addValue = event)}
          options={options}
          placeholder={`"${myInfoData.name}" 님의 프로젝트 참여 성향을 입력해주세요.`}
          filterOption={(inputValue, option) =>
            option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
        <ProfileTendencyEditButtons>
          <Button
            onClick={() => {
              setValue((prev) => [...prev, addValue]);
              offEdit();
            }}
            type="primary"
          >
            확인
          </Button>
          <Button onClick={offEdit}>취소</Button>
        </ProfileTendencyEditButtons>
      </ProfileTendencyEditContainer>
    </>
  );
};

export default ProfileTendencyEdit;
