import React from "react";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MiniProfileLikeAndRating,
  MiniProfileName,
  MiniProfilePosition,
  MiniProfileImage,
  MiniProfileContainer,
} from "./MiniProfileCard.style";

type ApplicationCardPropsType = {
  name: string;
  appPosition?: string;
  position: string;
  imgUrl: string;
  rating: number;
  like: number;
};

const MiniProfileCard = ({
  name,
  position,
  imgUrl,
  rating,
  like,
}: ApplicationCardPropsType) => {
  return (
    <MiniProfileContainer>
      <MiniProfileImage
        src={imgUrl ? imgUrl : "/assets/images/common/default_profile.svg"}
      />
      <div>
        <MiniProfileName>{name}</MiniProfileName>
        <MiniProfilePosition>{position}</MiniProfilePosition>
        <MiniProfileLikeAndRating>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{like || 0}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} />
            <span>{rating}</span>
          </div>
        </MiniProfileLikeAndRating>
        {/* {appPosition && (
          <MiniProfileAppPosition>
            <span>{appPosition}</span>로 참여합니다.
          </MiniProfileAppPosition>
        )} */}
      </div>
    </MiniProfileContainer>
  );
};

export default MiniProfileCard;
