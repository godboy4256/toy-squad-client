// import * as React from "react";
// import Button from "@/component/input/Button/Button";
// import TextField from "@/component/input/TextField/TextField";
// import { CommonCenterWrapper } from "@/styles/CommonStyles";
// import CheckBox from "@/component/input/CheckBox/CheckBox";
// import ReactQuill from "react-quill";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import {
//   DateInput,
//   EditorBlock,
//   FileInput,
//   FileInputLabel,
//   FileInputSapn,
//   Form,
//   Grid,
//   GridItem,
//   H1,
//   ImageRow,
//   ImagePreviewBox,
//   Label,
//   RadioInput,
//   RadioSpan,
//   Row,
//   Section,
// } from "./ProjectNew.style";
// import { useForm } from "react-hook-form";
// import { useEffect, useState } from "react";
// import "react-quill/dist/quill.snow.css";
// import WithAuth from "@/component/common/WithAuth/WithAuth";
// import { SendToServer } from "@/utils/SendToServer";
// import { Input } from "antd";

// interface RadioButtonProps {
//   id: string;
//   text: string;
//   name: string;
// }

// const RadioButton = ({ id, text, name }: RadioButtonProps) => {
//   return (
//     <Label htmlFor={id}>
//       <RadioInput id={id} name={name}></RadioInput>
//       <RadioSpan>{text}</RadioSpan>
//     </Label>
//   );
// };

// const ProjectNew = () => {
//   const { register, watch } = useForm();
//   const [value, setValue] = useState("");
//   const serviceTypeList = [
//     "건강/의학",
//     "뷰티 / 패션",
//     "이커머스",
//     "금융",
//     "스포츠",
//     "의료",
//     "매칭 서비스",
//     "뉴스",
//     "어린이",
//     "소셜네트워크",
//     "인공지능",
//     "기타",
//   ];

//   const images = watch("thumbnail");
//   const [imgPreViewPathList, setImgPreViewPathList] = useState<Array<string>>(
//     []
//   );
//   useEffect(() => {
//     if (images && images.length > 0) {
//       setImgPreViewPathList((curList) => {
//         const newItem = URL.createObjectURL(images[0]);
//         const copyList = [...curList];
//         copyList.push(newItem);
//         return copyList;
//       });
//     }
//   }, [images]);

//   return (
//     <CommonCenterWrapper>
//       <div style={{ paddingTop: "88px" }}></div>
//       <Form>
//         <Section>
//           <h2>프로젝트 이름</h2>
//           <Input placeholder="프로젝트의 이름을 입력해주세요." />
//         </Section>
//         <Section>
//           <H1>서비스 분야</H1>
//           <Grid>
//             {serviceTypeList.map((val, idx) => (
//               <GridItem key={idx}>
//                 <CheckBox label={val} name={"type"} />
//               </GridItem>
//             ))}
//           </Grid>
//         </Section>
//         <Section>
//           <H1>모집 마감일</H1>
//           <DateInput />
//         </Section>
//         <Section>
//           <H1>이미지</H1>
//           <ImageRow>
//             <FileInputLabel htmlFor="thumbnail">
//               <FileInput
//                 {...register("thumbnail")}
//                 type="file"
//                 name="thumbnail"
//                 id="thumbnail"
//               />
//               <FileInputSapn>이미지 추가</FileInputSapn>
//             </FileInputLabel>
//             {imgPreViewPathList.map((path, idx) => {
//               return (
//                 <ImagePreviewBox key={idx}>
//                   <img src={path} />
//                 </ImagePreviewBox>
//               );
//             })}
//           </ImageRow>
//         </Section>

//         <Section>
//           <H1>제목</H1>
//           <TextField placeholder="제목을 입력해주세요."></TextField>
//           <EditorBlock>
//             <ReactQuill theme="snow" value={value} onChange={setValue} />{" "}
//           </EditorBlock>
//         </Section>
//       </Form>
//       <Button
//         onClick={() => {
//           const postData = {
//             userId: "string",
//             role: "G",
//             name: "string",
//             intro: "string",
//             description: "string",
//             skills: ["string"],
//             imgUrl: "string",
//             startDate: "string",
//             endDate: "string",
//             productType: "string",
//             fields: ["string"],
//             contactType: "string",
//             place: "string",
//             recruitStartDate: "string",
//             recruitEndDate: "string",
//           };

