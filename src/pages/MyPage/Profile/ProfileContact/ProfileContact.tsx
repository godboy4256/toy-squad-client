import React from "react";
import styled from "styled-components";
import { ProfileNoValue } from "../Profile.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ProfileContactCotaniner = styled.div``;
const ProfileContactWrapper = styled.div`
  font-size: 1.5rem;
  & > div {
    display: flex;
    align-items: center;
    &:first-of-type {
      margin-bottom: 5px;
    }
  }
  & > div svg {
    margin-right: 10px;
  }
`;

const ProfileContact = ({ value }) => {
  return (
    <ProfileContactCotaniner>
      <ProfileContactWrapper>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          {JSON.parse(sessionStorage.getItem("my_info"))?.email}
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          {value?.phone || (
            <ProfileNoValue>전화번호가 없습니다.</ProfileNoValue>
          )}
        </div>
      </ProfileContactWrapper>
    </ProfileContactCotaniner>
  );
};

export default ProfileContact;
