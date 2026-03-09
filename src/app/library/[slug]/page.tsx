import { strategies } from "@/data/strategies";

export async function generateStaticParams() {
  return strategies.map((strat) => ({
    slug: strat.id,
  }));
}

import { BrainCircuit, ShieldAlert, Target, BarChart3, TrendingUp, Zap, ChevronRight, Calculator, CheckCircle2, History, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Full data mapping for all expanded strategies
const STRATEGIES_DATA: any = {
  "rsi-divergence": {
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
    stats: { avgProfit: "+12.4%", drawdown: "-3.2%", volatility: "Medium" }
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
    stats: { avgProfit: "+8.7%", drawdown: "-1.8%", volatility: "Low-High (Adaptive)" }
  },
  "bollinger-band-reversal": {
    title: "Bollinger Band Reversal",
    description: "This strategy exits a position when price tags the outer Bollinger Bands during extreme volatility expansion. It assumes a return to the mean (the 20-period SMA) after a rapid expansion.",
    winRate: "64%",
    category: "Volatility",
    asset: "Commodities / Stocks",
    logic: [
      "Identify a price break outside the Upper Bollinger Band (20, 2).",
      "Monitor for a reversal candle (Pin bar or engulfing).",
      "Exit 100% of the position when price closes back inside the band.",
      "Optional: Scale out 50% on the initial touch."
    ],
    psychology: "Provides a rigid exit rule during 'scary' high-volatility spikes, capturing the maximum move before the inevitable pullback.",
    stats: { avgProfit: "+15.2%", drawdown: "-4.5%", volatility: "High" }
  },
  "macd-histogram-exhaustion": {
    title: "MACD Histogram Exhaustion",
    description: "MACD Exhaustion exits focus on the 'second derivative' of momentum. When the histogram bars start shrinking, the momentum is fading—even if price is still climbing.",
    winRate: "71%",
    category: "Momentum",
    asset: "Universal / Trend-focused",
    logic: [
      "Wait for MACD Histogram to reach a recent 'Peak' height.",
      "Watch for the first bar that is smaller than the previous one.",
      "Confirm with volume divergence if possible.",
      "Exit on the first sign of histogram compression."
    ],
    psychology: "Helps traders 'Take The Profit' while the trend is still technically intact, avoiding the deep retracement that follows exhaustion.",
    stats: { avgProfit: "+9.1%", drawdown: "-2.1%", volatility: "Low" }
  },
  "fibonacci-golden-pocket": {
    title: "Fibonacci Golden Pocket",
    description: "The 0.618 - 0.65 area is mathematically proven to be the most reactive zone in financial markets. This strategy automates profit taking at this structural 'magnet'.",
    winRate: "79%",
    category: "Structure",
    asset: "Crypto / Major FX Pairs",
    logic: [
      "Draw Fib Retracement from recent swing high to swing low.",
      "Mark the 'Golden Pocket' (0.618 and 0.65 levels).",
      "Set Take Profit orders slightly below the 0.618 line.",
      "Monitor for absorption/rejection at this level."
    ],
    psychology: "Leverages the self-fulfilling prophecy of institutional algorithms, placing your exits exactly where the 'big money' is selling.",
    stats: { avgProfit: "+18.4%", drawdown: "-1.5%", volatility: "Medium" }
  },
  "volume-climax-exit": {
    title: "Volume Climax Exit",
    description: "Volume precedes price. A sudden 'vertical' spike in volume after a prolonged trend often indicates the final retail FOMO entry—making it the perfect exit for smart money.",
    winRate: "62%",
    category: "Momentum",
    asset: "Low-Cap / Growth Stocks",
    logic: [
      "Identify volume that is 3x or 4x higher than the 20-day average.",
      "Confirm price is at a parabolic angle (>45 degrees).",
      "Exit 75% of the position into the liquidity of the volume spike.",
      "Move the remainder to a breakeven stop."
    ],
    psychology: "Teaches you to sell when everyone else is buying—the hardest but most profitable skill in trading.",
    stats: { avgProfit: "+28.1%", drawdown: "-7.4%", volatility: "Very High" }
  },
  "london-close-liquidity": {
    title: "London Close Liquidity",
    description: "Market dynamics shift significantly when the London session closes (around 11:30 AM EST). This time-based exit avoids the 'whipsaw' of liquidity drying up.",
    winRate: "58%",
    category: "Timing",
    asset: "Forex (EUR/USD, GBP/USD)",
    logic: [
      "Identify open trades entered during London or NY session.",
      "Set a hard exit alert for 11:15 AM EST.",
      "Close positions regardless of PnL if target hasn't been hit.",
      "Prevents holding through the low-liquidity afternoon lull."
    ],
    psychology: "Reduces 'Overtrading' and the risk of turning a winner into a loser during the unpredictable post-London hours.",
    stats: { avgProfit: "+4.2%", drawdown: "-0.8%", volatility: "Low" }
  },
  "parabolic-sar-flip": {
    title: "Parabolic SAR Flip",
    description: "The SAR (Stop and Reverse) is a dynamic trailing indicator. This strategy is best used in strong trending markets where you want to ride the wave until the very end.",
    winRate: "66%",
    category: "Volatility",
    asset: "Major Indices (NAS100, SPX)",
    logic: [
      "Enable Parabolic SAR indicator (0.02, 0.2).",
      "Ensure the dots are below the price (in an uptrend).",
      "Keep the trade open as long as the dots remain below.",
      "Exit the second a dot appears ABOVE the current price candle."
    ],
    psychology: "Provides a purely mechanical exit, silencing the 'hope' of a bounce when the trend has clearly flipped.",
    stats: { avgProfit: "+11.8%", drawdown: "-2.9%", volatility: "Medium-High" }
  },
  "moving-average-cross-swing": {
    title: "Moving Average Cross Swing",
    description: "The 9-21 EMA cross is a classic swing trading exit. It captures the bulk of a multi-day move while exiting before a significant trend reversal.",
    winRate: "65%",
    category: "Equity",
    asset: "Blue-chip Stocks / Indices",
    logic: [
      "Wait for 9 EMA to cross below the 21 EMA.",
      "Identify the first candle close below the cross level.",
      "Exit 100% on the following candle open.",
      "Wait for a new golden cross to re-enter."
    ],
    psychology: "Removes the guesswork of trend following by using an objective crossing signal.",
    stats: { avgProfit: "+6.4%", drawdown: "-1.5%", volatility: "Low" }
  },
  "earnings-run-up-exit": {
    title: "Earnings Run-up Exit",
    description: "Avoid the volatility of an earnings report by selling into the anticipated price run-up 24 to 48 hours before the announcement.",
    winRate: "72%",
    category: "Stocks",
    asset: "Tech / Mega-Cap Growth",
    logic: [
      "Identify upcoming earnings date.",
      "Calculate 5-day average volume during the run-up.",
      "Set an exit 48 hours prior to market close of the earnings day.",
      "Profit from the anticipation, not the report itself."
    ],
    psychology: "Prevents gambling on binary outcomes and locks in consistent run-up gains.",
    stats: { avgProfit: "+4.1%", drawdown: "0% (No post-earnings gap)", volatility: "High (Run-up only)" }
  },
  "options-delta-target": {
    title: "Options Delta Target",
    description: "Delta-based exits are the most precise way to manage risk in options trading. As your contract moves deeper in-the-money (ITM), the delta increase signals potential plateauing gamma.",
    winRate: "61%",
    category: "Options",
    asset: "Calls / Puts (Monthly Exp.)",
    logic: [
      "Monitor option Delta in your trading platform.",
      "Set an exit target when Delta hits 0.75 or 0.80.",
      "Scale out 50% at Delta 0.70.",
      "Close the full position when Delta hits the 0.80 threshold."
    ],
    psychology: "Ensures you are taking profit when the option's value is behaving like equity—minimizing time decay risk.",
    stats: { avgProfit: "+45.0%", drawdown: "-15.0%", volatility: "High" }
  },
  "vwap-mean-reversion": {
    title: "VWAP Mean Reversion",
    description: "For day traders, the VWAP is the 'true price'. When price deviates significantly, it invariably returns to the mean.",
    winRate: "69%",
    category: "Day Trading",
    asset: "Mid-Cap Equities (Intraday)",
    logic: [
      "Identify price 2 Standard Deviations from VWAP.",
      "Watch for volume divergence on the 5-minute chart.",
      "Exit on the first touch of the Upper/Lower Deviation Band.",
      "Re-enter only on a VWAP cross."
    ],
    psychology: "Keeps day traders anchored to volume-weighted realities, preventing 'chasing' in high-deviation zones.",
    stats: { avgProfit: "+2.8%", drawdown: "-0.5%", volatility: "Intraday" }
  },
  "long-term-secular-trend-exit": {
    title: "Long Term Secular Trend Exit",
    description: "Designed for the 'Buy and Hold' investor who needs a systematic way to protect wealth during bear markets.",
    winRate: "81%",
    category: "Long-Term",
    asset: "ETFs / Retirement Portfolios",
    logic: [
      "Enable the 200-day Simple Moving Average (SMA).",
      "Monitor monthly candle closes relative to the 200 SMA.",
      "Exit 100% on a monthly close below the 200 SMA.",
      "Re-allocate to cash or hedges until price breaks back above."
    ],
    psychology: "Protects multi-year wealth by cutting exposure only during confirmed long-term trend shifts.",
    stats: { avgProfit: "+120.0% (Cycle)", drawdown: "-5.0% (SMA delay)", volatility: "Low" }
  },
  "gap-fill-exhaustion": {
    title: "Gap Fill Exhaustion",
    description: "Markets hate gaps. This strategy takes advantage of the 'magnet' effect of old gaps and exits exactly as the hole is filled.",
    winRate: "76%",
    category: "Equity",
    asset: "Large Cap (Pre-market Gaps)",
    logic: [
      "Identify a price gap on the daily chart.",
      "Draw lines at the gap high and gap low.",
      "Exit immediately when price touches the opposing gap boundary.",
      "Anticipate a reversal or consolidation at this fill point."
    ],
    psychology: "Capitalizes on structural market traps, exiting while momentum is high but the structural gap is closed.",
    stats: { avgProfit: "+5.3%", drawdown: "-1.1%", volatility: "Medium" }
  },
  "volatility-contraction-breakout-exit": {
    title: "Volatility Contraction Breakout Exit",
    description: "Catch the explosion after the squeeze. This strategy exits when the expansion hits historical extremes.",
    winRate: "67%",
    category: "Swinging",
    asset: "High-Growth / Momentum Stocks",
    logic: [
      "Identify a period of tight Bollinger Band Width.",
      "Wait for a breakout on high volume.",
      "Monitor the 'Expansion' of the bands.",
      "Exit when the Band Width starts to contract from its peak."
    ],
    psychology: "Rides the breakout volatility to its max, exiting when the 'squeeze juice' has been fully squeezed out.",
    stats: { avgProfit: "+18.2%", drawdown: "-3.9%", volatility: "High" }
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
          <div className="flex-1">
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
              <div className="font-bold text-sm">{strategy.asset}</div>
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
                    <div className="text-[10px] text-gray-500 uppercase">TAGS: #ExitStrategy #TradingAI #{strategy.category} #Backtested</div>
                    <div className="text-[10px] text-gray-500 uppercase">MODIFIED: {new Date().toLocaleDateString()}</div>
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
