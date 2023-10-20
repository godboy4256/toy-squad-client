import React from "react";
import styled from "styled-components";

const ErrorMessageStyle = styled.p`
  color: red;
  font-size: 1.4rem;
  height: 40px;
  padding-top: 5px;
`;

const ErrorMessage = ({ message }: { message: string }) => {
  return <ErrorMessageStyle>{message}</ErrorMessageStyle>;
};

export default ErrorMessage;
