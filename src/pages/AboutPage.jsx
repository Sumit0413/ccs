import Navbar from '../components/Navbar/Navbar';
import PageHero from '../components/PageHero/PageHero';
import ExpandedAbout from '../components/ExpandedAbout/ExpandedAbout';
import Footer from '../components/Footer/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="About"
        subtitle="Discover the mission and vision behind Code & Compute Society"
        primaryColor="#a855f7"
        rayColor="#a855f7"
      />
      <ExpandedAbout />
      <Footer />
    </>
  );
}
