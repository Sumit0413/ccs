export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-[1000] flex items-center justify-between px-10 py-6">
      <a href="#" className="font-display font-black text-2xl uppercase tracking-widest text-white">
        <span style={{ color: '#39ff14' }}>&lt;</span>CCS<span style={{ color: '#39ff14' }}>/&gt;</span>
      </a>

      <div className="flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-[#606060]">
        {[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'SOE&IT', href: '#soe' },
          { label: 'Members', href: '#members' },
          { label: 'Events', href: '#events' },
          { label: 'Gallery', href: '#gallery' },
          { label: 'Suggestions', href: '#suggestions' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="transition-colors duration-200"
            onMouseEnter={(e) => (e.target.style.color = '#39ff14')}
            onMouseLeave={(e) => (e.target.style.color = '#606060')}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#login"
        className="font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-full text-black transition-all duration-200 hover:-translate-y-0.5"
        style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.2)' }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 0 35px rgba(57,255,20,0.5)')}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.2)')}
      >
        Login
      </a>
    </nav>
  );
}
