import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import ProjectList from '@/pages/Project/List/ProjectList';

import ProjectNew from '@/pages/Project/New/ProjectNew';
import { ThemeProvider } from 'styled-components';

import Login from '@/pages/Login/Login';
import SignUp from '@/pages/SignUp/SignUp';
import Header from '@/component/layout/Header/Header';
import Footer from '@/component/layout/Footer/Footer';
import theme from './styles/theme';

function App() {
  const isLayout: string[] = ['/login', '/signUp'];
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {!isLayout.includes(location.pathname) && <Header />}
        <div className="App">
          <Routes>
            <Route path="/main" element={<div>메인 페이지</div>} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/new" element={<ProjectNew />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
        {!isLayout.includes(location.pathname) && <Footer />}
      </ThemeProvider>
    </>
  );
}

export default App;
