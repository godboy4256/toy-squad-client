import React, { useState } from "react";
import { SwitchCircle, SwtichContainer } from "./Switch.style";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <SwtichContainer onClick={() => setIsOn((prev) => !prev)}>
      <SwitchCircle direction={isOn} />
    </SwtichContainer>
  );
};

export default Switch;
