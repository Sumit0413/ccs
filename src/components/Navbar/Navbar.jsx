import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'SOE&IT', path: '/soe-it' },
    { label: 'Members', path: '/members' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Suggestions', path: '/suggestions' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-[1000] flex items-center justify-between px-10 py-6">
      <Link to="/" className="font-display font-black text-2xl uppercase tracking-widest text-white hover:opacity-80 transition-opacity">
        <span style={{ color: '#39ff14' }}>&lt;</span>CCS<span style={{ color: '#39ff14' }}>/&gt;</span>
      </Link>

      <div className="flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-[#606060]">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="transition-colors duration-200"
            style={{ color: location.pathname === link.path ? '#39ff14' : '#606060' }}
            onMouseEnter={(e) => (e.target.style.color = '#39ff14')}
            onMouseLeave={(e) => (e.target.style.color = location.pathname === link.path ? '#39ff14' : '#606060')}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        to="/login"
        className="font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5"
        style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.2)' }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 35px rgba(57,255,20,0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.2)')}
      >
        Login
      </Link>
    </nav>
  );
}
