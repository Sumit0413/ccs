import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function Root() {
  useSmoothScroll();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <Root />
    </Router>
  );
}
