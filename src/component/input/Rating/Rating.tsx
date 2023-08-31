import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';

const RatingContainer = styled.div``;
const RatingTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 30px 0 10px;
  text-align: center;
`;
const RatingStar = styled.div`
  display: flex;
  justify-content: center;
  svg {
    color: #ccc;
    font-size: 2rem;
    margin: 0 5px;
    cursor: pointer;
    &.active {
      color: #ffcc00;
    }
  }
`;

const Rating = () => {
  const [starsColor, setStarsColor] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const onClickRatingStar = (target: number) => {
    if (target === 0) {
      setStarsColor([true, false, false, false, false]);
    }
    if (target === 1) {
      setStarsColor([true, true, false, false, false]);
    }
    if (target === 2) {
      setStarsColor([true, true, true, false, false]);
    }
    if (target === 3) {
      setStarsColor([true, true, true, true, false]);
    }
    if (target === 4) {
      setStarsColor([true, true, true, true, true]);
    }
  };
  return (
    <RatingContainer>
      <RatingTitle>팀장 석지웅님의 평점은?</RatingTitle>
      <RatingStar>
        <FontAwesomeIcon
          onClick={() => onClickRatingStar(0)}
          className={starsColor[0] ? 'active' : ''}
          icon={faStar}
        />
        <FontAwesomeIcon
          onClick={() => onClickRatingStar(1)}
          className={starsColor[1] ? 'active' : ''}
          icon={faStar}
        />
        <FontAwesomeIcon
          onClick={() => onClickRatingStar(2)}
          className={starsColor[2] ? 'active' : ''}
          icon={faStar}
        />
        <FontAwesomeIcon
          onClick={() => onClickRatingStar(3)}
          className={starsColor[3] ? 'active' : ''}
          icon={faStar}
        />
        <FontAwesomeIcon
          onClick={() => onClickRatingStar(4)}
          className={starsColor[4] ? 'active' : ''}
          icon={faStar}
        />
      </RatingStar>
    </RatingContainer>
  );
};

export default Rating;
