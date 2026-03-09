export const strategies = [
  {
    id: "rsi-divergence",
    title: "RSI Divergence Exit",
    description: "Exit when price makes a higher high but RSI makes a lower high.",
    category: "momentum",
    premium: false,
  },
  {
    id: "atr-trailing-stop",
    title: "ATR Trailing Stop",
    description: "Dynamic exit based on average true range volatility.",
    category: "volatility",
    premium: true,
  },
  {
    id: "bollinger-band-reversal",
    title: "Bollinger Band Reversal",
    description: "Exit at the opposite band touch during high volatility expansion.",
    category: "volatility",
    premium: false,
  },
  {
    id: "macd-histogram-exhaustion",
    title: "MACD Histogram Exhaustion",
    description: "Exit when the MACD histogram slope starts decreasing at extremes.",
    category: "momentum",
    premium: true,
  },
  {
    id: "fibonacci-golden-pocket",
    title: "Fibonacci Golden Pocket",
    description: "Strategic profit-taking at the 0.618 - 0.65 retracement zone.",
    category: "structure",
    premium: false,
  },
  {
    id: "volume-climax-exit",
    title: "Volume Climax Exit",
    description: "Spot 'blow-off' tops by identifying unusual volume spikes at price peaks.",
    category: "momentum",
    premium: true,
  },
  {
    id: "london-close-liquidity",
    title: "London Close Liquidity",
    description: "Exit before the high-volatility window of the London market close.",
    category: "timing",
    premium: false,
  },
  {
    id: "parabolic-sar-flip",
    title: "Parabolic SAR Flip",
    description: "Trailing exit that tightens during rapid price acceleration.",
    category: "volatility",
    premium: true,
  }
];
