import { Circle, Input, Wrapper } from './Search.style';
import SearchIcon from '@assets/images/common/search.svg';

function SearchInput() {
  return (
    <Wrapper>
      <Input placeholder="검색어를 입력해주세요..."></Input>
      <Circle>
        <img src={SearchIcon} alt="#" />
      </Circle>
    </Wrapper>
  );
}

export default SearchInput;
