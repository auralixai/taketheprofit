"use client";
import React from 'react';
import Link from 'next/link';
import { TrendingUp, Menu, X, BrainCircuit } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0B0D]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-[#00FF66] rounded flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,255,102,0.4)] transition-all">
            <TrendingUp className="text-black w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#00FF66] transition-colors">TakeTheProfit</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/library" className="hover:text-[#00FF66] transition-colors">Library</Link>
          <Link href="/signals" className="hover:text-[#00FF66] transition-colors">Signals</Link>
          <Link href="/pricing" className="hover:text-[#00FF66] transition-colors">Pricing</Link>
          <Link href="/agent" className="bg-[#00FF66]/10 px-4 py-2 rounded-lg border border-[#00FF66]/20 text-[#00FF66] hover:bg-[#00FF66]/20 transition-all font-bold flex items-center gap-2">
            <BrainCircuit className="w-4 h-4" /> Launch Agent
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0B0D] border-b border-white/5 px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          <Link href="/library" className="block text-gray-400 font-medium hover:text-[#00FF66]">Library</Link>
          <Link href="/signals" className="block text-gray-400 font-medium hover:text-[#00FF66]">Signals</Link>
          <Link href="/pricing" className="block text-gray-400 font-medium hover:text-[#00FF66]">Pricing</Link>
          <Link href="/agent" className="block bg-[#00FF66] text-black text-center font-bold py-3 rounded-xl">Launch Agent</Link>
        </div>
      )}
    </nav>
  );
}