//           SendToServer({
//             path: "project",
//             method: "POST",
//             needAuth: true,
//             data: postData,
//           });
//         }}
//       >
//         작성하기
//       </Button>
//     </CommonCenterWrapper>
//   );
// };

// export default WithAuth(ProjectNew);
// 담당자 부재로 코드 대기

import * as React from "react";
import Button from "@/component/input/Button/Button";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";
import WithAuth from "@/component/common/WithAuth/WithAuth";
import { SendToServer } from "@/utils/SendToServer";
import {
  ProjectNewContainer,
  ProjectNewValueTitle,
  ProjectNewContent,
  ProjectNewTitle,
  ProjectNewInputGrid,
  ProjectNewSkillsWrapper,
} from "./ProjectNew.style";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import CustomSelect from "@/component/input/CustomSelect/CustomSelect";
import ProfileSkills from "@/pages/MyPage/Profile/ProfileSkills/ProfileSkills";
import ProfileSkillsEdit from "@/pages/MyPage/Profile/ProfileSkills/ProfileSkillsEdit";
import SkillTree from "@/component/input/SkillTree/SkillTree";

const ProjectNew = () => {
  return (
    <>
      <ProjectNewTitle>
        <CommonCenterWrapper>
          새로운 프로젝트 모집글을 등록합니다.
        </CommonCenterWrapper>
      </ProjectNewTitle>
      <CommonCenterWrapper>
        <ProjectNewContainer>
          <ProjectNewInputGrid>
            <ProjectNewContent width={33.3}>
              <ProjectNewValueTitle>프로젝트 이름</ProjectNewValueTitle>
              <Input placeholder="프로젝트의 이름을 입력해주세요." />
            </ProjectNewContent>
            <ProjectNewContent width={33.3}>
              <ProjectNewValueTitle>프로젝트 분야</ProjectNewValueTitle>
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
            </ProjectNewContent>
            <ProjectNewContent width={33.3}>
              <ProjectNewValueTitle>플랫폼</ProjectNewValueTitle>
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
            </ProjectNewContent>
          </ProjectNewInputGrid>
          <ProjectNewInputGrid>
            <ProjectNewContent width={33.3}>
              <ProjectNewValueTitle>대면 여부</ProjectNewValueTitle>
              <CustomSelect
                placeHolder="대면 방식"
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
            </ProjectNewContent>
            <ProjectNewContent width={33.3}>
              <ProjectNewValueTitle>주요 진행 지역</ProjectNewValueTitle>
              <CustomSelect
                placeHolder="지역 선택"
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
            </ProjectNewContent>
          </ProjectNewInputGrid>
          <ProjectNewContent>
            <ProjectNewValueTitle>필요 스킬</ProjectNewValueTitle>
            <ProjectNewSkillsWrapper>
              <SkillTree value={[]} />
            </ProjectNewSkillsWrapper>
          </ProjectNewContent>
          <ProjectNewContent>
            <ProjectNewValueTitle>프로젝트 소개</ProjectNewValueTitle>
            <TextArea
              placeholder="프로젝트에 대한 소개글을 작성해주세요."
              autoSize={{ minRows: 4, maxRows: 6 }}
            />
          </ProjectNewContent>
        </ProjectNewContainer>
        {/* <Button
          onClick={() => {
            const postData = {
              userId: "string",
              role: "G",
              name: "string",
              intro: "string",
              description: "string",
              skills: ["string"],
              imgUrl: "string",
              startDate: "string",
              endDate: "string",
              productType: "string",
              fields: ["string"],
              contactType: "string",
              place: "string",
              recruitStartDate: "string",
              recruitEndDate: "string",
            };

            SendToServer({
              path: "project",
              method: "POST",
              needAuth: true,
              data: postData,
            });
          }}
        >
          작성하기
        </Button> */}
      </CommonCenterWrapper>
    </>
  );
};

// export default ProjectNew;
export default WithAuth(ProjectNew);
