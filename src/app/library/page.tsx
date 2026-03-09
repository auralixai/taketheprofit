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

        {/* Call to Action (Replaced Follow Section) */}
        <div className="mt-20 p-10 md:p-16 rounded-[2.5rem] bg-[#00FF66] text-black relative overflow-hidden shadow-[0_0_50px_rgba(0,255,102,0.2)]">
           <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                 <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
                    READY TO TAKE<br />THE PROFIT?
                 </h2>
                 <p className="text-black/70 font-bold text-lg leading-tight">
                    Join 5,000+ traders using AI to eliminate greed and master their exits.
                 </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                 <Link href="/pricing" className="px-10 py-5 bg-black text-white font-black rounded-2xl hover:bg-black/80 transition-all text-center flex items-center justify-center gap-3 group">
                    GET STARTED NOW <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </Link>
                 <Link href="/agent" className="px-10 py-5 bg-transparent border-2 border-black text-black font-black rounded-2xl hover:bg-black/5 transition-all text-center">
                    LAUNCH FREE AGENT
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
