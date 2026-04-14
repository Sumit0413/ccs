import Navbar from '../components/Navbar/Navbar';
import PageHero from '../components/PageHero/PageHero';
import ExpandedSuggestions from '../components/ExpandedSuggestions/ExpandedSuggestions';
import Footer from '../components/Footer/Footer';

export default function SuggestionsPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Suggestions"
        subtitle="We value your feedback to continuously improve our community"
        primaryColor="#a855f7"
        rayColor="#a855f7"
      />
      <ExpandedSuggestions />
      <Footer />
    </>
  );
}
