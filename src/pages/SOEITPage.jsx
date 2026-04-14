import Navbar from '../components/Navbar/Navbar';
import PageHero from '../components/PageHero/PageHero';
import ExpandedSOEIT from '../components/ExpandedSOEIT/ExpandedSOEIT';
import Footer from '../components/Footer/Footer';

export default function SOEITPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="SOE & IT"
        subtitle="Learn about our School of Engineering and Information Technology partnership"
        primaryColor="#39ff14"
        rayColor="#39ff14"
      />
      <ExpandedSOEIT />
      <Footer />
    </>
  );
}
