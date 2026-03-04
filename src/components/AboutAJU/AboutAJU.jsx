import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Handshake, BookOpen, Lightbulb } from 'lucide-react';

const AJU_POINTS = [
  { icon: <Building2 size={32} />, text: 'Modern Labs & Infrastructure' },
  { icon: <Handshake size={32} />, text: 'Industry Exposure' },
  { icon: <BookOpen size={32} />, text: 'Research-Oriented Learning' },
  { icon: <Lightbulb size={32} />, text: 'Innovation-Driven Culture' },
];

export default function AboutAJU() {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const listRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { y: 40, opacity: 0 });
      gsap.set(listRef.current, { x: -30, opacity: 0 });

      const tl = gsap.timeline({ paused: true });
      tl.to(titleRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' });
      tl.to(listRef.current, { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.2)' }, '-=0.3');

      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: 'top 70%',
        onEnter: () => tl.play(),
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-wrapper" style={{ height: '100vh', zIndex: 6 }} ref={wrapperRef}>
      <section className="panel flex items-center" style={{ background: '#111111' }}>
        <div className="w-full max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div ref={titleRef}>
            <span className="inline-block px-3 py-1 bg-[#39ff14]/10 text-[#39ff14] border border-[#39ff14]/20 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              Our Foundation
            </span>
            <h2 className="font-display font-black text-5xl uppercase text-white mb-6 leading-tight">
              Arka Jain{'\n'}University
            </h2>
            <p className="text-[#a0a0a0] text-lg mb-8">
              A hub for academic excellence and technical innovation. Empowering students to build the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AJU_POINTS.map((pt, i) => (
              <div
                key={i}
                ref={(el) => (listRef.current[i] = el)}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:-translate-y-1 transition-transform"
              >
                <div className="text-3xl">{pt.icon}</div>
                <h3 className="text-sm font-bold text-white leading-tight">{pt.text}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
