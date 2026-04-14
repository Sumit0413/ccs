import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SOEITPage from './pages/SOEITPage';
import MembersPage from './pages/MembersPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import SuggestionsPage from './pages/SuggestionsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function Root() {
  useSmoothScroll();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/soe-it" element={<SOEITPage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/suggestions" element={<SuggestionsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
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
