import Button from "@component/input/Button/Button";
import TextField from "@component/input/TextField/TextField";
import { CommonCenterWrapper } from "@styles/CommonStyles";
import CheckBox from "@component/input/CheckBox/CheckBox";
import ReactQuill from "react-quill";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {
  DateInput,
  EditorBlock,
  FileInput,
  FileInputLabel,
  FileInputSapn,
  Form,
  Grid,
  GridItem,
  H1,
  ImageRow,
  ImagePreviewBox,
  Label,
  RadioInput,
  RadioSpan,
  Row,
  Section,
} from "./ProjectNew.style";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

interface RadioButtonProps {
  id: string;
  text: string;
  name: string;
}

const RadioButton = ({ id, text, name }: RadioButtonProps) => {
  return (
    <Label htmlFor={id}>
      <RadioInput id={id} name={name}></RadioInput>
      <RadioSpan>{text}</RadioSpan>
    </Label>
  );
};

const ProjectNew = () => {
  const { register, watch } = useForm();
  const [value, setValue] = useState("");
  const serviceTypeList = [
    "건강/의학",
    "뷰티 / 패션",
    "이커머스",
    "금융",
    "스포츠",
    "의료",
    "매칭 서비스",
    "뉴스",
    "어린이",
    "소셜네트워크",
    "인공지능",
    "기타",
  ];

  const images = watch("thumbnail");
  const [imgPreViewPathList, setImgPreViewPathList] = useState<Array<string>>(
    []
  );
  useEffect(() => {
    if (images && images.length > 0) {
      setImgPreViewPathList((curList) => {
        const newItem = URL.createObjectURL(images[0]);
        const copyList = [...curList];
        copyList.push(newItem);
        return copyList;
      });
    }
  }, [images]);

  return (
    <CommonCenterWrapper>
      <div style={{ paddingTop: '88px' }}></div>
      <Form>
        <Section>
          <H1>프로젝트 유형</H1>
          <Row>
            <RadioButton id="web" text="Web" name="category"></RadioButton>
            <RadioButton id="app" text="App" name="category"></RadioButton>
            <RadioButton id="game" text="Game" name="category"></RadioButton>
          </Row>
        </Section>
        <Section>
          <H1>서비스 분야</H1>
          <Grid>
            {serviceTypeList.map((val, idx) => (
              <GridItem key={idx}>
                <CheckBox label={val} name={"type"} />
              </GridItem>
            ))}
          </Grid>
        </Section>
        <Section>
          <H1>모집 마감일</H1>
          <DateInput />
        </Section>
        <Section>
          <H1>이미지</H1>{" "}
          <ImageRow>
            <FileInputLabel htmlFor="thumbnail">
              <FileInput
                {...register("thumbnail")}
                type="file"
                name="thumbnail"
                id="thumbnail"
              />
              <FileInputSapn>이미지 추가</FileInputSapn>
            </FileInputLabel>
            {imgPreViewPathList.map((path, idx) => {
              return (
                <ImagePreviewBox key={idx}>
                  <img src={path} />
                </ImagePreviewBox>
              );
            })}
          </ImageRow>
        </Section>

        <Section>
          <H1>제목</H1>
          <TextField placeholder="제목을 입력해주세요."></TextField>
          <EditorBlock>
            <ReactQuill theme="snow" value={value} onChange={setValue} />{" "}
          </EditorBlock>
        </Section>
      </Form>
      <Button value="작성하기"></Button>
    </CommonCenterWrapper>
  );
};

export default ProjectNew;
