import styled from 'styled-components';
import SearchInput from '@component/input/Search/Search';

const Container = styled.div`
  margin-left: 170px;
  margin-right: 170px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  width: 70px;
  height: 52px;
  border-radius: 20px;
  border: 1px solid #cccccc;
  background-color: white;
`;
const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 12px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectList = () => {
  return (
    <>
      {/* <Header/> */}
      <Container>
        <Header>
          <SearchInput />
          <Filter>
            <Span>필터</Span>
            <Button></Button>
          </Filter>
        </Header>
        <hr />
      </Container>
      {/* <Footer/> */}
    </>
  );
};

export default ProjectList;
