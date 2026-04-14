import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ExpandedSuggestions() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const sectionsRef = useRef([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    title: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', category: '', title: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const categories = [
    'Feature Request',
    'Bug Report',
    'Improvement',
    'Event Suggestion',
    'Workshop Idea',
    'Other',
  ];

  return (
    <div ref={containerRef} className="relative w-full z-10">
      {/* Overview */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Your <span style={{ color: '#39ff14' }}>Feedback</span> Matters
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mb-6" style={{ color: '#a0a0a0' }}>
            At Code & Compute Society, we believe in continuous improvement. Your suggestions, feedback, and ideas help us create better experiences for our community. We read every submission and take your input seriously.
          </p>
          <p style={{ color: '#606060' }}>
            Whether it's a feature request, bug report, event suggestion, or any other idea – we'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[800px] mx-auto px-8">
          {submitted ? (
            <div className="rounded-xl p-12 border text-center" style={{
              background: 'rgba(57,255,20,0.1)',
              border: '1px solid rgba(57,255,20,0.3)',
            }}>
              <CheckCircle size={64} style={{ color: '#39ff14', margin: '0 auto 16px' }} />
              <h3 className="font-display font-black text-2xl uppercase text-white mb-4">Thank You!</h3>
              <p style={{ color: '#a0a0a0', marginBottom: '16px' }}>
                Your suggestion has been received. We appreciate your input and will review it shortly.
              </p>
              <p style={{ color: '#606060', fontSize: '14px' }}>
                A confirmation email has been sent to {formData.email}
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block font-display font-bold text-white uppercase mb-3">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14] transition"
                  style={{ borderColor: errors.name ? '#ef4444' : 'rgba(255,255,255,0.2)' }}
                />
                {errors.name && (
                  <p className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block font-display font-bold text-white uppercase mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14] transition"
                  style={{ borderColor: errors.email ? '#ef4444' : 'rgba(255,255,255,0.2)' }}
                />
                {errors.email && (
                  <p className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block font-display font-bold text-white uppercase mb-3">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none focus:border-[#39ff14] transition"
                  style={{ borderColor: errors.category ? '#ef4444' : 'rgba(255,255,255,0.2)' }}
                >
                  <option value="">Select a category...</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat} style={{ background: '#1a1a1a' }}>
                      {cat}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    {errors.category}
                  </p>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="block font-display font-bold text-white uppercase mb-3">Subject *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Brief subject of your suggestion"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14] transition"
                  style={{ borderColor: errors.title ? '#ef4444' : 'rgba(255,255,255,0.2)' }}
                />
                {errors.title && (
                  <p className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    {errors.title}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-display font-bold text-white uppercase mb-3">Your Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your detailed suggestion or feedback..."
                  rows={8}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14] transition resize-none"
                  style={{ borderColor: errors.message ? '#ef4444' : 'rgba(255,255,255,0.2)' }}
                />
                {errors.message && (
                  <p className="mt-2 flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={16} />
                    {errors.message}
                  </p>
                )}
                <p className="mt-2 text-xs" style={{ color: '#606060' }}>
                  {formData.message.length} characters (minimum 10)
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-black transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}
              >
                <Send size={18} />
                Send Suggestion
              </button>

              <p className="text-xs text-center" style={{ color: '#606060' }}>
                * Required fields
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Why We Ask */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            How We Use Your <span style={{ color: '#a855f7' }}>Feedback</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Improvement',
                desc: 'Your suggestions help us identify areas where we can improve our events, workshops, and community programs.',
                icon: '📈',
              },
              {
                title: 'Innovation',
                desc: 'Great ideas from our community often inspire new initiatives, features, and event concepts.',
                icon: '💡',
              },
              {
                title: 'Growth',
                desc: 'Your feedback shows us how to better serve our members and grow our community sustainably.',
                icon: '🌱',
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => sectionsRef.current.push(el)}
                className="rounded-lg p-8 text-center border"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 className="font-display font-bold text-xl uppercase text-white mb-3">{item.title}</h3>
                <p style={{ color: '#a0a0a0' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative w-full py-24" style={{ background: '#08080a' }}>
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="font-display font-black text-4xl uppercase text-white text-center mb-16">
            Frequently Asked <span style={{ color: '#39ff14' }}>Questions</span>
          </h2>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                q: 'How long does it take to respond?',
                a: 'We review all submissions within 5-7 business days. For urgent matters, contact us directly at admin@ccs.com',
              },
              {
                q: 'Is my feedback anonymous?',
                a: 'We collect your name and email to follow up with you. Your information is kept confidential and never shared.',
              },
              {
                q: 'Can I suggest specific event ideas?',
                a: 'Absolutely! Event suggestions are some of our most valuable feedback. Please be as detailed as possible.',
              },
              {
                q: 'What happens if I find a bug?',
                a: 'Report it in the form with "Bug Report" category. Our technical team will investigate immediately.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                ref={(el) => sectionsRef.current.push(el)}
                className="rounded-lg p-6 border"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <h3 className="font-display font-bold text-lg uppercase text-white mb-3" style={{ color: i % 2 === 0 ? '#39ff14' : '#a855f7' }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#a0a0a0' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section ref={(el) => sectionsRef.current.push(el)} className="relative w-full py-24" style={{ background: '#0a0a0f' }}>
        <div className="max-w-[1200px] mx-auto px-8 text-center">
          <h2 className="font-display font-black text-4xl uppercase text-white mb-8">
            Other Ways to <span style={{ color: '#a855f7' }}>Connect</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <p className="font-display font-bold uppercase text-white mb-2" style={{ color: '#39ff14' }}>Email</p>
              <p style={{ color: '#a0a0a0' }}>admin@ccs.com</p>
            </div>
            <div>
              <p className="font-display font-bold uppercase text-white mb-2" style={{ color: '#39ff14' }}>Discord</p>
              <p style={{ color: '#a0a0a0' }}>Join our community</p>
            </div>
            <div>
              <p className="font-display font-bold uppercase text-white mb-2" style={{ color: '#39ff14' }}>Instagram</p>
              <p style={{ color: '#a0a0a0' }}>@codecomputeccs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
