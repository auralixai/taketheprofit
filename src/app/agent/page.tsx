import { BrainCircuit, ShieldAlert, Target, BarChart3, TrendingUp, ChevronRight, Calculator, Clock, History } from "lucide-react";

export default function AgentPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#00FF66]/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        
        {/* Left: Input Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <BrainCircuit className="text-[#00FF66] w-6 h-6" />
              <h2 className="text-xl font-bold">Exit Agent Input</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Trading Asset</label>
                <input type="text" placeholder="BTC/USD, AAPL, etc." className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:border-[#00FF66] transition-colors outline-none" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Entry Price</label>
                <input type="number" placeholder="0.00" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:border-[#00FF66] transition-colors outline-none" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Current PnL %</label>
                  <input type="text" placeholder="+12.5%" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:border-[#00FF66] transition-colors outline-none text-[#00FF66]" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Risk/Reward</label>
                  <input type="text" placeholder="1:3" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:border-[#00FF66] transition-colors outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Current Market Sentiment</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-xl p-3 focus:border-[#00FF66] transition-colors outline-none appearance-none">
                  <option>Highly Volatile</option>
                  <option>Stable / Trending</option>
                  <option>Exhaustion Range</option>
                  <option>News Event Pending</option>
                </select>
              </div>

              <button className="w-full py-4 bg-[#00FF66] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all flex items-center justify-center gap-2 group mt-4">
                Calculate Exit Strategy <Calculator className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#00FF66]/5 border border-[#00FF66]/20">
            <h3 className="font-bold flex items-center gap-2 text-sm text-[#00FF66] mb-3">
              <ShieldAlert className="w-4 h-4" /> Psychological Guard
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Based on your entry, the "Greed Zone" starts at +18%. Our AI suggests a partial take-profit (30%) at +14.2% to lock in capital and reduce emotional stress.
            </p>
          </div>
        </div>

        {/* Right: Agent Analysis */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 min-h-[500px] flex flex-col">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">AI Exit Analysis</h1>
                <p className="text-gray-500 text-sm">Real-time market exhaustion & backtest data</p>
              </div>
              <div className="flex gap-2">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div> Live Feed
                </div>
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid md:grid-cols-2 gap-6 flex-1">
              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-gray-500 uppercase">Primary Exit Target</h3>
                  <Target className="w-4 h-4 text-[#00FF66]" />
                </div>
                <div className="text-3xl font-bold tracking-tighter mb-2 text-[#00FF66]">8,432.50</div>
                <div className="text-xs text-gray-400 leading-relaxed">
                  92% probability of resistance at this level based on 4H Fibonacci confluence.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xs font-bold text-gray-500 uppercase">Market Exhaustion</h3>
                  <TrendingUp className="w-4 h-4 text-amber-500" />
                </div>
                <div className="text-3xl font-bold tracking-tighter mb-2 text-amber-500">74 / 100</div>
                <div className="text-xs text-gray-400 leading-relaxed">
                  Momentum slowing. RSI Divergence detected on 1H timeframe. Watch for reversal.
                </div>
              </div>

              <div className="md:col-span-2 p-6 rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-bold text-gray-500 uppercase">Backtested Win Rate for this Exit</h3>
                  <History className="w-4 h-4 text-blue-500" />
                </div>
                <div className="flex items-end gap-1 mb-6">
                  <div className="text-5xl font-bold tracking-tighter text-white">84.2%</div>
                  <div className="text-blue-500 text-sm font-bold mb-1.5">CONFIDENCE</div>
                </div>
                <div className="space-y-3">
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[84.2%] h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    <span>Low Prob</span>
                    <span>High Prob</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
               <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> Updated 2s ago</span>
                  <span className="flex items-center gap-1.5"><BarChart3 className="w-3 h-3" /> Model: TP-v1.4-ProfitEdge</span>
               </div>
               <button className="text-[#00FF66] font-bold flex items-center gap-1 hover:underline">
                 View Historical Log <ChevronRight className="w-3 h-3" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
