import * as React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import ProjectList from '@/pages/Project/List/ProjectList';

import ProjectNew from '@/pages/Project/New/ProjectNew';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import Login from '@/pages/Login/Login';
import SignUp from '@/pages/SignUp/SignUp';
import Header from '@/component/layout/Header/Header';
import Footer from '@/component/layout/Footer/Footer';
import theme from './styles/theme';
import MyPage from './pages/MyPage/MyPage';
import ProjectDetail from './pages/Project/Detail/ProjectDetail';

function App() {
  const isLayout: string[] = ['/login', '/signUp'];
  const location = useLocation();
  const navigate = useNavigate();
  async function postData() {
    const data = {
      email: 'godboy4256@gmail.com',
      password: 'fkdlvmf42%%',
      name: '석지웅',
      position: '웹 프론트엔드 개발자',
      position_category: 'DEVELOPER',
    };
    // 옵션 기본 값은 *로 강조
    const response = await fetch('http://localhost:3001/api/join', {
      method: 'POST', // *GET, POST, PUT, DELETE 등
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
    });
    return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
  }

  useEffect(() => {
    if (location.pathname === '/') navigate('/main');
    postData();
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!isLayout.includes(location.pathname) && <Header />}
        <div className="App">
          <Routes>
            <Route path="/main" element={<div>메인 페이지</div>} />
            <Route path="/projects/detail/*" element={<ProjectDetail />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/new" element={<ProjectNew />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/mypage/*" element={<MyPage />} />
          </Routes>
        </div>
        {!isLayout.includes(location.pathname) && <Footer />}
      </ThemeProvider>
    </>
  );
}

export default App;
