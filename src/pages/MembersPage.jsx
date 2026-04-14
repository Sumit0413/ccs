import Navbar from '../components/Navbar/Navbar';
import PageHero from '../components/PageHero/PageHero';
import ExpandedMembers from '../components/ExpandedMembers/ExpandedMembers';
import Footer from '../components/Footer/Footer';

export default function MembersPage() {
  return (
    <>
      <Navbar />
      <PageHero
        title="Members"
        subtitle="Meet the talented individuals driving innovation at CCS"
        primaryColor="#39ff14"
        rayColor="#39ff14"
      />
      <ExpandedMembers />
      <Footer />
    </>
  );
}
