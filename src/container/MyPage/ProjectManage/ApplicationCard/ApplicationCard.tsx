import React from 'react';
import {
  ApplicationCardButton,
  ApplicationUserContainer,
} from './ApplicationCard.style';
import MiniProfileCard from '@/component/common/UserInfo/MiniProfileCard';
import Button from '@/component/input/Button/Button';

type ApplicationCardPropsType = {
  name: string;
  position: string;
  level: string;
  appPosition: string;
  rating: number;
  like: number;
  profile: string;
};

const ApplicationCard = ({
  name,
  position,
  level,
  appPosition,
  rating,
  like,
  profile,
}: ApplicationCardPropsType) => {
  return (
    <>
      <ApplicationUserContainer>
        <MiniProfileCard
          name={name}
          position={position}
          level={level}
          rating={rating}
          like={like}
          profile={profile}
          appPosition={appPosition}
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
