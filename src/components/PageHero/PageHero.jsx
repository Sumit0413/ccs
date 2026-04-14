import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LightRays from '../LightRays/LightRays';

export default function PageHero({ title, subtitle, primaryColor = '#39ff14', rayColor = '#39ff14' }) {
  const textLinesRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      textLinesRef.current,
      { y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'inset(0% 0 0 0)',
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#08080a' }}>
      <div className="absolute inset-0 z-0 opacity-60" style={{ mixBlendMode: 'screen', pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor={rayColor}
          raysSpeed={1}
          lightSpread={0.7}
          rayLength={4}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={2.5}
          saturation={1}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 w-full text-center">
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest"
            style={{ color: primaryColor, background: `${primaryColor}0f`, border: `1px solid ${primaryColor}33` }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: primaryColor, boxShadow: `0 0 10px ${primaryColor}cc` }} />
            {title}
          </span>
        </div>

        <h1 ref={(el) => textLinesRef.current[0] = el} className="font-display font-black uppercase text-white leading-[0.85] tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', textShadow: '0 0 40px rgba(168,85,247,0.15)' }}>
          {title.split(' ').map((word, i) => (
            <span key={i}>
              {word}
              {i === 0 && <span style={{ color: primaryColor }}>.</span>}
            </span>
          ))}
        </h1>

        {subtitle && (
          <p ref={(el) => textLinesRef.current[1] = el} className="mt-8 text-lg font-medium max-w-3xl mx-auto" style={{ color: '#a0a0a0' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
