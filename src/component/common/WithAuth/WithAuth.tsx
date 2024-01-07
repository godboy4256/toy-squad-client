import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WithAuth = (Component) => (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("accessToken")) {
      navigate("/login");
    }
  }, []);
  return <Component {...props} />;
};

export default WithAuth;
