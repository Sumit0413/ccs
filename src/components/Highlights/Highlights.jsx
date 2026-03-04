import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3 } from 'lucide-react';

const HIGHLIGHT_ITEMS = [
  { title: 'Weekly Project Progress Tracking', desc: 'Continuous iteration and delivery mechanism.' },
  { title: 'Organizer Event Planner System', desc: 'Centralized tools for our organizers.' },
  { title: 'Convenor Monitoring Dashboard', desc: 'Complete high-level overview metrics.' },
  { title: 'Google Workspace Integration', desc: 'Seamless docs, sheets, and communication.' },
  { title: 'Structured Role-Based Access', desc: 'Clear hierarchy: Convenors, Organizers, Members.' },
];

export default function Highlights() {
  const containerRef = useRef(null);
  const textGroupRef = useRef(null);
  const textLinesRef = useRef([]);
  const contentRef = useRef(null);
  const centerCardRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for cards (hidden/behind center)
      gsap.set(centerCardRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(leftColRef.current, { x: 300, opacity: 0, scale: 0.8 });
      gsap.set(rightColRef.current, { x: -300, opacity: 0, scale: 0.8 });

      // FIX: Start text much further apart vertically
      gsap.set(textLinesRef.current[0], { xPercent: -50, yPercent: -50, y: -120, scale: 1 });
      gsap.set(textLinesRef.current[1], { xPercent: -50, yPercent: -50, y: 10, scale: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=250%', // 250% of viewport height to scrub through
          pin: true,
          scrub: 1.5,
          snap: {
            snapTo: [0, 1], // Snap to start or end when user stops
            duration: { min: 0.5, max: 1.0 },
            ease: 'power2.inOut',
          },
        },
      });

      // 1. Shrink and move huge text into a horizontal top header
      const topOfScreenY = -(window.innerHeight * 0.40); // Move roughly 40vh up
      
      tl.to(textLinesRef.current[0], {
        y: topOfScreenY,
        x: -90, // Brought much closer for a tighter gap like Agenda
        scale: 0.35,
        opacity: 0.8,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);
      
      tl.to(textLinesRef.current[1], {
        y: topOfScreenY,
        x: 90, // Brought much closer for a tighter gap like Agenda
        scale: 0.35,
        opacity: 0.8,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);

      // 2. Center card fades and scales in
      tl.to(centerCardRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.5)',
      }, '>-0.4');

      // 3. Side cards erupt outwards from the center card
      tl.to(leftColRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '>-0.2');

      tl.to(rightColRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '<');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full z-10" id="highlights">
      <section ref={containerRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#12121e' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          
          {/* HUGE TEXT GROUP */}
          <div ref={textGroupRef} className="absolute left-1/2 top-1/2 pointer-events-none z-20">
            <h2 
              ref={(el) => (textLinesRef.current[0] = el)} 
              className="absolute font-display font-black uppercase text-white leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', textShadow: '0 0 40px rgba(255,255,255,0.1)' }}
            >
              SYSTEM
            </h2>
            <h2 
              ref={(el) => (textLinesRef.current[1] = el)} 
              className="absolute font-display font-black uppercase leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(4.5rem, 11vw, 9rem)', color: '#a855f7' }}
            >
              HIGHLIGHTS
            </h2>
          </div>

          {/* BENTO CARDS */}
          <div ref={contentRef} className="w-full max-w-[1280px] px-8 flex gap-6 h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 z-10">
            
            {/* LEFT column */}
            <div ref={leftColRef} className="flex-1 flex flex-col gap-6">
              <div className="flex-1 rounded-2xl p-8 flex flex-col justify-between"
                style={{ background: '#0e1822', border: '1px solid #142436' }}>
                <h3 className="font-display font-black text-3xl uppercase leading-tight text-white mb-2">{HIGHLIGHT_ITEMS[0].title}</h3>
                <div className="w-full h-12 flex gap-1.5 items-end mt-4">
                  {[40, 70, 50, 90, 60, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-[#39ff14]/80" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              <div className="flex-1 rounded-2xl p-8 flex flex-col justify-between"
                style={{ background: '#180e22', border: '1px solid #28143d' }}>
                <h3 className="font-display font-black text-2xl uppercase leading-tight text-white mb-2">{HIGHLIGHT_ITEMS[1].title}</h3>
                <p className="font-mono text-[#a855f7] leading-relaxed">{HIGHLIGHT_ITEMS[1].desc}</p>
              </div>
            </div>

            {/* CENTER column */}
            <div ref={centerCardRef} className="flex-1 flex flex-col gap-3 relative z-20">
              <div className="h-full rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-[0_0_60px_rgba(168,85,247,0.15)]"
                style={{ background: '#111111', border: '1px solid rgba(168,85,247,0.4)' }}>
                <div className="text-[#a855f7] mb-8 bg-[#a855f7]/10 p-6 rounded-full border border-[#a855f7]/30">
                  <BarChart3 size={64} />
                </div>
                <h3 className="font-display font-black text-3xl uppercase text-white mb-3 leading-tight">{HIGHLIGHT_ITEMS[2].title}</h3>
                <p className="text-[#a0a0a0] max-w-[80%]">{HIGHLIGHT_ITEMS[2].desc}</p>
              </div>
            </div>

            {/* RIGHT column */}
            <div ref={rightColRef} className="flex-1 flex flex-col gap-3">
              <div className="flex-1 rounded-2xl p-8 flex flex-col justify-between"
                style={{ background: '#222222', border: '1px solid #333' }}>
                <h3 className="font-display font-black text-2xl uppercase leading-tight text-white mb-4">{HIGHLIGHT_ITEMS[3].title}</h3>
                <p className="border border-white/20 rounded-lg p-3 text-center text-white/60 font-medium">{HIGHLIGHT_ITEMS[3].desc}</p>
              </div>

              <div className="flex-1 rounded-2xl p-8 flex flex-col justify-between"
                style={{ background: '#39ff14' }}>
                <h3 className="font-display font-black text-3xl uppercase leading-tight text-black mb-2">{HIGHLIGHT_ITEMS[4].title}</h3>
                <div className="flex items-center justify-between font-black uppercase text-xl text-black/50 tracking-widest mt-4 bg-black/5 rounded-lg p-3">
                  <span>C</span> &rarr; <span>O</span> &rarr; <span>M</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
