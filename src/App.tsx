import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import ProjectList from './pages/Project/List/ProjectList';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/main" element={<div>메인 페이지</div>} />
          <Route path="/projects" element={<ProjectList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
