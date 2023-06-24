import Button from '@component/input/Button/Button';
import TextField from '@component/input/TextField/TextField';
import { CommonCenterWrapper } from '@styles/CommonStyles';
import {
  DateInput,
  Form,
  Grid,
  GridItem,
  H1,
  Label,
  RadioInput,
  Section,
} from './ProjectNew.style';
import CheckBox from '@component/input/CheckBox/CheckBox';

const ProjectNew = () => {
  return (
    <CommonCenterWrapper>
      <div style={{ paddingTop: '88px' }}></div>

      <Form>
        <Section>
          <H1>프로젝트 유형</H1>
          <Label htmlFor="web">
            <RadioInput id="web" name="category"></RadioInput>
            <span>Web</span>
          </Label>
          <Label htmlFor="app">
            <RadioInput id="app" name="category"></RadioInput>
            <span>Web</span>
          </Label>
          <Label htmlFor="game">
            <RadioInput id="game" name="category"></RadioInput>
            <span>PC 게임</span>
          </Label>
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
        </Section>
      </Form>

      <Button value="작성하기"></Button>
    </CommonCenterWrapper>
  );
};

export default ProjectNew;
