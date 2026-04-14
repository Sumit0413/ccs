import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandedEvents() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: (i) => (i % 2 === 0 ? -40 : 40) },
        {
          opacity: 1,
          x: 0,
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
        { opacity: 0, y: 50 },
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

  const upcomingEvents = [
    {
      title: 'Web Development Workshop',
      date: 'March 15, 2025',
      time: '4:00 PM - 6:00 PM',
      location: 'Tech Lab, Building A',
      attendees: 45,
      status: 'Upcoming',
    },
    {
      title: 'AI/ML Hackathon 2025',
      date: 'April 5-7, 2025',
      time: '9:00 AM onwards',
      location: 'Campus Hall',
      attendees: 200,
      status: 'Upcoming',
    },
    {
      title: 'Industry Talk: Cloud Computing',
      date: 'March 20, 2025',
      time: '3:00 PM - 4:30 PM',
      location: 'Auditorium',
      attendees: 100,
      status: 'Upcoming',
    },
    {
      title: 'Competitive Programming Contest',
      date: 'April 1, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Computer Lab',
      attendees: 80,
      status: 'Upcoming',
    },
  ];

  const pastEvents = [
    {
      title: 'GitHub Workshop',
      date: 'February 10, 2025',
      attendees: 60,
      highlights: 'Covered Git, GitHub workflows, and collaboration',
    },
    {
      title: 'CCS Hackathon 2024',
      date: 'November 15-17, 2024',
      attendees: 150,
      highlights: 'Best project won ₹50,000 prize',
    },
    {
      title: 'Tech Talk: Blockchain',
      date: 'December 5, 2024',
      attendees: 85,
      highlights: 'Insights into Web3 and cryptocurrency',
    },
    {
      title: 'DSA Bootcamp',
      date: 'October 1-30, 2024',
      attendees: 120,
      highlights: '30 days intensive program, 95% completion rate',
    },
  ];

  const eventTypes = [
    { icon: Trophy, name: 'Hackathons', count: '5+', desc: 'Annual competitions' },
    { icon: Users, name: 'Workshops', count: '15+', desc: 'Skill development' },
    { icon: MapPin, name: 'Meetups', count: '30+', desc: 'Community gatherings' },
    { icon: Calendar, name: 'Events', count: '50+', desc: 'Year-round activities' },
  ];

  return (
    <div ref={containerRef} className="relative w-full z-10">
      {/* Overview */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Events &amp; <span style={{ color: '#39ff14' }}>Activities</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6" style={{ color: '#a0a0a0' }}>
            At Code & Compute Society, we believe in learning through doing. We organize various events, workshops, hackathons, and competitions throughout the year to provide hands-on experience and foster community engagement.
          </p>
          <p style={{ color: '#606060' }}>
            Whether you're a beginner or an expert, there's something for everyone. Join us to learn, network, and grow together.
          </p>
        </div>
      </section>

      {/* Event Stats */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, i) => {
              const Icon = type.icon;
              return (
                <div
                  key={i}
                  ref={(el) => cardsRef.current.push(el)}
                  className="rounded-lg p-8 text-center border"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Icon size={40} style={{ color: i % 2 === 0 ? '#39ff14' : '#a855f7', marginBottom: '12px' }} className="mx-auto" />
                  <h3 className="font-display font-bold text-lg uppercase text-white mb-2">{type.name}</h3>
                  <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }} style={{ color: i % 2 === 0 ? '#39ff14' : '#a855f7' }}>
                    {type.count}
                  </p>
                  <p style={{ color: '#606060' }}>{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Upcoming <span style={{ color: '#a855f7' }}>Events</span>
          </h2>

          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <div
                key={i}
                ref={(el) => cardsRef.current.push(el)}
                className="rounded-lg p-8 border hover:border-opacity-100 transition-all group"
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
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-2xl uppercase text-white mb-3">{event.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2" style={{ color: '#a0a0a0' }}>
                        <Calendar size={18} style={{ color: '#39ff14' }} />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2" style={{ color: '#a0a0a0' }}>
                        <MapPin size={18} style={{ color: '#39ff14' }} />
                        {event.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span style={{ color: '#606060' }}>{event.time}</span>
                      <div className="flex items-center gap-1" style={{ color: '#a855f7' }}>
                        <Users size={16} />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 rounded-lg font-display font-bold text-sm uppercase"
                    style={{ background: '#39ff14', color: '#000' }}>
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Past <span style={{ color: '#39ff14' }}>Highlights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, i) => (
              <div
                key={i}
                ref={(el) => cardsRef.current.push(el)}
                className="rounded-lg p-8 border"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h3 className="font-display font-bold text-xl uppercase text-white mb-3">{event.title}</h3>
                <p style={{ color: '#a855f7', fontSize: '14px', marginBottom: '12px', fontWeight: 'bold' }}>
                  {event.date}
                </p>
                <p style={{ color: '#a0a0a0', marginBottom: '12px' }}>{event.highlights}</p>
                <div className="flex items-center gap-2" style={{ color: '#606060' }}>
                  <Users size={16} />
                  <span>{event.attendees} participants</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Annual <span style={{ color: '#a855f7' }}>Calendar</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter, i) => (
              <div
                key={i}
                ref={(el) => sectionsRef.current.push(el)}
                className="rounded-lg p-8 text-center border"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h3 className="font-display font-bold text-2xl uppercase text-white mb-6" style={{ color: i % 2 === 0 ? '#39ff14' : '#a855f7' }}>
                  {quarter}
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: '#a0a0a0' }}>
                  {i === 0 && (
                    <>
                      <li>• GitHub Workshop</li>
                      <li>• Web Dev Sprint</li>
                      <li>• Hackathon</li>
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <li>• DSA Bootcamp</li>
                      <li>• Tech Talk</li>
                      <li>• Contest</li>
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <li>• Project Demo</li>
                      <li>• Workshop</li>
                      <li>• Meetups</li>
                    </>
                  )}
                  {i === 3 && (
                    <>
                      <li>• Annual Event</li>
                      <li>• Year-end Party</li>
                      <li>• Awards</li>
                    </>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Don't Miss <span style={{ color: '#39ff14' }}>Out</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#a0a0a0' }}>
            Subscribe to our newsletter to get updates about upcoming events and opportunities.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <input type="email" placeholder="Enter your email" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14]" />
            <button className="px-8 py-3 rounded-full font-display font-bold text-sm uppercase text-black transition-all hover:-translate-y-1"
              style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
