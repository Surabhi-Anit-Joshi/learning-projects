import React from 'react';
import { useNavigate } from 'react-router-dom';
import { School, Activity, Shield, Users, Network, ArrowRight } from 'lucide-react';
import { SuperAdminLogin } from '../components/SuperAdminLogin';
import { BranchCard } from '../components/BranchCard';
import { mockBranches } from '../data/branches';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Navigate to the Super Admin Dashboard
    navigate('/dashboard');
  };

  const handleBranchClick = (branchId: string) => {
    // Navigate to the Branch details placeholder page
    navigate(`/branch/${branchId}`);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50">
      
      {/* LEFT SECTION: Premium Branding with Modern Gradient & Glassmorphism */}
      <section className="lg:w-[55%] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 text-white p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden shrink-0">
        
        {/* Subtle gradient mesh background */}
        <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-blue-500/10 via-transparent to-slate-600/20 pointer-events-none" />
        <div className="absolute -left-32 top-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-32 bottom-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Fine grid overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_0.5px,transparent_0.5px)] [background-size:40px_40px] pointer-events-none" />

        {/* Top Branding Header */}
        <div className="relative z-10 text-left mb-12 lg:mb-0">
          <div className="flex items-center space-x-3 mb-8">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400/30 to-blue-400/20 backdrop-blur-xl flex items-center justify-center border border-cyan-300/40 text-cyan-300 shadow-lg">
              <School className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xs uppercase tracking-widest text-cyan-300">SYS.CORE</span>
              <span className="font-light text-xs uppercase tracking-widest text-blue-200/60">On-Line</span>
            </div>
          </div>
          
          <div className="space-y-5">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-blue-900/60 to-cyan-900/40 text-cyan-200 border border-cyan-400/20 backdrop-blur-md">
              <Activity className="w-3.5 h-3.5 mr-2 text-cyan-400" />
              Unified ERP Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-tight">
              School ERP
            </h1>
            <p className="text-lg md:text-xl font-light text-blue-100 tracking-wide">
              Enterprise Command Center
            </p>
          </div>
        </div>

        {/* Premium Network Topology Card with Glassmorphism */}
        <div className="my-8 lg:my-12 relative z-10 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/8 border border-white/15 rounded-3xl p-7 md:p-9 backdrop-blur-xl shadow-2xl relative text-left">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 flex items-center justify-between mb-6 pb-5 border-b border-white/10">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest flex items-center">
                <Network className="w-4 h-4 mr-2.5" /> Live Network Topology
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                <span className="text-[10px] font-semibold text-emerald-300">Active</span>
              </div>
            </div>

            {/* Premium Topology Visualization */}
            <div className="relative h-48 flex items-center justify-center">
              {/* Center Premium HUB */}
              <div className="absolute z-20 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex flex-col items-center justify-center border-2 border-white/20 shadow-2xl shadow-cyan-500/30 text-white backdrop-blur-sm">
                <Shield className="w-6 h-6" />
                <span className="text-[8px] font-black uppercase mt-1 tracking-wide">HQ Hub</span>
              </div>

              {/* Premium Satellite Nodes */}
              {/* Node 1: Mangalore */}
              <div className="absolute top-0 left-4 z-10 p-3 bg-white/12 rounded-xl border border-white/20 flex flex-col items-center shadow-lg backdrop-blur-md animate-float hover:bg-white/16 transition-all">
                <span className="text-[10px] font-bold text-white">St. Agnes</span>
                <span className="text-[8px] text-cyan-300 font-medium">Mangalore</span>
              </div>

              {/* Node 2: Bangalore */}
              <div className="absolute bottom-0 right-4 z-10 p-3 bg-white/12 rounded-xl border border-white/20 flex flex-col items-center shadow-lg backdrop-blur-md animate-float [animation-delay:1.5s] hover:bg-white/16 transition-all">
                <span className="text-[10px] font-bold text-white">Kristu Jayanti</span>
                <span className="text-[8px] text-cyan-300 font-medium">Bangalore</span>
              </div>

              {/* Node 3: Kundapura */}
              <div className="absolute top-3 right-8 z-10 p-3 bg-white/12 rounded-xl border border-white/20 flex flex-col items-center shadow-lg backdrop-blur-md animate-float [animation-delay:3s] hover:bg-white/16 transition-all">
                <span className="text-[10px] font-bold text-white">Sacred Heart</span>
                <span className="text-[8px] text-cyan-300 font-medium">Kundapura</span>
              </div>

              {/* Node 4: Mysore */}
              <div className="absolute bottom-3 left-8 z-10 p-3 bg-white/12 rounded-xl border border-white/20 flex flex-col items-center shadow-lg backdrop-blur-md animate-float [animation-delay:4.5s] hover:bg-white/16 transition-all">
                <span className="text-[10px] font-bold text-white">Little Flower</span>
                <span className="text-[8px] text-cyan-300 font-medium">Mysore</span>
              </div>

              {/* Modern Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" fill="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34,211,238,0.3)" />
                    <stop offset="100%" stopColor="rgba(6,182,212,0.1)" />
                  </linearGradient>
                </defs>
                <line x1="200" y1="96" x2="78" y2="40" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                <line x1="200" y1="96" x2="328" y2="144" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                <line x1="200" y1="96" x2="318" y2="45" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
                <line x1="200" y1="96" x2="98" y2="143" stroke="url(#lineGradient)" strokeWidth="1.5" opacity="0.6" />
              </svg>
            </div>

            {/* Stats Footer */}
            <div className="relative z-10 mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-cyan-200/90">
              <span className="flex items-center gap-2 font-semibold">
                <Users className="w-4 h-4 text-cyan-400" />
                <span><strong>12,400+</strong> Students</span>
              </span>
              <span className="font-semibold text-emerald-400"><strong>4 / 4</strong> Online</span>
            </div>
          </div>
        </div>

        {/* Bottom Premium Description */}
        <div className="relative z-10 text-left max-w-xl">
          <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Centralized Command Workspace</h3>
          <p className="text-sm text-blue-100/75 leading-relaxed font-light">
            The unified Super Admin interface delivers comprehensive oversight across all regional school operations. 
            Monitor key metrics, manage user access, enforce security standards, and optimize institutional performance from a single command center.
          </p>
        </div>
      </section>

      {/* RIGHT SECTION: Modern Login & Branch Directory */}
      <section className="lg:w-[45%] bg-gradient-to-b from-slate-50 to-blue-50/30 p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-md w-full mx-auto space-y-8 py-8">
          
          {/* Main Login Card */}
          <SuperAdminLogin onLoginSuccess={handleLoginSuccess} />

          {/* Premium Divider */}
          <div className="relative flex items-center justify-center my-8">
            <div className="border-t border-gray-300/40 w-full" />
            <span className="absolute bg-gradient-to-r from-slate-50 to-blue-50/30 px-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
              Or Browse
            </span>
          </div>

          {/* Branches Section */}
          <div className="space-y-5">
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-400/10 flex items-center justify-center border border-cyan-300/20">
                  <Network className="w-4.5 h-4.5 text-blue-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">View Branches</h3>
              </div>
              <p className="text-xs text-gray-500 mt-2 font-light">
                Explore all registered schools and branches.
              </p>
            </div>

            {/* Branch Cards Grid */}
            <div className="space-y-3">
              {mockBranches.map((branch) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  onClick={() => handleBranchClick(branch.id)}
                />
              ))}
            </div>

            {/* Access Notice */}
            <div className="text-center pt-3">
              <span className="inline-flex items-center text-xs font-medium text-gray-600 hover:text-blue-700 cursor-pointer select-none group transition-colors">
                Super admin credentials required
                <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
