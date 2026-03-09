import { Target, Search, Filter, ShieldAlert, BarChart3, TrendingUp, Zap, ChevronRight, Calculator, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";
import { strategies } from "@/data/strategies";
import { categories } from "@/data/categories";

const IconMap: any = {
  Target,
  TrendingUp,
  Zap,
  Clock,
  ShieldAlert,
  BarChart3
};

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-24 px-4 pb-12 selection:bg-[#00FF66]/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">Strategy Library</h1>
            <p className="text-gray-400 max-w-xl">
              Access AI-powered exit strategies for Stocks, Options, Equity, and more. Backtested and ready to be loaded into your Agent.
            </p>
          </div>
          <div className="relative group max-w-sm w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#00FF66] transition-colors" />
            <input 
              type="text" 
              placeholder="Search strategies..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:border-[#00FF66] transition-colors outline-none"
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 scrollbar-hide">
          <button className="px-5 py-2 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-xs font-bold whitespace-nowrap">
            All Strategies
          </button>
          {categories.map((cat) => (
            <button key={cat.id} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-colors whitespace-nowrap">
              {cat.name}
            </button>
          ))}
        </div>

        {/* Strategy Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strat, i) => {
            const categoryObj = categories.find(c => c.id === strat.category);
            const IconComponent = IconMap[categoryObj?.icon || 'Target'];
            
            return (
              <Link 
                key={i} 
                href={`/library/${strat.id}`}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00FF66]/30 transition-all flex flex-col group relative overflow-hidden"
              >
                {strat.premium && (
                  <div className="absolute top-0 right-0 p-2">
                    <div className="bg-[#00FF66]/10 border border-[#00FF66]/20 text-[#00FF66] text-[8px] font-black tracking-widest px-2 py-0.5 rounded uppercase">Premium</div>
                  </div>
                )}
                
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-[#00FF66] w-5 h-5" />
                </div>

                <h3 className="font-bold mb-2 group-hover:text-[#00FF66] transition-colors">{strat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-1">{strat.description}</p>

                <div className="space-y-4">
                   <div className="w-full py-2.5 bg-white/5 group-hover:bg-[#00FF66] group-hover:text-black transition-all rounded-lg text-xs font-bold flex items-center justify-center gap-2">
                     {strat.premium ? "Unlock Premium" : "View Strategy"} <ChevronRight className="w-3 h-3" />
                   </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* pSEO Teaser */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#00FF66]/5 to-transparent border border-[#00FF66]/10">
           <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Calculator className="text-[#00FF66]" /> Scaling Exit Library for pSEO
              </h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                This library is designed for massive organic growth. Each asset category—Stocks, Options, Equities—serves as a primary landing node for high-intent professional traders.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Stocks", "Options", "Equities", "Day Trading"].map((f) => (
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
