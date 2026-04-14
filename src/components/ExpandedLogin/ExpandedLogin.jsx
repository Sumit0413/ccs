import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LightRays from '../LightRays/LightRays';

export default function ExpandedLogin() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const inputsRef = useRef([]);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo(
        inputsRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: 'back.out(1.2)',
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Min 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Login:', formData);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#08080a' }}>
      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ mixBlendMode: 'screen', pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#39ff14"
          raysSpeed={0.5}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          fadeDistance={2}
          saturation={0.8}
        />
      </div>

      {/* Form Container */}
      <div ref={formRef} className="relative z-10 w-full max-w-md px-8">
        <div className="rounded-2xl border p-12" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-display font-black text-4xl uppercase text-white mb-2">
              Welcome <span style={{ color: '#39ff14' }}>Back</span>
            </h1>
            <p style={{ color: '#a0a0a0' }}>Sign in to your account to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div ref={(el) => inputsRef.current.push(el)}>
              <label className="block font-display font-bold text-sm uppercase text-white mb-3" style={{ letterSpacing: '0.05em' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-3.5" style={{ color: '#39ff14' }} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-600 focus:outline-none transition duration-300"
                  style={{
                    borderColor: errors.email ? '#ef4444' : 'rgba(255,255,255,0.2)',
                    boxShadow: errors.email ? '0 0 15px rgba(239,68,68,0.2)' : 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#39ff14';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(57,255,20,0.2)';
                  }}
                  onBlur={(e) => {
                    if (!errors.email) {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div ref={(el) => inputsRef.current.push(el)}>
              <label className="block font-display font-bold text-sm uppercase text-white mb-3" style={{ letterSpacing: '0.05em' }}>
                Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-3.5" style={{ color: '#39ff14' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-600 focus:outline-none transition duration-300"
                  style={{
                    borderColor: errors.password ? '#ef4444' : 'rgba(255,255,255,0.2)',
                    boxShadow: errors.password ? '0 0 15px rgba(239,68,68,0.2)' : 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#39ff14';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(57,255,20,0.2)';
                  }}
                  onBlur={(e) => {
                    if (!errors.password) {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-sm text-red-400">{errors.password}</p>}
            </div>

            {/* Forgot Password */}
            <div ref={(el) => inputsRef.current.push(el)} className="flex justify-end">
              <a href="#forgot" style={{ color: '#39ff14', fontSize: '14px', textDecoration: 'none' }} className="hover:opacity-80 transition">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg text-black transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
              style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 35px rgba(57,255,20,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(57,255,20,0.2)';
              }}
            >
              Sign In
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div ref={(el) => inputsRef.current.push(el)} className="my-8 flex items-center gap-4">
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ color: '#606060', fontSize: '12px' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          </div>

          {/* Signup Link */}
          <div ref={(el) => inputsRef.current.push(el)} className="text-center">
            <p style={{ color: '#a0a0a0', marginBottom: '12px' }}>
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg text-white transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-1"
              style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a855f7';
                e.currentTarget.style.background = 'rgba(168,85,247,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)';
                e.currentTarget.style.background = 'rgba(168,85,247,0.1)';
              }}
            >
              Sign Up Here
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            to="/"
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '14px' }}
            className="hover:opacity-80 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
