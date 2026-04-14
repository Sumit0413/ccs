import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Code2, Database, Brain, Cpu, Network } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandedSOEIT() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: cardsRef.current[0]?.parentElement,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        sectionsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const departments = [
    {
      icon: Code2,
      name: 'Computer Science',
      focus: 'Algorithms, Data Structures, Software Development',
      color: '#39ff14',
    },
    {
      icon: Database,
      name: 'Information Technology',
      focus: 'Databases, Web Development, Cloud Computing',
      color: '#a855f7',
    },
    {
      icon: Brain,
      name: 'AI & Machine Learning',
      focus: 'Neural Networks, Deep Learning, NLP',
      color: '#39ff14',
    },
    {
      icon: Network,
      name: 'Cybersecurity',
      focus: 'Network Security, Cryptography, Ethical Hacking',
      color: '#a855f7',
    },
  ];

  const achievements = [
    { title: 'Best Technical Club', year: '2023', org: 'Arka Jain University' },
    { title: 'Innovation Award', year: '2023', org: 'Tech Summit India' },
    { title: 'Top 10 Hackathon', year: '2024', org: 'National Competition' },
    { title: 'Industry Partnership', year: '2024', org: 'Leading Tech Company' },
  ];

  const facilities = [
    'State-of-the-art labs with modern workstations',
    'High-speed internet connectivity',
    'Cloud computing access (AWS, Azure, GCP)',
    'Industry-standard development tools',
    'Mentorship from tech professionals',
    'Access to latest frameworks and libraries',
  ];

  return (
    <div ref={containerRef} className="relative w-full z-10">
      {/* Overview */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            About <span style={{ color: '#39ff14' }}>SOE & IT</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6" style={{ color: '#a0a0a0' }}>
            The School of Engineering and Information Technology (SOE & IT) at Arka Jain University is dedicated to fostering innovation, promoting research, and building technical excellence. We provide a comprehensive curriculum combined with practical industry exposure to create well-rounded technology professionals.
          </p>
          <p style={{ color: '#606060' }}>
            Our faculty members are experienced professionals with years of industry experience. We collaborate with leading tech companies to ensure our curriculum remains relevant and competitive in the global market.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Our <span style={{ color: '#a855f7' }}>Departments</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <div
                  key={i}
                  ref={(el) => cardsRef.current.push(el)}
                  className="rounded-xl p-8 border transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = dept.color;
                    e.currentTarget.style.boxShadow = `0 0 20px ${dept.color}33`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Icon size={32} style={{ color: dept.color, marginBottom: '12px' }} />
                  <h3 className="font-display font-bold text-lg uppercase text-white mb-3">{dept.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#a0a0a0' }}>{dept.focus}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-16">
            Top-Tier <span style={{ color: '#39ff14' }}>Facilities</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full mt-1" style={{ background: '#39ff14' }} />
                <p className="text-lg" style={{ color: '#a0a0a0' }}>{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Key <span style={{ color: '#a855f7' }}>Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                ref={(el) => cardsRef.current.push(el)}
                className="rounded-xl p-8 text-center border"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div className="font-display font-black text-3xl mb-3" style={{ color: i % 2 === 0 ? '#39ff14' : '#a855f7' }}>
                  {achievement.year}
                </div>
                <h3 className="font-display font-bold text-lg uppercase text-white mb-3">{achievement.title}</h3>
                <p style={{ color: '#606060' }}>{achievement.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-12">
            Program <span style={{ color: '#39ff14' }}>Highlights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="font-display font-bold text-2xl uppercase text-white mb-4">Industry Partnerships</h3>
              <p style={{ color: '#a0a0a0' }}>
                We collaborate with leading tech companies like Google, Microsoft, Amazon, and IBM to provide internship opportunities and real-world project exposure to our students.
              </p>
            </div>

            <div className="rounded-xl p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="font-display font-bold text-2xl uppercase text-white mb-4">Research Focus</h3>
              <p style={{ color: '#a0a0a0' }}>
                Our faculty and students are actively involved in cutting-edge research projects in AI, blockchain, IoT, and cloud computing.
              </p>
            </div>

            <div className="rounded-xl p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="font-display font-bold text-2xl uppercase text-white mb-4">Global Exposure</h3>
              <p style={{ color: '#a0a0a0' }}>
                Student exchange programs and international conferences help our learners gain global perspective and build international professional networks.
              </p>
            </div>

            <div className="rounded-xl p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 className="font-display font-bold text-2xl uppercase text-white mb-4">Skill Development</h3>
              <p style={{ color: '#a0a0a0' }}>
                Beyond academics, we focus on developing soft skills, leadership qualities, and entrepreneurial mindset through workshops and mentoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Join Our <span style={{ color: '#a855f7' }}>Community</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#a0a0a0' }}>
            Become part of a thriving technical ecosystem where innovation meets opportunity.
          </p>
          <button className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-black transition-all hover:-translate-y-1"
            style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
            Explore Programs
          </button>
        </div>
      </section>
    </div>
  );
}
