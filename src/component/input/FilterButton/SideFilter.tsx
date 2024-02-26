import React from "react";
import {
  SideFilterContainer,
  FilterLabel,
  FilterTitle,
} from "./SideFilter.style";
import CustomSelect from "../CustomSelect/CustomSelect";
import Button from "../Button/Button";

const SideFilter = () => {
  return (
    <SideFilterContainer>
      <FilterTitle>필터</FilterTitle>
      <div>
        <FilterLabel>팀 인원</FilterLabel>
        <CustomSelect
          placeHolder="팀 인원 선택"
          mode="tags"
          options={[
            {
              value: "2인",
            },
            {
              value: "3인",
            },
            {
              value: "4인",
            },
            {
              value: "5인",
            },
            {
              value: "6인",
            },
            {
              value: "7인",
            },
            {
              value: "8인 이상",
            },
          ]}
        />
        <FilterLabel>대면 여부</FilterLabel>
        <CustomSelect
          placeHolder="대면 여부 선택"
          mode="multiple"
          options={[
            {
              value: "대면",
            },
            {
              value: "비대면",
            },
            {
              value: "혼합 방식",
            },
          ]}
        />
        <FilterLabel>플랫폼</FilterLabel>
        <CustomSelect
          placeHolder="플랫폼 선택"
          mode="multiple"
          options={[
            {
              value: "안드로이드 앱",
            },
            {
              value: "IOS 앱",
            },
            {
              value: "반응형 웹",
            },
            {
              value: "설치형/솔루션",
            },
            {
              value: "PC 프로그램",
            },
            {
              value: "게임",
            },
          ]}
        />
        <FilterLabel>프로젝트 분야</FilterLabel>
        <CustomSelect
          placeHolder="분야 선택"
          mode="multiple"
          options={[
            {
              value: "건강 / 운동",
            },
            {
              value: "뷰티 / 패션",
            },
            {
              value: "이커머스",
            },
            {
              value: "금융",
            },
            {
              value: "스포츠",
            },
            {
              value: "의료",
            },
            {
              value: "매칭 서비스",
            },
            {
              value: "뉴스",
            },
            {
              value: "어린이",
            },
            {
              value: "소셜네트워크",
            },
            {
              value: "인공지능",
            },
            {
              value: "기타",
            },
          ]}
        />
        <FilterLabel>프로젝트 지역</FilterLabel>
        <CustomSelect
          placeHolder="지역 선택"
          mode="multiple"
          options={[
            {
              value: "서울",
            },
            {
              value: "부산",
            },
            {
              value: "대구",
            },
            {
              value: "울산",
            },
            {
              value: "대전",
            },
            {
              value: "인천",
            },
            {
              value: "광주",
            },
            {
              value: "경기",
            },
            {
              value: "충북",
            },
            {
              value: "충남",
            },
            {
              value: "경북",
            },
            {
              value: "경남",
            },
            {
              value: "전북",
            },
            {
              value: "전남",
            },
            {
              value: "강원",
            },
            {
              value: "제주",
            },
          ]}
        />
        <FilterLabel>모집 포지션</FilterLabel>
        <CustomSelect
          placeHolder="포지션 선택"
          mode="multiple"
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
      </div>
      <Button>필터 적용</Button>
    </SideFilterContainer>
  );
};

export default SideFilter;
