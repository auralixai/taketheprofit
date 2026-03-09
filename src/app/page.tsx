import { Metadata } from "next";
import { TrendingUp, Target, ShieldAlert, BarChart3, Zap, BrainCircuit, Globe, LayoutDashboard, Wallet, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Take The Profit | AI Trade Exit Agent",
  description: "The ultimate AI platform for trade exits. Stop overtrading and eliminate emotional exits with our AI-powered backtesting and psychological signals.",
  openGraph: {
    title: "Take The Profit | AI Trade Exit Agent",
    description: "AI-powered exit strategies for professional traders.",
    url: "https://taketheprofit.com",
    siteName: "Take The Profit",
    images: [{ url: "/og-image.png" }],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white selection:bg-[#00FF66]/30">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-xs font-bold mb-8 animate-pulse uppercase tracking-widest">
            <BrainCircuit className="w-3.5 h-3.5" />
            AI EXIT AGENT V1.0 LIVE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Your Trades Deserve<br />A Better Exit.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Eliminate emotional bias and greed. TakeTheProfit uses AI to calculate precise exit points based on market volatility, psychological triggers, and historical win rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/agent" className="w-full sm:w-auto px-8 py-4 bg-[#00FF66] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all flex items-center justify-center gap-2 group">
              Launch Exit Agent <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/library" className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all text-center">
              View Strategy Library
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale contrast-125">
             <div className="flex items-center gap-2 font-bold text-xl"><Zap className="fill-current" /> FAST CAPITAL</div>
             <div className="flex items-center gap-2 font-bold text-xl"><BarChart3 /> METRICS PRO</div>
             <div className="flex items-center gap-2 font-bold text-xl"><Target /> SIGNAL HUB</div>
             <div className="flex items-center gap-2 font-bold text-xl"><ShieldAlert /> SECURE TRADER</div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-4 bg-[#0A0B0D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00FF66]/30 transition-all group">
              <div className="w-12 h-12 bg-[#00FF66]/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BrainCircuit className="text-[#00FF66] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Exit Agent</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Let AI monitor your open positions and signal the optimal exit before the reversal hits.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00FF66]/30 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-blue-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Historical Backtesting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Verify your exit strategy against 10+ years of historical market data instantly.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00FF66]/30 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldAlert className="text-amber-500 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Psychological Guard</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Protect your gains from revenge trading and "just one more tick" FOMO syndrome.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0A0B0D] to-black">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF66]/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Built for Scaling Profit</h2>
            <div className="flex flex-col md:flex-row gap-8 mt-12">
               <div className="flex-1 text-left space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-[#00FF66] w-5 h-5" />
                    <span>Free pSEO Strategy Library</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-[#00FF66] w-5 h-5" />
                    <span>Basic AI Exit Backtesting</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="text-[#00FF66] w-5 h-5" />
                    <span>Real-time Premium Signals</span>
                  </div>
               </div>
               <div className="flex-1 bg-white/5 p-6 rounded-2xl border border-white/10 text-center">
                  <span className="text-sm text-gray-400 uppercase tracking-widest font-bold">Premium Access</span>
                  <div className="text-4xl font-bold mt-2 mb-4 tracking-tighter">$49<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                  <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-[#00FF66] transition-colors">Start Free Trial</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-8">
            <Globe className="w-5 h-5 hover:text-white cursor-pointer" />
            <LayoutDashboard className="w-5 h-5 hover:text-white cursor-pointer" />
            <Wallet className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
          <p>© 2026 TakeTheProfit. Not financial advice. Trade at your own risk.</p>
        </div>
      </footer>
    </div>
  );
}
