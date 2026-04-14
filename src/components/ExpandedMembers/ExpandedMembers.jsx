import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandedMembers() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
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
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
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

  const coreTeam = [
    {
      name: 'Amit Kumar',
      role: 'President',
      expertise: 'Full Stack Development',
      image: '👨‍💼',
      social: { github: '#', linkedin: '#', twitter: '#', email: 'amit@ccs.com' },
    },
    {
      name: 'Priya Singh',
      role: 'Vice President',
      expertise: 'Machine Learning',
      image: '👩‍💼',
      social: { github: '#', linkedin: '#', twitter: '#', email: 'priya@ccs.com' },
    },
    {
      name: 'Rahul Patel',
      role: 'Technical Lead',
      expertise: 'Web Development',
      image: '👨‍💻',
      social: { github: '#', linkedin: '#', twitter: '#', email: 'rahul@ccs.com' },
    },
    {
      name: 'Neha Gupta',
      role: 'Content Lead',
      expertise: 'Technical Writing',
      image: '👩‍💻',
      social: { github: '#', linkedin: '#', twitter: '#', email: 'neha@ccs.com' },
    },
    {
      name: 'Arjun Singh',
      role: 'Events Manager',
      expertise: 'Community Building',
      image: '👨‍🎓',
      social: { github: '#', linkedin: '#', twitter: '#', email: 'arjun@ccs.com' },
    },
    {
      name: 'Divya Sharma',
      role: 'Finance Head',
      expertise: 'Project Management',
      image: '👩‍🎓',
      social: { github: '#', linkedin: '#', twitter: '#', email: 'divya@ccs.com' },
    },
  ];

  const developers = Array.from({ length: 12 }, (_, i) => ({
    name: `Developer ${i + 1}`,
    role: 'Active Member',
    expertise: ['Python', 'React', 'AWS', 'ML'][i % 4],
    image: ['👨‍💻', '👩‍💻'][i % 2],
  }));

  return (
    <div ref={containerRef} className="relative w-full z-10">
      {/* Overview */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Meet the <span style={{ color: '#39ff14' }}>Team</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6" style={{ color: '#a0a0a0' }}>
            The Code & Compute Society is powered by a dedicated group of passionate developers, designers, and tech enthusiasts. Our team works collaboratively to create opportunities for learning, innovation, and professional growth.
          </p>
          <p style={{ color: '#606060' }}>
            Each member brings unique skills and perspectives, contributing to our mission of building a thriving technical community.
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Core <span style={{ color: '#a855f7' }}>Leadership</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, i) => (
              <div
                key={i}
                ref={(el) => cardsRef.current.push(el)}
                className="rounded-xl overflow-hidden border group"
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
                <div className="h-32 flex items-center justify-center" style={{ background: 'rgba(57,255,20,0.1)' }}>
                  <span style={{ fontSize: '64px' }}>{member.image}</span>
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-lg uppercase text-white mb-1">{member.name}</h3>
                  <p style={{ color: '#39ff14', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
                    {member.role}
                  </p>
                  <p style={{ color: '#a0a0a0', marginBottom: '12px', fontSize: '14px' }}>{member.expertise}</p>

                  <div className="flex gap-3">
                    <a href={member.social.github} className="p-2 rounded-lg hover:bg-white/10 transition"
                      title="GitHub">
                      <Github size={18} style={{ color: '#39ff14' }} />
                    </a>
                    <a href={member.social.linkedin} className="p-2 rounded-lg hover:bg-white/10 transition"
                      title="LinkedIn">
                      <Linkedin size={18} style={{ color: '#39ff14' }} />
                    </a>
                    <a href={member.social.twitter} className="p-2 rounded-lg hover:bg-white/10 transition"
                      title="Twitter">
                      <Twitter size={18} style={{ color: '#39ff14' }} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="p-2 rounded-lg hover:bg-white/10 transition"
                      title="Email">
                      <Mail size={18} style={{ color: '#39ff14' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Members */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Active <span style={{ color: '#a855f7' }}>Developers</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {developers.map((dev, i) => (
              <div
                key={i}
                ref={(el) => cardsRef.current.push(el)}
                className="rounded-lg p-4 text-center border hover:scale-105 transition-transform"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '8px' }}>{dev.image}</div>
                <h4 className="font-display font-bold text-sm uppercase text-white mb-1">{dev.name.split(' ')[0]}</h4>
                <p style={{ color: '#39ff14', fontSize: '11px' }}>{dev.role}</p>
                <p style={{ color: '#606060', fontSize: '11px', marginTop: '4px' }}>{dev.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Why <span style={{ color: '#39ff14' }}>Join CCS</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Skill Development', desc: 'Learn from industry experts and peer developers through workshops and projects.' },
              { title: 'Networking', desc: 'Build connections with like-minded tech enthusiasts and industry professionals.' },
              { title: 'Real Projects', desc: 'Work on meaningful projects that impact the community and gain practical experience.' },
              { title: 'Mentorship', desc: 'Get guided by experienced members who have been where you are.' },
              { title: 'Competitions', desc: 'Participate in hackathons and contests to showcase your skills.' },
              { title: 'Opportunities', desc: 'Access internship and job opportunities through our industry partnerships.' },
            ].map((benefit, i) => (
              <div
                key={i}
                ref={(el) => sectionsRef.current.push(el)}
                className="rounded-lg p-8 border"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h3 className="font-display font-bold text-lg uppercase text-white mb-3" style={{ color: i % 2 === 0 ? '#39ff14' : '#a855f7' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#a0a0a0' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Want to <span style={{ color: '#39ff14' }}>Contribute</span>?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#a0a0a0' }}>
            We're always looking for passionate individuals to join our team and help us build something amazing.
          </p>
          <button className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-black transition-all hover:-translate-y-1"
            style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
