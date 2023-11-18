import * as React from "react";
import { Circle, Input, SearchStyle } from "./Search.style";
import SearchIcon from "@/assets/images/common/search.svg";

function Search() {
  return (
    <SearchStyle>
      <Input placeholder="검색어를 입력해주세요..."></Input>
      <Circle>
        <img src={SearchIcon} alt="#" />
      </Circle>
    </SearchStyle>
  );
}

export default Search;
