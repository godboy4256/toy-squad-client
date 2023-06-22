import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import ProjectList from './pages/Project/List/ProjectList';
import Header from '@component/layout/Header/Header';
import Footer from '@component/layout/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="App">
        <Routes>
          <Route path="/main" element={<div>메인 페이지</div>} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
