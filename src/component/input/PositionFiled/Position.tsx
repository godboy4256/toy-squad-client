import React, { useState } from "react";
import {
  ModalBackground,
  PositionCategory,
  PositionCategoryHidden,
  PositionConfirm,
  PositionContainer,
  PositionList,
  PositionTab,
  PositionTitle,
} from "./Position.style";
import { ListKeyGenerater } from "@/utils/ListKeyGenerate";
import TextField from "../TextField/TextField";
import { FieldValues, UseFormRegister } from "react-hook-form";

type Category = "MANAGER" | "DEVELOPER" | "DESIGNER" | "";
type PositionProps = {
  register?: UseFormRegister<FieldValues>;
  errorMessage?: string;
};

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

const PositionField = ({ register, errorMessage }: PositionProps) => {
  const [category, setCategory] = useState<Category>("MANAGER");
  const [positionSelect, setPositionSelect] = useState(false);
  const [positionClick, setPositionClick] = useState("");
  const [positionConfirm, setPositionConfirm] = useState("");
  const handleConfirm = () => {
    setPositionConfirm(positionClick);
    setPositionSelect(false);
  };
  const handleCancel = () => {
    setPositionClick(positionConfirm);
    setPositionSelect(false);
  };
  const onClickCategory = (category: Category) => {
    setCategory(category);
  };
  return (
    <>
      <PositionCategoryHidden>
        <TextField
          register={register}
          params="position_category"
          value={category}
        />
      </PositionCategoryHidden>
      <TextField
        register={register}
        params="position"
        type="text"
        label="포지션"
        placeholder="포지션 선택"
        value={positionConfirm}
        onFocusFunc={() => setPositionSelect(true)}
      />
      {positionSelect && (
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
                {POSITION_LIST[category].map(
                  (position: string, idx: number) => {
                    return (
                      <li
                        className={position === positionClick ? "active" : ""}
                        onClick={() => setPositionClick(position)}
                        key={ListKeyGenerater(idx, position)}
                      >
                        {position}
                      </li>
                    );
                  }
                )}
              </PositionList>
            </PositionTab>
            <PositionConfirm>
              <button type="button" onClick={handleConfirm}>
                선택
              </button>
              <button type="button" onClick={handleCancel}>
                취소
              </button>
            </PositionConfirm>
          </PositionContainer>
        </>
      )}
    </>
  );
};

export default PositionField;
