import { Target, Search, Filter, ShieldAlert, BarChart3, TrendingUp, Zap, ChevronRight, Calculator, CheckCircle2 } from "lucide-react";

const STRATEGIES = [
  {
    title: "RSI Divergence Exit",
    description: "Exit when price makes a higher high but RSI makes a lower high.",
    winRate: "68%",
    category: "momentum",
    premium: false,
    asset: "Universal",
  },
  {
    title: "ATR Trailing Stop",
    description: "Dynamic exit based on average true range volatility.",
    winRate: "74%",
    category: "volatility",
    premium: true,
    asset: "Forex/Indices",
  },
  {
    title: "Fibonacci Level Exhaustion",
    description: "Automated exit at 1.618 and 2.618 extensions.",
    winRate: "62%",
    category: "structure",
    premium: true,
    asset: "Stocks/Crypto",
  },
  {
    title: "Time-Based Liquidity Exit",
    description: "Exit before the NY Open or London Close volatility spike.",
    winRate: "59%",
    category: "timing",
    premium: false,
    asset: "Universal",
  }
];

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#00FF66]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Strategy Library</h1>
            <p className="text-gray-400 max-w-xl">
              Access 100+ AI-powered exit strategies. Backtested, verified, and ready to be loaded into your Agent.
            </p>
          </div>
          <div className="relative group max-w-sm w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#00FF66] transition-colors" />
            <input 
              type="text" 
              placeholder="Search strategies (e.g. RSI, ATR...)" 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#00FF66] transition-colors outline-none"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          {["All", "Momentum", "Volatility", "Structure", "Timing", "AI Custom"].map((cat) => (
            <button key={cat} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>

        {/* Strategy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRATEGIES.map((strat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00FF66]/30 transition-all flex flex-col group relative overflow-hidden">
              {strat.premium && (
                <div className="absolute top-0 right-0 p-2">
                  <div className="bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-[8px] font-black tracking-widest px-2 py-0.5 rounded uppercase">Premium</div>
                </div>
              )}
              
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {strat.category === "momentum" && <TrendingUp className="text-blue-500 w-5 h-5" />}
                {strat.category === "volatility" && <Zap className="text-amber-500 w-5 h-5" />}
                {strat.category === "structure" && <Target className="text-purple-500 w-5 h-5" />}
                {strat.category === "timing" && <BarChart3 className="text-[#00FF66] w-5 h-5" />}
              </div>

              <h3 className="font-bold mb-2 group-hover:text-[#00FF66] transition-colors">{strat.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-1">{strat.description}</p>

              <div className="space-y-4">
                 <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <span>Backtest WR</span>
                    <span className="text-white">{strat.winRate}</span>
                 </div>
                 <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#00FF66]/50 transition-all duration-1000" 
                      style={{ width: strat.winRate }}
                    ></div>
                 </div>
                 <button className="w-full py-2.5 bg-white/5 hover:bg-[#00FF66] hover:text-black transition-all rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                   {strat.premium ? "Unlock with Premium" : "Load into Agent"} <ChevronRight className="w-3 h-3" />
                 </button>
              </div>
            </div>
          ))}
        </div>

        {/* pSEO Teaser */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#00FF66]/5 to-transparent border border-[#00FF66]/10">
           <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Calculator className="text-[#00FF66]" /> Massive Exit Library for pSEO
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                This library is the foundation for our organic growth. Every strategy, every indicator, and every asset pair will have its own optimized exit page, ranking for professional search queries instantly.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["100+ Indicators", "50+ Market Types", "AI Optimization", "Live Data Sync"].map((f) => (
                   <div key={f} className="flex items-center gap-2 text-[10px] font-bold text-gray-300">
                     <CheckCircle2 className="w-3 h-3 text-[#00FF66]" /> {f}
                   </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
