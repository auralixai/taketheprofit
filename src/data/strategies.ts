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
  }
];
