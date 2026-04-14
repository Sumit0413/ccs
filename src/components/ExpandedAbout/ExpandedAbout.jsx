import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Lightbulb, Code, Users, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandedAbout() {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: cardsRef.current[0]?.parentElement,
            start: 'top 70%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const values = [
    { icon: Code, title: 'Innovation', desc: 'Push boundaries with technology' },
    { icon: Users, title: 'Collaboration', desc: 'Build through teamwork' },
    { icon: Target, title: 'Excellence', desc: 'Strive for the highest standards' },
    { icon: Lightbulb, title: 'Learning', desc: 'Continuous growth mindset' },
  ];

  const timeline = [
    { year: '2020', title: 'Foundation', desc: 'CCS established at Arka Jain University with 5 founding members' },
    { year: '2021', title: 'First Event', desc: 'Organized inaugural Hackathon with 50+ participants' },
    { year: '2022', title: 'Growth', desc: 'Expanded to 40+ active members, multiple competitions' },
    { year: '2023', title: 'Recognition', desc: 'Gained institutional support and industry partnerships' },
    { year: '2024', title: 'Innovation', desc: 'Launched project incubation program' },
  ];

  return (
    <div ref={containerRef} className="relative w-full z-10">
      {/* Mission & Vision */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display font-black text-4xl uppercase text-white mb-6">
                Our <span style={{ color: '#a855f7' }}>Mission</span>
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#a0a0a0' }}>
                To cultivate a vibrant technical community at Arka Jain University that empowers students to excel in computer science and software engineering through intensive collaboration, mentorship, and real-world project experience.
              </p>
              <p style={{ color: '#606060' }}>
                We believe in creating an ecosystem where passion meets excellence, where students can learn, innovate, and grow together.
              </p>
            </div>

            <div>
              <h2 className="font-display font-black text-4xl uppercase text-white mb-6">
                Our <span style={{ color: '#39ff14' }}>Vision</span>
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#a0a0a0' }}>
                To become the most influential technical organization in India, recognized for producing exceptional developers, architects, and innovators who drive technological transformation.
              </p>
              <p style={{ color: '#606060' }}>
                We aspire to build a legacy where CCS alumni are leaders in the tech industry, contributing to global innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Core <span style={{ color: '#39ff14' }}>Values</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  ref={(el) => cardsRef.current.push(el)}
                  className="rounded-xl p-8 border group hover:border-opacity-100 transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#39ff14';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={32} style={{ color: '#39ff14', marginBottom: '16px' }} />
                  <h3 className="font-display font-bold text-xl uppercase text-white mb-3">{val.title}</h3>
                  <p style={{ color: '#a0a0a0' }}>{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Our <span style={{ color: '#a855f7' }}>Journey</span>
          </h2>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                ref={(el) => sectionsRef.current.push(el)}
                className="flex gap-8 items-start"
              >
                <div className="flex-shrink-0 w-24 pt-4">
                  <div className="font-display font-black text-3xl" style={{ color: i % 2 === 0 ? '#39ff14' : '#a855f7' }}>
                    {item.year}
                  </div>
                </div>

                <div className="flex-1 rounded-lg p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <h3 className="font-display font-bold text-2xl uppercase text-white mb-3">{item.title}</h3>
                  <p style={{ color: '#a0a0a0' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div ref={(el) => sectionsRef.current.push(el)}>
              <div className="font-display font-black text-5xl mb-3" style={{ color: '#39ff14' }}>15+</div>
              <p className="font-display font-bold text-sm uppercase text-white mb-2">Core Members</p>
              <p style={{ color: '#606060' }}>Skilled developers</p>
            </div>
            <div ref={(el) => sectionsRef.current.push(el)}>
              <div className="font-display font-black text-5xl mb-3" style={{ color: '#a855f7' }}>50+</div>
              <p className="font-display font-bold text-sm uppercase text-white mb-2">Active Community</p>
              <p style={{ color: '#606060' }}>Passionate learners</p>
            </div>
            <div ref={(el) => sectionsRef.current.push(el)}>
              <div className="font-display font-black text-5xl mb-3" style={{ color: '#39ff14' }}>5+</div>
              <p className="font-display font-bold text-sm uppercase text-white mb-2">Annual Events</p>
              <p style={{ color: '#606060' }}>Competitions & workshops</p>
            </div>
            <div ref={(el) => sectionsRef.current.push(el)}>
              <div className="font-display font-black text-5xl mb-3" style={{ color: '#a855f7' }}>∞</div>
              <p className="font-display font-bold text-sm uppercase text-white mb-2">Opportunities</p>
              <p style={{ color: '#606060' }}>Growth potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Ready to <span style={{ color: '#39ff14' }}>Join</span> Us?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#a0a0a0' }}>
            Whether you're a beginner or an expert, there's a place for you. Let's build the future together.
          </p>
          <button className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-black transition-all hover:-translate-y-1"
            style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
