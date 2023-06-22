import SearchInput from '@component/input/Search/Search';
import ProjectCard from '@component/common/ProjectCard/ProjectCard';
import {
  Container,
  Filter,
  FilterButton,
  Header,
  Hr,
  Line,
  Main,
  Select,
  SmallCircle,
  Span,
  Tag,
  Tags,
} from './ProjectList.style';

const ProjectList = () => {
  return (
    <>
      {/* <Header/> */}
      <Container>
        <Header>
          <SearchInput />
          <Filter>
            <Span>필터</Span>
            <FilterButton>
              <Line>
                <SmallCircle style={{ left: '4px' }} />
              </Line>
              <Line>
                <SmallCircle style={{ right: '4px' }} />
              </Line>
            </FilterButton>
          </Filter>
        </Header>
        <Hr />

        <Tags>
          <Tag>모두 보기</Tag>
          <Tag>웹 개발</Tag>
          <Tag>앱 개발</Tag>
          <Tag>단 기간 프로젝트</Tag>
          <Tag>프로젝트 시작 임박</Tag>
          <Tag>온라인</Tag>
          <Tag>서울 / 오프라인</Tag>
          <Tag>3 ~ 4일 프로젝트</Tag>
          <Tag>여유로운 진행 기간</Tag>
        </Tags>

        <Main>
          <Select name="sort" id="sort">
            <option value="newest">최신순</option>
            <option value="view">조회순</option>
          </Select>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, idx) => {
            if (idx % 4 === 0 && idx >= 4) {
              return (
                <>
                  <hr />
                  <ProjectCard />
                </>
              );
            } else {
              return <ProjectCard />;
            }
          })}
        </Main>
      </Container>
      {/* <Footer/> */}
    </>
  );
};

export default ProjectList;
