import * as React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import ProjectList from "@/pages/Project/List/ProjectList";

import ProjectNew from "@/pages/Project/New/ProjectNew";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/SignUp";
import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";
import theme from "./styles/theme";
import MyPage from "./pages/MyPage/MyPage";
import ProjectDetail from "./pages/Project/Detail/ProjectDetail";
import FindPw from "./pages/FindPw/FindPw";
import UpdatePw from "./pages/UpdatePw/UpdatePw";
import MainPage from "./pages/MainPage/MainPage";
import UserList from "./pages/User/List/UserList";
import { ConfigProvider } from "antd";
import GlobalAlert from "./component/common/Alert/Alert";

function App() {
  const isLayout: string[] = ["/login", "/signUp", "/findPw", "/updatePw"];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") navigate("/main");
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalAlert />
          <GlobalStyle />
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  colorPrimary: "#e0234d",
                  algorithm: true,
                },
                DatePicker: {
                  colorPrimary: "#e0234d",
                  algorithm: true,
                },
                Input: {
                  colorPrimary: "#e0234d",
                  algorithm: true,
                },
              },
            }}
          >
            {!isLayout.includes(location.pathname) && <Header />}
            <Routes>
              <Route path="/main" element={<MainPage />} />
              <Route path="/projects/detail/*" element={<ProjectDetail />} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/projects/new" element={<ProjectNew />} />
              <Route path="/users/*" element={<UserList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/mypage/*" element={<MyPage />} />
              <Route path="/findPw" element={<FindPw />} />
              <Route path="/updatePw" element={<UpdatePw />} />
            </Routes>
            {!isLayout.includes(location.pathname) && <Footer />}
          </ConfigProvider>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
