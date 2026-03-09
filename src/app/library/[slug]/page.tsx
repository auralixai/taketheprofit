import { BrainCircuit, ShieldAlert, Target, BarChart3, TrendingUp, Zap, ChevronLeft, Calculator, CheckCircle2, History, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a DB or JSON file
const STRATEGIES_DATA: any = {
  "rsi-divergence-exit": {
    title: "RSI Divergence Exit",
    description: "The RSI Divergence Exit strategy is a powerful momentum-based approach used to identify trend exhaustion before a price reversal. By monitoring the Relative Strength Index (RSI) against price action, traders can spot 'hidden' weakness and exit before the majority of the market.",
    winRate: "68%",
    category: "Momentum",
    asset: "Universal (Crypto/Stocks/Forex)",
    logic: [
      "Wait for price to make a Higher High (HH).",
      "Check RSI for a Lower High (LH) at the same time.",
      "Verify bearish divergence on the 1H or 4H timeframe.",
      "Exit position immediately on candle close."
    ],
    psychology: "Prevents 'Greed Bias' by providing a technical reason to exit while the market still looks bullish to the untrained eye.",
    stats: {
      avgProfit: "+12.4%",
      drawdown: "-3.2%",
      volatility: "Medium"
    }
  },
  "atr-trailing-stop": {
    title: "ATR Trailing Stop",
    description: "Average True Range (ATR) exits are the industry standard for volatility-adjusted profit taking. Unlike fixed percentage stops, the ATR exit moves with the market's 'breath', tightening during low volatility and expanding to avoid premature exits during high volatility.",
    winRate: "74%",
    category: "Volatility",
    asset: "Forex / High-Cap Stocks",
    logic: [
      "Calculate 14-period ATR on current timeframe.",
      "Set exit trigger at 2.5x ATR from the current price.",
      "Move the trigger up as price makes new highs (Trailing).",
      "Exit when price touches the ATR boundary."
    ],
    psychology: "Removes the 'Just one more tick' anxiety by automating the exit based on mathematically defined market noise.",
    stats: {
      avgProfit: "+8.7%",
      drawdown: "-1.8%",
      volatility: "Low-High (Adaptive)"
    }
  }
};

export default async function StrategyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const strategy = STRATEGIES_DATA[slug];

  if (!strategy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#00FF66]/30">
      <div className="max-w-4xl mx-auto">
        <Link href="/library" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#00FF66] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Library
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-[10px] font-black tracking-widest uppercase mb-4">
              {strategy.category} Strategy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{strategy.title}</h1>
            <p className="text-gray-400 text-lg leading-relaxed">{strategy.description}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl text-center min-w-[200px]">
             <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">Historical Win Rate</div>
             <div className="text-5xl font-bold text-[#00FF66] tracking-tighter">{strategy.winRate}</div>
             <div className="mt-4 w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#00FF66]" style={{ width: strategy.winRate }}></div>
             </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
           <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Ideal Asset</div>
              <div className="font-bold">{strategy.asset}</div>
           </div>
           <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Avg. Profit Capture</div>
              <div className="font-bold text-[#00FF66]">{strategy.stats.avgProfit}</div>
           </div>
           <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-gray-500 text-[10px] font-black tracking-widest uppercase mb-2">Strategy Volatility</div>
              <div className="font-bold text-amber-500">{strategy.stats.volatility}</div>
           </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid md:grid-cols-2 gap-12">
           <div className="space-y-8">
              <section>
                 <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                   <Target className="text-[#00FF66] w-5 h-5" /> Execution Logic
                 </h2>
                 <ul className="space-y-4">
                    {strategy.logic.map((step: string, i: number) => (
                      <li key={i} className="flex gap-4 items-start text-gray-400 text-sm leading-relaxed">
                         <div className="w-6 h-6 rounded-full bg-white/5 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-[#00FF66] border border-white/10">{i+1}</div>
                         {step}
                      </li>
                    ))}
                 </ul>
              </section>

              <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                 <h3 className="font-bold text-blue-500 flex items-center gap-2 text-sm mb-3">
                   <BrainCircuit className="w-4 h-4" /> Why it works
                 </h3>
                 <p className="text-xs text-gray-400 leading-relaxed italic">
                   {strategy.psychology}
                 </p>
              </div>
           </div>

           <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00FF66]/10 to-transparent border border-[#00FF66]/20 relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">Run this strategy with AI</h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                      Stop manual backtesting. Load this logic into the TakeTheProfit Exit Agent and get real-time signals for your open trades.
                    </p>
                    <button className="w-full py-4 bg-[#00FF66] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all flex items-center justify-center gap-2 group">
                      Load Into Agent <Calculator className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                 <h3 className="font-bold flex items-center gap-2 text-sm mb-4 text-gray-300">
                   <Info className="w-4 h-4" /> pSEO Metadata
                 </h3>
                 <div className="space-y-2">
                    <div className="text-[10px] text-gray-500">TAGS: #ExitStrategy #TradingAI #{strategy.category} #Backtested</div>
                    <div className="text-[10px] text-gray-500">MODIFIED: {new Date().toLocaleDateString()}</div>
                 </div>
              </div>
           </div>
        </div>

        {/* Backtest Section */}
        <div className="mt-20 pt-12 border-t border-white/5 text-center">
           <h2 className="text-2xl font-bold mb-4">Ready for the Premium Edge?</h2>
           <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm">
             Unlock the Premium Signal Dashboard to see real-time performance across 500+ asset pairs using this strategy.
           </p>
           <button className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold transition-all text-sm">
             View Premium Signals
           </button>
        </div>
      </div>
    </div>
  );
}
