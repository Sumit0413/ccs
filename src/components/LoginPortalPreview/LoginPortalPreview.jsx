export default function LoginPortalPreview() {
  return (
    <div className="scroll-wrapper" style={{ height: 'auto', minHeight: '100vh', zIndex: 11 }} id="login">
      <section className="panel flex flex-col items-center justify-center py-32 text-center" style={{ background: '#12121e' }}>
        
        <div className="w-20 h-20 bg-[#39ff14]/10 rounded-full flex items-center justify-center text-4xl mb-8 border border-[#39ff14]/30 glow-pulse">
          🔐
        </div>
        
        <h2 className="font-display font-black text-6xl uppercase text-white mb-6">
          Access Portal
        </h2>
        
        <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto mb-12">
          Secure, role-based access for CCS internal operations.
        </p>

        <div className="flex gap-4 mb-16 flex-wrap justify-center">
          <a href="#" className="font-display font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full text-black transition-all hover:-translate-y-1"
             style={{ background: '#39ff14', boxShadow: '0 0 20px rgba(57,255,20,0.25)' }}>
            Enter Portal
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] w-full px-8 text-left">
          <div className="p-6 bg-[#111] rounded-xl border border-white/5">
            <h3 className="font-display font-bold text-[#39ff14] uppercase tracking-widest text-sm mb-2">Members</h3>
            <p className="text-xs text-[#a0a0a0]">Update weekly project progress and track contributions.</p>
          </div>
          <div className="p-6 bg-[#111] rounded-xl border border-white/5">
            <h3 className="font-display font-bold text-[#a855f7] uppercase tracking-widest text-sm mb-2">Organizers</h3>
            <p className="text-xs text-[#a0a0a0]">Manage events, sprint planning, and coordinate workflows.</p>
          </div>
          <div className="p-6 bg-[#111] rounded-xl border border-white/5">
            <h3 className="font-display font-bold text-[#3b82f6] uppercase tracking-widest text-sm mb-2">Convenors</h3>
            <p className="text-xs text-[#a0a0a0]">Monitor complete activity, review metrics, and approve actions.</p>
          </div>
        </div>

      </section>
    </div>
  );
}
