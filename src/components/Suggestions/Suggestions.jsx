export default function Suggestions() {
  return (
    <div className="scroll-wrapper" style={{ height: 'auto', minHeight: '100vh', zIndex: 10 }} id="suggestions">
      <section className="panel flex items-center justify-center py-32" style={{ background: '#0a0d14' }}>
        <div className="w-full max-w-[800px] mx-auto px-8 relative">
          
          <div className="absolute -inset-4 bg-gradient-to-br from-[#39ff14]/10 to-transparent rounded-[32px] blur-2xl -z-10" />

          <div className="bg-[#111] border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            <h2 className="font-display font-black text-4xl uppercase text-white mb-4">
              Visitor Suggestions
            </h2>
            <p className="text-[#a0a0a0] mb-10 text-lg">
              Not part of CCS? You can still submit project ideas, share problem statements, or suggest collaborations.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#606060] mb-2 uppercase">Name</label>
                  <input type="text" className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#606060] mb-2 uppercase">Email</label>
                  <input type="email" className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] transition-colors" placeholder="jane@ajuniversity.ac.in" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-mono text-[#606060] mb-2 uppercase">Suggestion Type</label>
                <select className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] transition-colors appearance-none">
                  <option>Submit Project Idea</option>
                  <option>Share Problem Statement</option>
                  <option>Suggest Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#606060] mb-2 uppercase">Details</label>
                <textarea rows="4" className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#39ff14] transition-colors resize-none" placeholder="Tell us about it..."></textarea>
              </div>

              <button type="button" className="w-full bg-[#39ff14] text-black font-display font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-colors duration-300">
                Submit Suggestion
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
