import { TrendingUp, Target, ShieldAlert, BarChart3, Zap, BrainCircuit, Globe, LayoutDashboard, Wallet, ChevronRight, CheckCircle2, Clock, Filter, Search } from "lucide-react";
import Link from "next/link";

const RECENT_SIGNALS = [
  { asset: "NVDA", type: "EXIT", price: "$134.20", strategy: "RSI Divergence", time: "2m ago", status: "PROFIT", pnl: "+14.2%" },
  { asset: "TSLA", type: "EXIT", price: "$242.50", strategy: "ATR Trailing Stop", time: "15m ago", status: "PROFIT", pnl: "+8.7%" },
  { asset: "SPY", type: "EXIT", price: "$582.10", strategy: "VWAP Mean Reversion", time: "42m ago", status: "PROFIT", pnl: "+2.1%" },
  { asset: "AAPL", type: "HOLD", price: "$228.45", strategy: "EMA Cross", time: "1h ago", status: "NEUTRAL", pnl: "+5.4%" },
];

export default function SignalsPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#00FF66]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Premium Signals</h1>
            <p className="text-gray-400 max-w-xl">
              Real-time AI-calculated exit signals for high-intent equity and options trades. Stop guessing, start taking profit.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse"></div> LIVE FEED
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Signal Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden">
               <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h2 className="font-bold flex items-center gap-2 text-sm uppercase tracking-widest text-gray-500">
                    <Zap className="w-4 h-4 text-[#00FF66]" /> Recent Activity
                  </h2>
                  <Filter className="w-4 h-4 text-gray-500 cursor-pointer" />
               </div>
               <div className="divide-y divide-white/5">
                  {RECENT_SIGNALS.map((sig, i) => (
                    <div key={i} className="p-6 hover:bg-white/[0.01] transition-colors flex items-center justify-between group">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center font-bold text-sm">
                            {sig.asset}
                          </div>
                          <div>
                             <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-black px-2 py-0.5 rounded ${sig.type === 'EXIT' ? 'bg-[#00FF66]/10 text-[#00FF66]' : 'bg-blue-500/10 text-blue-500'}`}>
                                  {sig.type}
                                </span>
                                <span className="text-sm font-bold">{sig.price}</span>
                             </div>
                             <div className="text-xs text-gray-500">{sig.strategy} • {sig.time}</div>
                          </div>
                       </div>
                       <div className="text-right">
                          <div className={`text-lg font-bold tracking-tighter ${sig.status === 'PROFIT' ? 'text-[#00FF66]' : 'text-gray-400'}`}>
                            {sig.pnl}
                          </div>
                          <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Captured</div>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="p-6 bg-white/[0.02] text-center">
                  <button className="text-xs font-bold text-gray-500 hover:text-white transition-colors">Load More History</button>
               </div>
            </div>
          </div>

          {/* Sidebar / Stats */}
          <div className="space-y-6">
             <div className="p-8 rounded-3xl bg-gradient-to-br from-[#00FF66]/10 to-transparent border border-[#00FF66]/20">
                <h3 className="text-xl font-bold mb-4">Market Watch</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">
                  Our AI is currently monitoring 42 active equity setups. Average win rate across all signals this week: <span className="text-[#00FF66] font-bold">78.4%</span>.
                </p>
                <button className="w-full py-4 bg-[#00FF66] text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all">
                  Get Real-time Alerts
                </button>
             </div>

             <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="font-bold flex items-center gap-2 text-sm mb-4">
                  <TrendingUp className="w-4 h-4 text-blue-500" /> Sector Performance
                </h3>
                <div className="space-y-4">
                   {[
                     { name: "Mega Cap Tech", val: "92%" },
                     { name: "Semiconductors", val: "84%" },
                     { name: "Growth Equity", val: "61%" }
                   ].map(s => (
                     <div key={s.name} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                           <span>{s.name}</span>
                           <span>{s.val} WR</span>
                        </div>
                        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                           <div className="h-full bg-blue-500" style={{ width: s.val }}></div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
