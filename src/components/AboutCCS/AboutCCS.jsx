import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target } from 'lucide-react';

const ACTIVITIES = [
  'Weekly Meetups',
  'Hackathons & Coding Sprints',
  'Internal Competitions',
  'Project Showcases',
  'Mock Interviews',
];

export default function AboutCCS() {
  const containerRef = useRef(null);
  const textGroupRef = useRef(null);
  const textLinesRef = useRef([]);
  const leftContentRef = useRef(null);
  const listItemsRef = useRef([]);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Step 1: initial states for the Reveal Panel
      gsap.set(leftContentRef.current, { opacity: 0, x: 100, scale: 0.95 });
      gsap.set(listItemsRef.current, { opacity: 0, x: 30 });
      gsap.set(cardRef.current, { opacity: 0, y: 30 });

      // Title lines centered initially 
      gsap.set(textLinesRef.current[0], { xPercent: -50, yPercent: -50, y: -150, scale: 1 });
      gsap.set(textLinesRef.current[1], { xPercent: -50, yPercent: -50, y: -10, scale: 1 });
      gsap.set(textLinesRef.current[2], { xPercent: -50, yPercent: -50, y: 160, opacity: 0, scale: 0.95 }); // Subtext

      // Build the scroll scrub timeline for pinning effect
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', // User scrubs through this height
          pin: true,
          scrub: 1.2,
          snap: {
            snapTo: [0, 1],
            duration: { min: 0.5, max: 1.0 },
            ease: 'power2.inOut',
          }
        },
      });

      // BIG TEXT animation: It starts center huge, then scales down and moves completely LEFT 
      const leftSideTargetX = -(window.innerWidth * 0.15);
      
      tl.to(textLinesRef.current[0], {
        x: leftSideTargetX,
        y: -140, // Move up slightly
        scale: 0.5,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);

      tl.to(textLinesRef.current[1], {
        x: leftSideTargetX,
        y: -40,
        scale: 0.5,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);

      // Subtext fades in under the title on the left
      tl.to(textLinesRef.current[2], {
        x: leftSideTargetX,
        y: 80,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.inOut',
      }, 0);

      // Detail section slides into the RIGHT half
      tl.to(leftContentRef.current, {
        opacity: 1,
        x: 0, // Natural position
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '>-0.4');

      // List items stagger in
      tl.to(listItemsRef.current, {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        duration: 0.5,
        ease: 'back.out(1.2)',
      }, '>-0.2');

      // The Target card slides up
      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '<0.2');

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full z-10" id="about">
      <section ref={containerRef} className="relative w-full h-screen overflow-hidden" style={{ background: '#0a0a0f' }}>
        <div className="absolute inset-0 flex items-center justify-center">

          {/* --- HUGE TEXT (Starts Center, moves Left) --- */}
          <div ref={textGroupRef} className="absolute left-1/2 top-1/2 pointer-events-none z-20">
            <h2 ref={(el) => (textLinesRef.current[0] = el)} className="absolute font-display font-black uppercase text-white leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(5rem, 12vw, 10rem)', textShadow: '0 0 40px rgba(168,85,247,0.2)' }}>
              ABOUT
            </h2>
            <h2 ref={(el) => (textLinesRef.current[1] = el)} className="absolute font-display font-black uppercase leading-none whitespace-nowrap origin-center"
              style={{ fontSize: 'clamp(6rem, 14vw, 12rem)', color: '#a855f7' }}>
              CCS
            </h2>
            <p ref={(el) => (textLinesRef.current[2] = el)} className="absolute mt-8 font-mono text-center w-[400px] text-[#606060] leading-relaxed uppercase tracking-widest pointer-events-auto origin-center text-sm">
              The Code & Compute Society builds a strong coding culture through intensive collaboration.
            </p>
          </div>

          {/* --- REVEAL PANEL (Starts Hidden, slides in Right) --- */}
          <div ref={leftContentRef} className="absolute right-[5%] lg:right-[15%] top-1/2 -translate-y-1/2 w-full max-w-[500px] flex flex-col gap-10 text-left z-30 pointer-events-auto">
            
            <div className="flex-1">
              <ul className="space-y-6">
                {ACTIVITIES.map((item, i) => (
                  <li 
                    key={i} 
                    ref={(el) => (listItemsRef.current[i] = el)}
                    className="flex items-center gap-4 text-xl font-display font-bold uppercase tracking-wide text-white"
                  >
                    <div className="text-[#39ff14]"><Zap size={24} /></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <div 
                ref={cardRef} 
                className="rounded-2xl p-8 relative overflow-hidden group border border-[#222]"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#a855f7]/20 border border-[#a855f7]/40 text-[#a855f7] mb-6 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                  <Target size={28} />
                </div>
                
                <h3 className="font-display font-black text-2xl uppercase text-white leading-tight mb-4">
                  Selective Membership
                </h3>
                
                <p className="text-sm leading-relaxed text-[#a0a0a0]">
                  We operate with a tight-knit core of <strong className="text-white">15–20 students</strong>. This ensures focused mentorship, high-quality collaboration, and deeply impactful contributions.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
