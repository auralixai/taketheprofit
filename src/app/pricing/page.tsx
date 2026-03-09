import { CheckCircle2, Zap, ShieldAlert, Target, BrainCircuit, ChevronRight, BarChart3, TrendingUp, Calculator } from "lucide-react";
import Link from "next/link";

const PLANS = [
  {
    name: "Free",
    price: "0",
    description: "For casual traders exploring AI exits.",
    features: [
      "Access to Basic Strategy Library",
      "Limited AI Exit Backtests",
      "Manual Asset Tracking",
      "Community Support"
    ],
    cta: "Start Free",
    premium: false
  },
  {
    name: "Premium",
    price: "49",
    description: "The ultimate edge for professional traders.",
    features: [
      "Full Strategy Library Access",
      "Unlimited AI Agent Queries",
      "Real-time Signal Dashboard",
      "Psychological Guardrails",
      "Options & Equity Specialized Algos",
      "Priority API Access"
    ],
    cta: "Go Premium",
    premium: true
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white pt-32 px-4 pb-20 selection:bg-[#00FF66]/30">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Simple, Results-Driven Pricing.
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Choose the plan that fits your trading volume. All plans include our core AI psychological guardrails.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-10 rounded-3xl flex flex-col text-left transition-all ${
                plan.premium 
                ? 'bg-white/[0.03] border-2 border-[#00FF66] shadow-[0_0_40px_rgba(0,255,102,0.1)] relative' 
                : 'bg-white/[0.02] border border-white/5'
              }`}
            >
              {plan.premium && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00FF66] text-black text-[10px] font-black tracking-widest px-4 py-1.5 rounded-full uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold tracking-tighter">${plan.price}</span>
                  <span className="text-gray-500 text-lg">/mo</span>
                </div>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.premium ? 'text-[#00FF66]' : 'text-gray-600'}`} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
                plan.premium 
                ? 'bg-[#00FF66] text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]' 
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
                {plan.cta} <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Teaser */}
        <div className="mt-24 pt-24 border-t border-white/5">
           <div className="grid md:grid-cols-3 gap-12 text-left">
              <div>
                 <h4 className="font-bold mb-3 flex items-center gap-2">
                    <BrainCircuit className="w-4 h-4 text-[#00FF66]" /> Can I cancel?
                 </h4>
                 <p className="text-xs text-gray-500 leading-relaxed">Yes, cancel anytime from your dashboard. No hidden fees or long-term contracts.</p>
              </div>
              <div>
                 <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" /> What are Signals?
                 </h4>
                 <p className="text-xs text-gray-500 leading-relaxed">Real-time alerts sent when our AI detects a high-probability exit point for tracked assets.</p>
              </div>
              <div>
                 <h4 className="font-bold mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-500" /> Is my data safe?
                 </h4>
                 <p className="text-xs text-gray-500 leading-relaxed">We never execute trades for you. We only provide the intelligence for you to take profit.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
