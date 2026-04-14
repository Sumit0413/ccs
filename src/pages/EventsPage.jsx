import Navbar from '../components/Navbar/Navbar';
import PageHero from '../components/PageHero/PageHero';
import ExpandedEvents from '../components/ExpandedEvents/ExpandedEvents';
import Footer from '../components/Footer/Footer';

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Events"
        subtitle="Explore our upcoming events, competitions, and community activities"
        primaryColor="#a855f7"
        rayColor="#a855f7"
      />
      <ExpandedEvents />
      <Footer />
    </>
  );
}
