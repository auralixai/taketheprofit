import { Target, Search, Filter, ShieldAlert, BarChart3, TrendingUp, Zap, ChevronRight, Calculator, CheckCircle2, LayoutDashboard, FileText, Settings, Users, MessageSquare, Database, Plus, Edit3, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0A0B0D] text-white flex selection:bg-[#00FF66]/30">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-[#0D0E10] flex flex-col pt-24">
        <div className="px-6 mb-8">
          <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase">Management</div>
        </div>
        <nav className="flex-1 space-y-1 px-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-[#00FF66]/10 text-[#00FF66] rounded-xl text-sm font-bold transition-all">
            <LayoutDashboard className="w-4 h-4" /> Overview
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-all group">
            <FileText className="w-4 h-4" /> Pages <span className="ml-auto bg-white/5 px-2 py-0.5 rounded text-[10px]">12</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-all group">
            <Database className="w-4 h-4" /> Strategies <span className="ml-auto bg-white/5 px-2 py-0.5 rounded text-[10px]">42</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-all group">
            <Users className="w-4 h-4" /> Users
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-all group">
            <MessageSquare className="w-4 h-4" /> Signals
          </button>
          <div className="pt-8 pb-4 px-2">
             <div className="text-[10px] font-black tracking-widest text-gray-500 uppercase">System</div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl text-sm font-medium transition-all group">
            <Settings className="w-4 h-4" /> Global Settings
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-24 px-8 pb-12 overflow-y-auto">
        <header className="flex items-center justify-between mb-12 pb-8 border-b border-white/5">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Admin Console</h1>
            <p className="text-gray-500 text-sm">Content management & pSEO engine controls</p>
          </div>
          <button className="flex items-center gap-2 bg-[#00FF66] text-black font-bold px-6 py-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,102,0.3)] transition-all">
            <Plus className="w-4 h-4" /> New Page
          </button>
        </header>

        {/* Content Table Scaffolding */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Strategy Pages</h2>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10 text-xs font-bold text-gray-400 cursor-pointer hover:bg-white/10">
                   <Filter className="w-3 h-3" /> Filter: All Markets
                 </div>
              </div>
           </div>

           <div className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                       <th className="px-6 py-4 text-[10px] font-black tracking-widest text-gray-500 uppercase">Strategy Name</th>
                       <th className="px-6 py-4 text-[10px] font-black tracking-widest text-gray-500 uppercase">Type</th>
                       <th className="px-6 py-4 text-[10px] font-black tracking-widest text-gray-500 uppercase">Status</th>
                       <th className="px-6 py-4 text-[10px] font-black tracking-widest text-gray-500 uppercase">Created</th>
                       <th className="px-6 py-4 text-[10px] font-black tracking-widest text-gray-500 uppercase text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {[
                      { name: "RSI Exhaustion Exit [BTC]", type: "Momentum", status: "Published", date: "Mar 09, 2026" },
                      { name: "Volatility Bands V3", type: "Volatility", status: "Draft", date: "Mar 08, 2026" },
                      { name: "Fibonacci 2.618 Target", type: "Structure", status: "Published", date: "Mar 05, 2026" },
                      { name: "London Close Liquidity", type: "Timing", status: "Published", date: "Feb 28, 2026" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-6 py-5 font-bold text-sm">{row.name}</td>
                        <td className="px-6 py-5 text-gray-400 text-xs">{row.type}</td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase ${row.status === "Published" ? "bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/20" : "bg-white/5 text-gray-500 border border-white/10"}`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-gray-500 text-xs">{row.date}</td>
                        <td className="px-6 py-5">
                          <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                             <Edit3 className="w-4 h-4 text-gray-400 hover:text-[#00FF66] cursor-pointer" />
                             <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500 cursor-pointer" />
                          </div>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
           
           <div className="pt-6 flex justify-between items-center text-xs text-gray-500">
              <p>Showing 4 of 42 strategies</p>
              <div className="flex gap-2">
                 <button className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 font-bold transition-all">Previous</button>
                 <button className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 font-bold transition-all">Next</button>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
