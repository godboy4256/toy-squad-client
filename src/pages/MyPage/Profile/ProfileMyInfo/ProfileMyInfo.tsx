import MiniProfileCard from "@/component/common/UserInfo/MiniProfileCard";
import React from "react";

const ProfileMyInfo = ({ value }) => {
  return (
    <MiniProfileCard
      imgUrl={value?.imgUrl}
      name={value?.name}
      position={value?.position}
      rating={5}
      like={value?.like}
    />
  );
};

export default ProfileMyInfo;
