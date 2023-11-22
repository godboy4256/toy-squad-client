import * as React from "react";
import {
  UserListContainer,
  UserListSearchBar,
  UserListTitle,
} from "./UserList.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";
import Search from "@/component/input/Search/Search";
import Hr from "@/component/common/Hr/Hr";

const UserList = () => {
  return (
    <UserListContainer>
      <CommonCenterWrapper>
        <UserListTitle>팀원 모집</UserListTitle>
        <UserListSearchBar>
          <Search />
          <div>필터</div>
        </UserListSearchBar>
        <Hr />
      </CommonCenterWrapper>
    </UserListContainer>
  );
};

export default UserList;
