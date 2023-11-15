import React, { useState } from "react";
import {
  ModalBackground,
  PositionCategory,
  PositionConfirm,
  PositionContainer,
  PositionList,
  PositionTab,
  PositionTitle,
} from "./PositionModal.style";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";

type Category = "MANAGER" | "DEVELOPER" | "DESIGNER" | "";

const POSITION_LIST = {
  MANAGER: [
    "서비스 기획자",
    "웹 기획자",
    "프로젝트 매니저",
    "프로젝트 오너",
    "게임 기획자",
  ],
  DEVELOPER: [
    "웹 프론트엔드 개발자",
    "웹 백엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
    "IOS 개발자",
    "크로스플랫폼 앱 개발자",
    "게임 개발자",
    "데이터 사이언티스트",
    "빅데이터 엔지니어",
    "머신러닝 엔지니어",
    "데브옵스 엔지니어",
    "웹 퍼블리셔",
  ],
  DESIGNER: [
    "UI / UX 디자이너",
    "GUI 디자이너",
    "웹 디자이너",
    "캐릭터 디자이너",
    "모바일 디자이너",
    "그래픽 디자이너",
    "3D 디자이너",
  ],
};

const PositionModal = ({ setPosition, onClickPosition }) => {
  const [category, setCategory] = useState<Category>("MANAGER");
  const [click, setClick] = useState<string>("");
  const onClickCategory = (category: Category) => {
    setCategory(category);
  };
  const onClickConfirm = () => {
    if (click) {
      setPosition({ name: click, category });
      onClickPosition(false);
    } else {
      alert("포지션을 선택하지 않았습니다.");
    }
  };

  return (
    <>
      <ModalBackground />
      <PositionContainer>
        <PositionTitle>포지션을 선택해주세요.</PositionTitle>
        <PositionTab>
          <PositionCategory>
            <li
              className={category === "MANAGER" ? "active" : ""}
              onClick={onClickCategory.bind(null, "MANAGER")}
            >
              기획자
            </li>
            <li
              className={category === "DEVELOPER" ? "active" : ""}
              onClick={onClickCategory.bind(null, "DEVELOPER")}
            >
              개발자
            </li>
            <li
              className={category === "DESIGNER" ? "active" : ""}
              onClick={onClickCategory.bind(null, "DESIGNER")}
            >
              디자이너
            </li>
          </PositionCategory>
          <PositionList>
            {POSITION_LIST[category].map((position: string, idx: number) => {
              return (
                <li
                  className={click === position ? "active" : ""}
                  onClick={() => setClick(position)}
                  key={ListKeyGenerater(idx, position)}
                >
                  {position}
                </li>
              );
            })}
          </PositionList>
        </PositionTab>
        <PositionConfirm>
          <button onClick={onClickConfirm} type="button">
            선택
          </button>
          <button onClick={() => onClickPosition(false)} type="button">
            취소
          </button>
        </PositionConfirm>
      </PositionContainer>
    </>
  );
};

export default PositionModal;
