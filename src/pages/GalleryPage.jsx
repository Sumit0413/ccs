import Navbar from '../components/Navbar/Navbar';
import PageHero from '../components/PageHero/PageHero';
import ExpandedGallery from '../components/ExpandedGallery/ExpandedGallery';
import Footer from '../components/Footer/Footer';

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Gallery"
        subtitle="Capture moments from our events, projects, and community experiences"
        primaryColor="#39ff14"
        rayColor="#39ff14"
      />
      <ExpandedGallery />
      <Footer />
    </>
  );
}
