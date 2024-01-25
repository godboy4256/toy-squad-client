import React from "react";
import {
  ApplicationCardButton,
  ApplicationUserContainer,
} from "./ApplicationCard.style";
import MiniProfileCard from "@/component/common/UserInfo/MiniProfileCard";
import Button from "@/component/input/Button/Button";

type ApplicationCardPropsType = {
  name: string;
  position: string;
  appPosition: string;
  rating: number;
  like: number;
};

const ApplicationCard = ({
  name,
  position,
  appPosition,
  rating,
  like,
}: ApplicationCardPropsType) => {
  return (
    <>
      <ApplicationUserContainer>
        <MiniProfileCard
          name={name}
          position={position}
          rating={rating}
          like={like}
          appPosition={appPosition}
          imgUrl=""
        />
        <ApplicationCardButton>
          <Button>수락</Button>
          <Button>거절</Button>
        </ApplicationCardButton>
      </ApplicationUserContainer>
    </>
  );
};

export default ApplicationCard;
