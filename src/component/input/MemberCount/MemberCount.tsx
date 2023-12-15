import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  CountButton,
  MemberContent,
  MemberCountContainer,
} from "./MemberCount.style";

const MemberCount = () => {
  const [count, setCount] = useState(0);
  return (
    <MemberCountContainer>
      <MemberContent isCount={count}>
        <FontAwesomeIcon icon={faUser} />
        인원 <span>{count}</span> 명
      </MemberContent>
      <CountButton>
        <div onClick={() => setCount((prev) => prev + 1)}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>
        <div onClick={() => count > 0 && setCount((prev) => prev - 1)}>
          <FontAwesomeIcon icon={faMinusCircle} />
        </div>
      </CountButton>
    </MemberCountContainer>
  );
};

export default MemberCount;
