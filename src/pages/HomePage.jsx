import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import AboutCCS from '../components/AboutCCS/AboutCCS';
import Agenda from '../components/Agenda/Agenda';
import Highlights from '../components/Highlights/Highlights';
import AboutSOE from '../components/AboutSOE/AboutSOE';
import AboutAJU from '../components/AboutAJU/AboutAJU';
import MembersTiered from '../components/MembersTiered/MembersTiered';
import EventsPreview from '../components/EventsPreview/EventsPreview';
import GalleryPreview from '../components/GalleryPreview/GalleryPreview';
import Suggestions from '../components/Suggestions/Suggestions';
import LoginPortalPreview from '../components/LoginPortalPreview/LoginPortalPreview';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutCCS />
        <Agenda />
        <Highlights />
        <AboutSOE />
        <AboutAJU />
        <MembersTiered />
        <EventsPreview />
        <GalleryPreview />
        <Suggestions />
        <LoginPortalPreview />
      </main>
      <Footer />
    </>
  );
}
