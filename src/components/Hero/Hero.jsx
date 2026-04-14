import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LightRays from '../LightRays/LightRays';
//import SplineBot from './SplineBot';

export default function Hero() {
  const wrapperRef = useRef(null);
  const panelRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
      {
        y: 0,
        opacity: 1,
        clipPath: 'inset(0% 0 0 0)',
        stagger: 0.1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.1,
      }
    );

    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: panelRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        scale: 0.85,
        opacity: 0,
        y: -100,
        transformOrigin: 'top center',
        ease: 'none',
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-wrapper" style={{ height: '200vh', zIndex: 1 }} ref={wrapperRef}>
      <section className="panel flex flex-col justify-center relative overflow-hidden" style={{ background: '#08080a' }} ref={panelRef} id="home">
        
       {/* <div className="absolute inset-0 z-0 opacity-80" style={{ pointerEvents: 'auto' }}>
          <SplineBot />
        </div> */}

        <div className="absolute inset-0 z-0 opacity-80" style={{ mixBlendMode: 'screen', pointerEvents: 'none' }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#1a7522"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3.5}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={2}
            saturation={1}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full text-center pointer-events-none">
          <div ref={textRef}>
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-[#39ff14]"
                style={{ background: 'rgba(57,255,20,0.06)', border: '1px solid rgba(57,255,20,0.2)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] glow-pulse" />
                Arka Jain University
              </span>
            </div>

            <h1 className="font-display font-black uppercase text-white leading-[0.85] tracking-tight whitespace-nowrap"
              style={{ fontSize: 'clamp(3rem, 7.5vw, 8rem)', color: 'white', textShadow: '0 0 40px rgba(255,255,255,0.1)' }}>
              CODE<span style={{ color: '#39ff14' }}>.</span> CREATE<span style={{ color: '#39ff14' }}>.</span>{'\n'}COMPETE<span style={{ color: '#39ff14' }}>.</span>
            </h1>

            <p className="mt-8 text-lg font-medium max-w-2xl mx-auto" style={{ color: '#a0a0a0' }}>
              <span className="text-white">Code & Compute Society (CCS)</span> — A premier technical club dedicated to innovation, collaboration, and technical excellence.
            </p>

            <div className="mt-10 flexitems-center justify-center gap-4 flex-wrap flex pointer-events-auto">
              <Link to="/about"
                className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-black transition-all hover:-translate-y-1"
                style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
                Explore CCS
              </Link>
              <a href="#login"
                className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-white transition-all hover:-translate-y-1"
                style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.02)' }}>
                Login Portal
              </a>
              <Link to="/events"
                className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-white transition-all hover:-translate-y-1"
                style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.02)' }}>
                View Events
              </Link>
            </div>
          </div>
        </div>

        <div 
          className="absolute bottom-0 right-0 z-[9999] pointer-events-none" 
          style={{ width: '180px', height: '60px', background: '#08080a' }}
        />
      </section>
    </div>
  );
}
