import React from "react";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfile from "@/assets/images/common/default_profile.svg";
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
  level: string;
  rating: number;
  like: number;
  profile?: string;
};

const MiniProfileCard = ({
  name,
  position,
  level,
  rating,
  like,
  profile,
}: ApplicationCardPropsType) => {
  return (
    <MiniProfileContainer>
      <MiniProfileImage src={profile ? profile : UserProfile} />
      <div>
        <MiniProfileName>{name}</MiniProfileName>
        <MiniProfilePosition>
          {position} <span>{level}</span>
        </MiniProfilePosition>
        <MiniProfileLikeAndRating>
          <div>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>{like}</span>
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
