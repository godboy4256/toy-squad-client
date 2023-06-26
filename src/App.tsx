import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import ProjectList from './pages/Project/List/ProjectList';
import Header from '@component/layout/Header/Header';
import Footer from '@component/layout/Footer/Footer';
import ProjectNew from './pages/Project/New/ProjectNew';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <div className="App">
          <Routes>
            <Route path="/main" element={<div>메인 페이지</div>} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/new" element={<ProjectNew />} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
