import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BrainCircuit, Cpu, Code, ShieldCheck, Bot } from 'lucide-react';

const TRACKS = [
  { name: 'Artificial Intelligence', icon: <BrainCircuit size={40} />, color: '#a855f7' },
  { name: 'IoT & Embedded', icon: <Cpu size={40} />, color: '#3b82f6' },
  { name: 'Web & App', icon: <Code size={40} />, color: '#10b981' },
  { name: 'Cyber Security', icon: <ShieldCheck size={40} />, color: '#ef4444' },
  { name: 'Robotics', icon: <Bot size={40} />, color: '#f59e0b' },
];

export default function AboutSOE() {
  const containerRef = useRef(null);
  const textGroupRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subtextRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { y: 200, opacity: 0, scale: 0.8 });
      gsap.set(title1Ref.current, { yPercent: -50, xPercent: -50, x: -240 });
      gsap.set(title2Ref.current, { yPercent: -50, xPercent: -50, x: 190 });
      gsap.set(subtextRef.current, { yPercent: -50, xPercent: -50, y: 120, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1.5,
          snap: {
            snapTo: [0, 1],
            duration: { min: 0.5, max: 1 },
            ease: 'power2.inOut',
          },
        },
      });

      const topOfScreenY = -(window.innerHeight * 0.35);

      tl.to(title1Ref.current, {
        y: topOfScreenY,
        x: -90,
        scale: 0.4,
        opacity: 0.9,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);

      tl.to(title2Ref.current, {
        y: topOfScreenY,
        x: 100,
        scale: 0.4,
        opacity: 0.9,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);

      tl.to(subtextRef.current, {
        y: topOfScreenY + 110,
        x: 310,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut'
      }, 0);

      tl.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.2)',
      }, '>-0.5');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full z-10" id="soe">
      <section ref={containerRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#0a1a08' }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <div ref={textGroupRef} className="absolute left-1/2 top-1/2 pointer-events-none z-20">
            <h2
              ref={title1Ref}
              className="absolute font-display font-black uppercase text-white leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', textShadow: '0 0 40px rgba(57,255,20,0.1)' }}
            >
              School of
            </h2>
            <h2
              ref={title2Ref}
              className="absolute font-display font-black uppercase leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', color: '#39ff14' }}
            >
              Eng & IT
            </h2>
            <p ref={subtextRef} className="absolute font-mono text-center w-[600px] text-[#a0a0a0] leading-relaxed uppercase tracking-widest text-sm pointer-events-auto origin-center transition-opacity" style={{ marginLeft: '-300px' }}>
              Fostering innovation and practical learning across core technology tracks.
            </p>
          </div>

          <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 flex flex-wrap justify-center gap-6 mt-40">
            {TRACKS.map((t, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="w-[240px] h-[280px] rounded-2xl p-6 flex flex-col items-center text-center justify-between hover:scale-105 transition-transform duration-300"
                style={{ background: '#0e2217', border: '1px solid rgba(57,255,20,0.2)' }}
              >
                <div className="text-4xl mt-4" style={{ color: t.color }}>{t.icon}</div>
                <h3 className="font-display font-black text-xl uppercase text-white leading-tight">{t.name}</h3>
                <div className="w-12 h-1 mb-2 rounded-full glow-pulse" style={{ background: t.color, boxShadow: `0 0 10px ${t.color}` }} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
