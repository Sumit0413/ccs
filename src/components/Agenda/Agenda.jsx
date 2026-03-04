import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Globe, Users, FlaskConical, Terminal } from 'lucide-react';

const AGENDA_ITEMS = [
  { icon: <Rocket size={32} />, title: 'Build real-world impactful projects' },
  { icon: <Globe size={32} />, title: 'Prepare for national & global hackathons' },
  { icon: <Users size={32} />, title: 'Develop teamwork & leadership' },
  { icon: <FlaskConical size={32} />, title: 'Promote research & innovation' },
  { icon: <Terminal size={32} />, title: 'Strengthen core programming skills' },
];

export default function Agenda() {
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

      // FIX: Start text much further apart vertically to account for absolute positioning
      gsap.set(textLinesRef.current[0], { xPercent: -50, yPercent: -50, y: -140, scale: 1 });
      gsap.set(textLinesRef.current[1], { xPercent: -50, yPercent: -50, y: 0, scale: 1 });

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
        x: -90, // User-adjusted precise visual target
        scale: 0.35,
        opacity: 0.8,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);
      
      tl.to(textLinesRef.current[1], {
        y: topOfScreenY,
        x: 70, // User-adjusted precise visual target
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
    <div className="relative w-full z-10" id="agenda">
      <section ref={containerRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#0d1f12' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          
          {/* HUGE TEXT GROUP */}
          <div ref={textGroupRef} className="absolute left-1/2 top-1/2 pointer-events-none z-20">
            <h2 
              ref={(el) => (textLinesRef.current[0] = el)} 
              className="absolute font-display font-black uppercase text-white leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', textShadow: '0 0 40px rgba(57,255,20,0.2)' }}
            >
              AGENDA
            </h2>
            <h2 
              ref={(el) => (textLinesRef.current[1] = el)} 
              className="absolute font-display font-black uppercase leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', color: '#39ff14' }}
            >
              OF CCS
            </h2>
          </div>

          {/* BENTO CARDS */}
          <div ref={contentRef} className="w-full max-w-[1280px] px-8 flex gap-6 h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-16 z-10">
            
            {/* LEFT column */}
            <div ref={leftColRef} className="flex-1 flex flex-col gap-6">
              <div className="flex-1 rounded-2xl p-8 flex flex-col relative overflow-hidden group"
                style={{ background: '#100a22', border: '1px solid #1e1040' }}>
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)]" />
                <div className="text-4xl mb-4 text-[#a855f7]">{AGENDA_ITEMS[0].icon}</div>
                <h3 className="font-display font-black text-3xl uppercase leading-tight text-white mb-2">{AGENDA_ITEMS[0].title}</h3>
                <p className="text-sm mt-auto" style={{ color: '#606060' }}>Shipping code that matters.</p>
              </div>

              <div className="flex-1 rounded-2xl p-8 flex flex-col group"
                style={{ background: '#0e2217', border: '1px solid #143020' }}>
                <div className="text-3xl mb-4 text-[#39ff14] group-hover:scale-110 transition-transform">{AGENDA_ITEMS[1].icon}</div>
                <h3 className="font-display font-black text-2xl uppercase leading-tight text-white">{AGENDA_ITEMS[1].title}</h3>
              </div>
            </div>

            {/* CENTER column */}
            <div ref={centerCardRef} className="flex-1 flex flex-col gap-6 relative z-20">
              <div className="h-full rounded-2xl p-10 flex flex-col text-center items-center justify-center gap-6 shadow-2xl"
                style={{ background: '#111111', border: '1px solid rgba(57,255,20,0.3)', boxShadow: '0 0 60px rgba(57,255,20,0.1)' }}>
                <div className="w-32 h-32 rounded-full flex items-center justify-center text-5xl bg-[#0e2217] text-[#39ff14] border border-[#39ff14]/30 glow-pulse">
                  {AGENDA_ITEMS[2].icon}
                </div>
                <p className="font-display font-black text-2xl uppercase tracking-wide leading-tight text-white">
                  {AGENDA_ITEMS[2].title}
                </p>
              </div>
            </div>

            {/* RIGHT column */}
            <div ref={rightColRef} className="flex-1 flex flex-col gap-6">
              <div className="flex-1 rounded-2xl p-8 flex flex-col group"
                style={{ background: '#081820', border: '1px solid #0d2530' }}>
                <div className="text-3xl mb-4 text-[#3b82f6] group-hover:scale-110 transition-transform">{AGENDA_ITEMS[3].icon}</div>
                <h3 className="font-display font-black text-2xl uppercase leading-tight text-white">{AGENDA_ITEMS[3].title}</h3>
              </div>

              <div className="flex-1 rounded-2xl p-8 flex flex-col justify-end group overflow-hidden relative"
                style={{ background: '#39ff14' }}>
                <div className="absolute right-[-20px] bottom-[-20px] text-black/10 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                   <Terminal size={140} />
                </div>
                <div className="text-3xl mb-4 text-black relative z-10">{AGENDA_ITEMS[4].icon}</div>
                <h3 className="font-display font-black text-3xl uppercase leading-tight text-black relative z-10">{AGENDA_ITEMS[4].title}</h3>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
