import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import Research from './pages/Research';
import SideProjects from './pages/SideProjects';
import Running from './pages/Running';
import CV from './pages/CV';
import Teaching from './pages/Teaching';
import Textbook from './pages/Textbook';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/Teaching" element={<Teaching />} />
          <Route path="/Textbook" element={<Textbook />} />
          <Route path="/SideProjects" element={<SideProjects />} />
          <Route path="/Running" element={<Running />} />
          <Route path="/CV" element={<CV />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;