import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GALLERY = [
  { text: 'Event Moments', size: 'col-span-2 row-span-2 text-2xl', bg: '#100a22' },
  { text: 'Workshop Highlights', size: 'col-span-1 row-span-1', bg: '#0e2217' },
  { text: 'Project Showcases', size: 'col-span-1 row-span-1', bg: '#081820' },
  { text: 'Team Collaborations', size: 'col-span-2 row-span-1', bg: '#1a1005' },
];

export default function GalleryPreview() {
  const wrapperRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 70%',
        },
        scale: 0.9,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'back.out(1.5)',
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-10 w-full" id="gallery">
      <section className="flex flex-col py-32 items-center" style={{ background: '#111111' }} ref={wrapperRef}>
        
        <h2 className="font-display font-black text-5xl uppercase text-white mb-12 text-center tracking-tight">
          Gallery Preview
        </h2>

        <div ref={gridRef} className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-[1000px] px-8 mx-auto" style={{ height: '500px' }}>
          {GALLERY.map((item, i) => (
            <div key={i} className={`${item.size} rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden group cursor-pointer`}
                 style={{ background: item.bg }}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
              <h3 className="relative z-10 font-display font-black uppercase text-white tracking-widest text-center px-4 group-hover:scale-110 transition-transform duration-500">
                {item.text}
              </h3>
            </div>
          ))}
        </div>

        <button className="mt-12 font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-white border border-[#39ff14]/50 hover:bg-[#39ff14] hover:text-black transition-all">
          View Complete Gallery
        </button>

      </section>
    </div>
  );
}
