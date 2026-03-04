import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function EventsPreview() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.event-card').forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          x: -50,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-10 w-full" id="events">
      <section className="flex flex-col py-32" style={{ background: '#0e1510', position: 'relative' }} ref={wrapperRef}>
        <div className="w-full max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-display font-black text-4xl uppercase text-white mb-8 border-l-4 border-[#39ff14] pl-4">
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {['Hackathons', 'Workshops', 'Coding Contests'].map((ev, i) => (
                <div key={i} className="event-card bg-[#111] border border-[#222] p-6 rounded-xl hover:border-[#39ff14]/50 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-display font-black text-xl uppercase text-white">{ev}</h3>
                    <span className="text-xs font-mono text-[#39ff14] px-2 py-1 rounded bg-[#39ff14]/10">SOON</span>
                  </div>
                  <p className="text-sm text-[#a0a0a0]">Registration details dropping shortly. Stay tuned.</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-black text-4xl uppercase text-white mb-8 border-l-4 border-[#a855f7] pl-4">
              Completed Events
            </h2>
            <div className="space-y-4">
              {['Highlights', 'Event Reports', 'Snapshots'].map((ev, i) => (
                <div key={i} className="event-card bg-[#111] border border-[#222] p-6 rounded-xl flex justify-between items-center hover:-translate-y-1 transition-transform">
                  <div>
                    <h3 className="font-display font-black text-xl uppercase text-white mb-1">{ev}</h3>
                    <p className="text-sm text-[#606060]">View archives</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50">&rarr;</div>
                </div>
              ))}
            </div>
            <button className="mt-8 font-display font-bold text-sm uppercase tracking-widest text-[#a855f7] hover:text-white transition-colors">
              View Full Archive &rarr;
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
