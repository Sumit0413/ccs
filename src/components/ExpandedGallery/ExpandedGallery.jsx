import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandedGallery() {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imagesRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: imagesRef.current[0]?.parentElement,
            start: 'top 70%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const galleryImages = [
    { id: 1, title: 'Hackathon 2024', category: 'Events', emoji: '🚀' },
    { id: 2, title: 'Workshop Session', category: 'Workshop', emoji: '📚' },
    { id: 3, title: 'Team Collaboration', category: 'Team', emoji: '👥' },
    { id: 4, title: 'Coding Challenge', category: 'Activities', emoji: '💻' },
    { id: 5, title: 'Project Demo', category: 'Projects', emoji: '📱' },
    { id: 6, title: 'Awards Ceremony', category: 'Events', emoji: '🏆' },
    { id: 7, title: 'Tech Talk Session', category: 'Workshop', emoji: '🎤' },
    { id: 8, title: 'Community Meetup', category: 'Events', emoji: '🤝' },
    { id: 9, title: 'Hackathon Finale', category: 'Events', emoji: '🎉' },
    { id: 10, title: 'Member Training', category: 'Activities', emoji: '🎓' },
    { id: 11, title: 'Code Review Session', category: 'Workshop', emoji: '👀' },
    { id: 12, title: 'Team Building', category: 'Team', emoji: '⛰️' },
  ];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const categories = ['Events', 'Workshop', 'Team', 'Activities', 'Projects'];

  return (
    <div ref={containerRef} className="relative w-full z-10">
      {/* Overview */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Photo <span style={{ color: '#39ff14' }}>Gallery</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6" style={{ color: '#a0a0a0' }}>
            Capture the spirit of Code & Compute Society through our collection of moments from events, workshops, hackathons, and community activities. See what we've been up to and get inspired to join us!
          </p>
          <p style={{ color: '#606060' }}>
            Click any image to view it in detail and explore our journey.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative w-full py-12" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="px-6 py-2 rounded-full font-display font-bold text-sm uppercase"
              style={{ background: '#39ff14', color: '#000' }}>
              All
            </button>
            {categories.map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full font-display font-bold text-sm uppercase border transition-all hover:border-[#39ff14]"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.2)', color: '#a0a0a0' }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                ref={(el) => imagesRef.current.push(el)}
                className="relative rounded-lg overflow-hidden h-56 cursor-pointer group"
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(i);
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center text-8xl"
                  style={{ background: 'linear-gradient(135deg, rgba(57,255,20,0.1), rgba(168,85,247,0.1))' }}>
                  {img.emoji}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-display font-bold text-lg text-white">{img.title}</h3>
                  <p style={{ color: '#39ff14', fontSize: '12px' }}>{img.category}</p>
                </div>

                {/* Border on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#39ff14] rounded-lg transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-2xl w-full bg-black rounded-xl border border-[#39ff14] overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/50 hover:bg-black/80 transition"
            >
              <X size={24} style={{ color: '#39ff14' }} />
            </button>

            {/* Image */}
            <div className="w-full h-80 flex items-center justify-center text-8xl"
              style={{
                background: 'linear-gradient(135deg, rgba(57,255,20,0.15), rgba(168,85,247,0.15))',
              }}>
              {selectedImage.emoji}
            </div>

            {/* Info */}
            <div className="p-8">
              <h2 className="font-display font-black text-3xl uppercase text-white mb-2">{selectedImage.title}</h2>
              <p style={{ color: '#39ff14', marginBottom: '12px', fontWeight: 'bold' }}>{selectedImage.category}</p>
              <p style={{ color: '#a0a0a0' }}>
                This moment captures the spirit of innovation and collaboration at CCS. Join us to be part of more such unforgettable moments.
              </p>

              {/* Navigation */}
              <div className="mt-8 flex gap-4 items-center">
                <button onClick={handlePrev} className="p-3 rounded-lg border border-[#39ff14]/50 hover:border-[#39ff14] transition-all">
                  <ChevronLeft size={20} style={{ color: '#39ff14' }} />
                </button>

                <div className="flex-1 text-center" style={{ color: '#a0a0a0' }}>
                  {currentIndex + 1} / {galleryImages.length}
                </div>

                <button onClick={handleNext} className="p-3 rounded-lg border border-[#39ff14]/50 hover:border-[#39ff14] transition-all">
                  <ChevronRight size={20} style={{ color: '#39ff14' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Photo Gallery Stats */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Gallery <span style={{ color: '#a855f7' }}>Stats</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="rounded-lg p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="font-display font-black text-4xl mb-3" style={{ color: '#39ff14' }}>200+</div>
              <p className="font-display font-bold text-sm uppercase text-white">Photos</p>
              <p style={{ color: '#606060' }}>Curated collection</p>
            </div>

            <div className="rounded-lg p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="font-display font-black text-4xl mb-3" style={{ color: '#a855f7' }}>5</div>
              <p className="font-display font-bold text-sm uppercase text-white">Categories</p>
              <p style={{ color: '#606060' }}>Diverse events</p>
            </div>

            <div className="rounded-lg p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="font-display font-black text-4xl mb-3" style={{ color: '#39ff14' }}>50+</div>
              <p className="font-display font-bold text-sm uppercase text-white">Events</p>
              <p style={{ color: '#606060' }}>Documented</p>
            </div>

            <div className="rounded-lg p-8 border" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="font-display font-black text-4xl mb-3" style={{ color: '#a855f7' }}>2020+</div>
              <p className="font-display font-bold text-sm uppercase text-white">Start Year</p>
              <p style={{ color: '#606060' }}>Our journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Share Your <span style={{ color: '#39ff14' }}>Moments</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: '#a0a0a0' }}>
            Have great photos from CCS events? Share them with us using #CodeAndComputeSociety on social media.
          </p>
          <button className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-black transition-all hover:-translate-y-1"
            style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
            Submit Photos
          </button>
        </div>
      </section>
    </div>
  );
}
