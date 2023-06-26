import Button from '@component/input/Button/Button';
import TextField from '@component/input/TextField/TextField';
import { CommonCenterWrapper } from '@styles/CommonStyles';
import CheckBox from '@component/input/CheckBox/CheckBox';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  DateInput,
  EditorBlock,
  Form,
  Grid,
  GridItem,
  H1,
  Label,
  RadioInput,
  RadioSpan,
  Row,
  Section,
} from './ProjectNew.style';

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
  return (
    <CommonCenterWrapper>
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
            {[
              '건강/의학',
              '뷰티 / 패션',
              '이커머스',
              '금융',
              '스포츠',
              '의료',
              '매칭 서비스',
              '뉴스',
              '어린이',
              '소셜네트워크',
              '인공지능',
              '기타',
            ].map((val, idx) => (
              <GridItem key={idx}>
                <CheckBox label={val} name={'type'} />
              </GridItem>
            ))}
          </Grid>
        </Section>
        <Section>
          <H1>모집 마감일</H1>
          <DateInput />
        </Section>
        <Section>
          <H1>제목</H1>
          <TextField placeholder="제목을 입력해주세요."></TextField>
          <EditorBlock>
            <Editor
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
          </EditorBlock>
        </Section>
      </Form>

      <Button value="작성하기"></Button>
    </CommonCenterWrapper>
  );
};

export default ProjectNew;
