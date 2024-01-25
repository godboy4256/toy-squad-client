import React, { useState } from "react";
import {
  ProfileContentHeader,
  ProfileContentContainer,
  ProfileEditButton,
} from "./ProfileContent.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const ProfileContent = ({
  valueData,
  title,
  Content,
  ContentProps,
  EditField,
  EditFieldProps,
}: {
  title: string;
  valueData?: any;
  Content: any;
  ContentProps?: any;
  EditField?: any;
  EditFieldProps?: any;
}) => {
  const [onEditFiled, setOnEditField] = useState(false);
  const [value, setValue] = useState(valueData);

  return (
    <ProfileContentContainer>
      <ProfileContentHeader>
        <h3>{title}</h3>
        <ProfileEditButton onClick={() => setOnEditField(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </ProfileEditButton>
      </ProfileContentHeader>
      <Content value={value} {...ContentProps} />
      {onEditFiled && (
        <EditField
          value={value}
          setValue={setValue}
          offEdit={() => setOnEditField(false)}
          {...EditFieldProps}
        />
      )}
    </ProfileContentContainer>
  );
};

export default ProfileContent;
