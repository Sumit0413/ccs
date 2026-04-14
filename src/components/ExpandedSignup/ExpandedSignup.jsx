import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LightRays from '../LightRays/LightRays';

export default function ExpandedSignup() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const inputsRef = useRef([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

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

    // Calculate password strength
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength++;
      if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^a-zA-Z0-9]/.test(value)) strength++;
      setPasswordStrength(strength);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Signup:', formData);
    }
  };

  const getPasswordStrengthColor = () => {
    const colors = ['#606060', '#ef4444', '#f97316', '#eab308', '#39ff14'];
    return colors[passwordStrength];
  };

  const getPasswordStrengthLabel = () => {
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
    return labels[passwordStrength];
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20" style={{ background: '#08080a' }}>
      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0 opacity-40" style={{ mixBlendMode: 'screen', pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#a855f7"
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
              Join <span style={{ color: '#a855f7' }}>CCS</span>
            </h1>
            <p style={{ color: '#a0a0a0' }}>Create your account to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div ref={(el) => inputsRef.current.push(el)}>
              <label className="block font-display font-bold text-sm uppercase text-white mb-3" style={{ letterSpacing: '0.05em' }}>
                Full Name
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-3.5" style={{ color: '#a855f7' }} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-600 focus:outline-none transition duration-300"
                  style={{
                    borderColor: errors.fullName ? '#ef4444' : 'rgba(255,255,255,0.2)',
                    boxShadow: errors.fullName ? '0 0 15px rgba(239,68,68,0.2)' : 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#a855f7';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(168,85,247,0.2)';
                  }}
                  onBlur={(e) => {
                    if (!errors.fullName) {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                />
              </div>
              {errors.fullName && <p className="mt-2 text-sm text-red-400">{errors.fullName}</p>}
            </div>

            {/* Email Field */}
            <div ref={(el) => inputsRef.current.push(el)}>
              <label className="block font-display font-bold text-sm uppercase text-white mb-3" style={{ letterSpacing: '0.05em' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-3.5" style={{ color: '#a855f7' }} />
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
                    e.currentTarget.style.borderColor = '#a855f7';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(168,85,247,0.2)';
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
                <Lock size={18} className="absolute left-4 top-3.5" style={{ color: '#a855f7' }} />
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
                    e.currentTarget.style.borderColor = '#a855f7';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(168,85,247,0.2)';
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

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-3">
                  <div className="flex gap-1 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 flex-1 rounded-full transition-colors"
                        style={{
                          background: i < passwordStrength ? getPasswordStrengthColor() : 'rgba(255,255,255,0.1)',
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: getPasswordStrengthColor() }}>
                    Strength: {getPasswordStrengthLabel()}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div ref={(el) => inputsRef.current.push(el)}>
              <label className="block font-display font-bold text-sm uppercase text-white mb-3" style={{ letterSpacing: '0.05em' }}>
                Confirm Password
              </label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-3.5" style={{ color: '#a855f7' }} />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-600 focus:outline-none transition duration-300"
                  style={{
                    borderColor: errors.confirmPassword ? '#ef4444' : 'rgba(255,255,255,0.2)',
                    boxShadow: errors.confirmPassword ? '0 0 15px rgba(239,68,68,0.2)' : 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#a855f7';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(168,85,247,0.2)';
                  }}
                  onBlur={(e) => {
                    if (!errors.confirmPassword) {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-white transition"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-2 text-sm text-red-400">{errors.confirmPassword}</p>}
            </div>

            {/* Terms & Conditions */}
            <div ref={(el) => inputsRef.current.push(el)} className="flex items-start gap-3">
              <input type="checkbox" id="terms" className="mt-1" required />
              <label htmlFor="terms" style={{ color: '#a0a0a0', fontSize: '14px' }}>
                I agree to the{' '}
                <a href="#terms" style={{ color: '#a855f7', textDecoration: 'none' }} className="hover:opacity-80">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
              style={{ background: '#a855f7', boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 35px rgba(168,85,247,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 20px rgba(168,85,247,0.2)';
              }}
            >
              Create Account
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div ref={(el) => inputsRef.current.push(el)} className="my-8 flex items-center gap-4">
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ color: '#606060', fontSize: '12px' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          </div>

          {/* Login Link */}
          <div ref={(el) => inputsRef.current.push(el)} className="text-center">
            <p style={{ color: '#a0a0a0', marginBottom: '12px' }}>
              Already have an account?
            </p>
            <Link
              to="/login"
              className="font-display font-bold text-sm uppercase tracking-widest px-6 py-3 rounded-lg text-white transition-all duration-300 inline-flex items-center gap-2 hover:-translate-y-1"
              style={{ background: 'rgba(57,255,20,0.1)', border: '1px solid rgba(57,255,20,0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#39ff14';
                e.currentTarget.style.background = 'rgba(57,255,20,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(57,255,20,0.3)';
                e.currentTarget.style.background = 'rgba(57,255,20,0.1)';
              }}
            >
              Sign In Here
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
