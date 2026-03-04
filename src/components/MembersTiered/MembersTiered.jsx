import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Users, UserCog, Code2, Layers, Cpu, Cloud, Palette, Settings, Sparkles } from 'lucide-react';

const TIERS = [
  {
    title: 'Convenors',
    color: '#39ff14',
    members: [
      { name: 'Dr. Jane Doe', designation: 'Faculty Convenor', img: <GraduationCap size={32} />, stack: ['Leadership', 'Admin'] },
      { name: 'John Smith', designation: 'Student Convenor', img: <Users size={32} />, stack: ['System', 'Scale'] },
      { name: 'Alice Ray', designation: 'Co-Convenor', img: <UserCog size={32} />, stack: ['Vision', 'Growth'] },
    ],
  },
  {
    title: 'Organizers',
    color: '#a855f7',
    members: [
      { name: 'Ian', designation: 'Event Mgr', img: <UserCog size={32} />, stack: ['Ops', 'Logistics'] },
      { name: 'Jane', designation: 'Marketing', img: <Users size={32} />, stack: ['Social', 'Promo'] },
      { name: 'Kevin', designation: 'Sponsor', img: <UserCog size={32} />, stack: ['Corporate', 'Funds'] },
    ],
  },
  {
    title: 'Technical Team',
    color: '#3b82f6',
    members: [
      { name: 'Sam', designation: 'Full Stack', img: <Layers size={32} />, stack: ['NextJS', 'Node'] },
      { name: 'Tina', designation: 'AI/ML', img: <Cpu size={32} />, stack: ['Python', 'Torch'] },
      { name: 'Uma', designation: 'Cloud', img: <Cloud size={32} />, stack: ['AWS', 'K8s'] },
      { name: 'Victor', designation: 'Frontend', img: <Code2 size={32} />, stack: ['React', 'Vue'] },
      { name: 'Wendy', designation: 'Backend', img: <Settings size={32} />, stack: ['Go', 'Rust'] },
    ],
  },
  {
    title: 'Members',
    color: '#f59e0b',
    members: [
      { name: 'Chris', designation: 'Frontend Dev', img: <Code2 size={32} />, stack: ['React', 'CSS'] },
      { name: 'Daisy', designation: 'Backend Dev', img: <Settings size={32} />, stack: ['Go', 'Postgres'] },
      { name: 'Evan', designation: 'UI/UX', img: <Palette size={32} />, stack: ['Figma', 'Framer'] },
      { name: 'Faith', designation: 'Data App', img: <Layers size={32} />, stack: ['Python', 'SQL'] },
      { name: 'Gavin', designation: 'Mobile Dev', img: <Code2 size={32} />, stack: ['Swift', 'Kotlin'] },
      { name: 'Hope', designation: 'Cloud Eng', img: <Cloud size={32} />, stack: ['Azure', 'Terra'] },
      { name: 'Isaac', designation: 'QA Tester', img: <Settings size={32} />, stack: ['Jest', 'Cypress'] },
      { name: 'Julia', designation: 'Web3 Dev', img: <Layers size={32} />, stack: ['Solidity', 'ETH'] },
      { name: 'Kyle', designation: 'Game Dev', img: <Code2 size={32} />, stack: ['Unity', 'C#'] },
      { name: 'Lily', designation: 'Cyber', img: <Settings size={32} />, stack: ['Network', 'Linux'] },
      { name: 'Max', designation: 'DevOps Eng', img: <Cloud size={32} />, stack: ['GCP', 'Docker'] },
      { name: 'Nora', designation: 'AI Res', img: <Cpu size={32} />, stack: ['R', 'Math'] },
    ],
  },
];

