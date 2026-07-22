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
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50/50">
      
      {/* LEFT SECTION: Branding, Teal Gradients & Interactive Abstract Illustration */}
      <section className="lg:w-[55%] bg-gradient-to-br from-teal-800 via-teal-900 to-slate-900 text-white p-8 md:p-16 lg:p-24 flex flex-col justify-between relative overflow-hidden shrink-0">
        
        {/* Abstract shapes & grid background overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Branding Header */}
        <div className="relative z-10 text-left mb-12 lg:mb-0">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-teal-400/20 backdrop-blur-md flex items-center justify-center border border-teal-300/30 text-teal-300">
              <School className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-sm uppercase tracking-widest text-teal-300">Super Org Command</span>
          </div>
          
          <div className="space-y-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-teal-900/60 text-teal-200 border border-teal-800/40">
              <Activity className="w-3 h-3 mr-1.5 text-teal-400" />
              Centralized ERP Portal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              School ERP
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-teal-200">
              Centralized Management System
            </p>
          </div>
        </div>

        {/* Abstract Education / Network Illustration */}
        <div className="my-8 lg:my-12 relative z-10 flex items-center justify-center">
          <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative text-left">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest flex items-center">
                <Network className="w-4 h-4 mr-2" /> Live Network Topology
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Simulated topology graphic */}
            <div className="relative h-44 flex items-center justify-center">
              {/* Center HUB */}
              <div className="absolute z-20 h-16 w-16 rounded-full bg-teal-500 flex flex-col items-center justify-center border-4 border-slate-900 shadow-lg text-white">
                <Shield className="w-6 h-6" />
                <span className="text-[7px] font-bold uppercase mt-0.5">HQ HUB</span>
              </div>

              {/* Satellite nodes */}
              {/* Node 1: Mangalore */}
              <div className="absolute top-0 left-6 z-10 p-2.5 bg-white/10 rounded-lg border border-white/20 flex flex-col items-center shadow-md animate-float">
                <span className="text-[10px] font-bold">St. Agnes</span>
                <span className="text-[8px] text-teal-300">Mangalore</span>
              </div>

              {/* Node 2: Bangalore */}
              <div className="absolute bottom-0 right-6 z-10 p-2.5 bg-white/10 rounded-lg border border-white/20 flex flex-col items-center shadow-md animate-float [animation-delay:1.5s]">
                <span className="text-[10px] font-bold">Kristu Jayanti</span>
                <span className="text-[8px] text-teal-300">Bangalore</span>
              </div>

              {/* Node 3: Kundapura */}
              <div className="absolute top-4 right-10 z-10 p-2.5 bg-white/10 rounded-lg border border-white/20 flex flex-col items-center shadow-md animate-float [animation-delay:3s]">
                <span className="text-[10px] font-bold">Sacred Heart</span>
                <span className="text-[8px] text-teal-300">Kundapura</span>
              </div>

              {/* Node 4: Mysore */}
              <div className="absolute bottom-4 left-10 z-10 p-2.5 bg-white/10 rounded-lg border border-white/20 flex flex-col items-center shadow-md animate-float [animation-delay:4.5s]">
                <span className="text-[10px] font-bold">Little Flower</span>
                <span className="text-[8px] text-teal-300">Mysore</span>
              </div>

              {/* Connecting lines via standard SVG */}
              <svg className="absolute inset-0 w-full h-full text-white/15" fill="none">
                {/* Lines radiating from center (160, 88) */}
                <line x1="200" y1="88" x2="80" y2="35" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4" />
                <line x1="200" y1="88" x2="320" y2="140" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4" />
                <line x1="200" y1="88" x2="310" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4" />
                <line x1="200" y1="88" x2="90" y2="135" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4" />
              </svg>
            </div>

            {/* Quick floating stat overlays inside graphic container */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-teal-200/80">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-teal-400" />
                <strong>12,400+</strong> Enrolled Students
              </span>
              <span><strong>4 / 4</strong> Online</span>
            </div>
          </div>
        </div>

        {/* Bottom Platform Description */}
        <div className="relative z-10 text-left max-w-xl">
          <h3 className="text-lg font-bold text-white mb-2">Centralized Command Workspace</h3>
          <p className="text-sm text-teal-100/70 leading-relaxed">
            The Super Admin platform grants organization leaders complete monitoring capabilities across all regional school hubs. 
            Review performance parameters, administer user accounts, enforce security protocols, and control billing options from a single console.
          </p>
        </div>
      </section>

      {/* RIGHT SECTION: Interactive Login Panel & Read-Only Branch Directory */}
      <section className="lg:w-[45%] bg-slate-50/40 p-6 md:p-12 lg:p-16 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-md w-full mx-auto space-y-8 py-8">
          
          {/* Main interactive login card */}
          <SuperAdminLogin onLoginSuccess={handleLoginSuccess} />

          {/* Separation OR Divider */}
          <div className="relative flex items-center justify-center my-6">
            <div className="border-t border-gray-200 w-full" />
            <span className="absolute bg-[#fafbfe] px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
              Or
            </span>
          </div>

          {/* Secondary Action: Read-Only Branches */}
          <div className="space-y-4">
            <div className="text-left">
              <div className="flex items-center space-x-2 text-primary-700">
                <Network className="w-5 h-5 text-primary-700" />
                <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">View Branches</h3>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Explore all registered schools and branches under this organization.
              </p>
            </div>

            {/* Grid of branches */}
            <div className="space-y-3.5">
              {mockBranches.map((branch) => (
                <BranchCard
                  key={branch.id}
                  branch={branch}
                  onClick={() => handleBranchClick(branch.id)}
                />
              ))}
            </div>

            <div className="text-center pt-2">
              <span className="inline-flex items-center text-xs font-bold text-teal-700/80 hover:text-teal-800 cursor-pointer select-none group">
                Authorized super admin credentials required to modify branch setups
                <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
