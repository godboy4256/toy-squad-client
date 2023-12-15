import * as React from "react";
import { UserListContainer, UserListTitle } from "./UserList.style";
import { CommonCenterWrapper } from "@/styles/CommonStyles";

const UserList = () => {
  return (
    <UserListContainer>
      <CommonCenterWrapper>
        <UserListTitle>팀원 모집</UserListTitle>
      </CommonCenterWrapper>
    </UserListContainer>
  );
};

export default UserList;