export default function MembersTiered() {
  const wrapperRef = useRef(null);
  const stackPosRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const cards = cardsRef.current.filter(Boolean);
        if (!cards.length || !stackPosRef.current) return;

        const stackRect = stackPosRef.current.getBoundingClientRect();
        const stackCenterX = stackRect.left + stackRect.width / 2;
        const stackCenterY = stackRect.top + stackRect.height / 2;

        cards.forEach((card, i) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;
          const cardCenterY = cardRect.top + cardRect.height / 2;

          const deltaX = stackCenterX - cardCenterX;
          const deltaY = stackCenterY - cardCenterY;

          const offsetX = deltaX + (i - cards.length / 2) * 1.5;
          const offsetY = deltaY - (i * 1.5);
          const rotZ = (i - cards.length / 2) * 2;

          gsap.set(card, {
            x: offsetX,
            y: offsetY,
            rotateZ: rotZ,
            rotateY: 180, 
            scale: 0.95,
            zIndex: cards.length - i,
          });
        });

        let cardIndex = 0;
        
        TIERS.forEach((tier, tIdx) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: headingRefs.current[tIdx],
              start: 'top 75%',
            },
          });

          tier.members.forEach((m, cIdx) => {
            const card = cardsRef.current[cardIndex++];

            tl.to(card, {
              x: 0,
              y: 0,
              rotateZ: 0,
              rotateY: 0,
              scale: 1,
              zIndex: cardIndex + 10,
              duration: 0.7,
              ease: 'power3.out', 
            }, cIdx === 0 ? 0 : '<0.15');
          });
        });

      }, wrapperRef);
      return () => ctx.revert();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  let counter = 0;

  return (
    <div className="relative py-32 z-10 w-full" style={{ background: '#0a0a0f' }} ref={wrapperRef} id="members">
      <div className="w-full max-w-[1280px] mx-auto px-8 relative">
        
        <h2 className="font-display font-black text-5xl uppercase text-white mb-8 text-center tracking-tight relative z-20">
          Our Members
        </h2>

        <div ref={stackPosRef} className="sticky top-48 left-1/2 -translate-x-1/2 w-8 h-8 pointer-events-none z-50" />

        <div className="flex flex-col gap-32 relative z-10" style={{ marginTop: '-2rem' }}>
          {TIERS.map((tier, tIdx) => (
            <div key={tIdx} className="flex flex-col items-center">
              
              <div ref={(el) => (headingRefs.current[tIdx] = el)} className="tier-heading flex items-center gap-4 mb-10 border-b border-white/10 pb-4 w-full max-w-[800px] justify-center pt-8">
                <div className="w-3 h-3 rounded-full glow-pulse" style={{ background: tier.color }} />
                <h3 className="font-display font-black text-xl uppercase tracking-widest text-white">
                  {tier.title}
                </h3>
              </div>

              <div className="flex gap-4 lg:gap-6 justify-center flex-wrap max-w-[1200px] mx-auto w-full">
                {tier.members.map((m) => {
                  const idx = counter++;
                  return (
                    <div
                      key={m.name}
                      ref={(el) => (cardsRef.current[idx] = el)}
                      className="w-[220px] h-[280px] relative shrink-0 z-10 bg-[#111] rounded-2xl shadow-sm"
                      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
                    >
                      <div
                        className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-4 text-center cursor-default bg-[#0e110f]"
                        style={{
                          border: `1px solid ${tier.color}33`,
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                        }}
                      >
                        {[70, 110, 140].map((size) => (
                          <div key={size} className="absolute rounded-full"
                            style={{
                              width: size, height: size,
                              border: `1px solid ${tier.color}1a`,
                              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                            }} />
                        ))}
                        <div className="relative z-10 font-display font-black text-4xl" style={{ color: tier.color }}>λ</div>
                        <p className="relative z-10 text-[0.55rem] font-bold tracking-widest uppercase mt-4 text-white/30">
                          {tier.title}
                        </p>
                      </div>

                      <div
                        className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center text-center cursor-default bg-[#111]"
                        style={{
                          border: '1px solid rgba(255,255,255,0.07)',
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(0deg)',
                        }}
                      >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-white/5 border border-white/10 mb-4">
                          {m.img}
                        </div>
                        <h4 className="font-display font-black text-lg text-white uppercase leading-tight mb-1">{m.name}</h4>
                        <p className="text-[10px] uppercase font-bold tracking-widest mb-4" style={{ color: tier.color }}>{m.designation}</p>
                        
                        <div className="mt-auto flex gap-1.5 flex-wrap justify-center w-full">
                          {m.stack.map(s => (
                            <span key={s} className="text-[10px] px-2 py-0.5 rounded font-mono font-medium"
                              style={{ background: `${tier.color}18`, border: `1px solid ${tier.color}38`, color: tier.color }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
