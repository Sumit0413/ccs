import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 py-16 px-8 border-t border-white/5" style={{ background: '#0a0a0f' }}>
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <div className="flex flex-col">
          <div className="font-display font-black text-2xl uppercase tracking-widest text-white mb-4">
            <span style={{ color: '#39ff14' }}>&lt;</span>CCS<span style={{ color: '#39ff14' }}>/&gt;</span>
          </div>
          <p className="text-sm text-[#606060] leading-relaxed max-w-sm">
            Code & Compute Society — A premier technical club at Arka Jain University dedicated to innovation, collaboration, and technical excellence.
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="font-display font-black text-lg uppercase text-white mb-6">Quick Links</h4>
          <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-widest text-[#606060]">
            <a href="#about" className="hover:text-[#39ff14] transition-colors w-max">About</a>
            <a href="#soe" className="hover:text-[#39ff14] transition-colors w-max">SOE&IT</a>
            <a href="#members" className="hover:text-[#39ff14] transition-colors w-max">Members</a>
            <a href="#events" className="hover:text-[#39ff14] transition-colors w-max">Events</a>
            <a href="#gallery" className="hover:text-[#39ff14] transition-colors w-max">Gallery</a>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="font-display font-black text-lg uppercase text-white mb-6">Contact</h4>
          <div className="flex flex-col gap-3 font-mono text-xs text-[#606060]">
            <a href="mailto:hello@codecomputesociety.com" className="hover:text-[#39ff14] transition-colors w-max">
              hello@codecomputesociety.com
            </a>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-[#39ff14] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-[#39ff14] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-[#39ff14] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-[#39ff14] transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-[#606060]">
        <span>© 2026 Code & Compute Society. All rights reserved.</span>
      </div>
    </footer>
  );
}
