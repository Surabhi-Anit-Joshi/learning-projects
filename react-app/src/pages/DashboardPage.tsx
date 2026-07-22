import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Activity,
  AlertCircle,
  CheckCircle,
  GraduationCap,
  LogOut,
  Power,
  RefreshCw,
  Search,
  Settings,
  ShieldAlert,
  Sliders,
  UserCheck,
  Users
} from 'lucide-react';
import { mockBranches } from '../data/branches';
import type { Branch } from '../data/branches';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';


export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [branches, setBranches] = useState<Branch[]>(mockBranches);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'branches' | 'monitoring' | 'logs'>('branches');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [logs, setLogs] = useState<Array<{ id: string; time: string; msg: string; type: 'info' | 'success' | 'warn' }>>([
    { id: '1', time: '12:05 PM', msg: 'Super Admin logged in from Bangalore, Karnataka', type: 'info' },
    { id: '2', time: '11:42 AM', msg: 'St. Agnes School: Secondary database sync completed successfully', type: 'success' },
    { id: '3', time: '10:15 AM', msg: 'Kristu Jayanti School: Exceeded 95% attendance milestone', type: 'success' },
    { id: '4', time: '09:00 AM', msg: 'Sacred Heart School: Initiated automated backup sequence', type: 'info' },
  ]);

  // Log out handler
  const handleLogout = () => {
    if (confirm('Are you sure you want to log out of the Super Admin workspace?')) {
      navigate('/');
    }
  };

  // Toggle active/inactive status
  const handleToggleStatus = (branchId: string) => {
    const updatedBranches: Branch[] = branches.map((b) => {
      if (b.id === branchId) {
        const nextStatus: 'active' | 'inactive' = b.status === 'active' ? 'inactive' : 'active';
        
        // Add log entry
        const newLog = {
          id: Date.now().toString(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          msg: `${b.name} state set to ${nextStatus.toUpperCase()} by Super Admin`,
          type: (nextStatus === 'active' ? 'success' : 'warn') as 'success' | 'warn',
        };
        setLogs([newLog, ...logs]);

        return { ...b, status: nextStatus };
      }
      return b;
    });
    setBranches(updatedBranches);
  };


  // Dynamic statistics calculations
  const totalBranches = branches.length;
  const activeBranches = branches.filter((b) => b.status === 'active').length;
  const totalStudents = branches.reduce((acc, curr) => acc + (curr.status === 'active' ? curr.students : 0), 0);
  const totalTeachers = branches.reduce((acc, curr) => acc + (curr.status === 'active' ? curr.teachers : 0), 0);

  // Filtering
  const filteredBranches = branches.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.code.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus =
      statusFilter === 'all' || b.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col text-left">
      {/* Central Admin Header Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-lg bg-teal-700 flex items-center justify-center text-white shadow-md shadow-teal-700/20">
                <span className="font-extrabold text-sm tracking-tighter">S</span>
              </div>
              <div>
                <h1 className="text-base font-extrabold text-slate-900 tracking-tight leading-none">School ERP</h1>
                <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider mt-1 block">Super Admin Command Center</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs font-bold text-slate-800">Super Administrator</span>
                <span className="text-[10px] font-semibold text-slate-400">admin@schoolerp.com</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-slate-600 hover:text-red-600 hover:bg-red-50"
                leftIcon={<LogOut className="w-4 h-4" />}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace layout */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Dynamic Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-slate-200/80 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Managed Branches</p>
                <div className="flex items-baseline space-x-2 mt-1.5">
                  <span className="text-2xl font-extrabold text-slate-900">{totalBranches}</span>
                  <span className="text-xs font-semibold text-teal-700">({activeBranches} Active)</span>
                </div>
              </div>
              <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                <Activity className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Enrollment</p>
                <div className="flex items-baseline space-x-2 mt-1.5">
                  <span className="text-2xl font-extrabold text-slate-900">{totalStudents.toLocaleString()}</span>
                  <span className="text-xs font-semibold text-emerald-600">▲ +4% vs last year</span>
                </div>
              </div>
              <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                <GraduationCap className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Active Staff</p>
                <div className="flex items-baseline space-x-2 mt-1.5">
                  <span className="text-2xl font-extrabold text-slate-900">{totalTeachers}</span>
                  <span className="text-xs text-slate-500 font-medium">Avg. 1:21 Ratio</span>
                </div>
              </div>
              <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                <Users className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80 shadow-sm bg-gradient-to-br from-teal-800 to-teal-950 text-white">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-teal-200/80 uppercase tracking-wider">Global System Health</p>
                <div className="flex items-baseline space-x-2 mt-1.5">
                  <span className="text-xl font-extrabold">99.98%</span>
                  <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900/40">Secure</span>
                </div>
              </div>
              <div className="p-3 bg-teal-700/40 text-teal-300 rounded-xl border border-teal-600/30">
                <UserCheck className="w-5 h-5 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tab Selector & Control panel */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
          <div className="flex space-x-2 bg-slate-100 p-1.5 rounded-lg shrink-0">
            <button
              onClick={() => setActiveTab('branches')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeTab === 'branches'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              School Branches
            </button>
            <button
              onClick={() => setActiveTab('monitoring')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeTab === 'monitoring'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              System Monitoring
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                activeTab === 'logs'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Audit Trail logs
            </button>
          </div>

          {activeTab === 'branches' && (
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* Search */}
              <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search branches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 outline-none transition-all"
                />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="bg-white border border-slate-200 text-slate-600 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active Only</option>
                <option value="inactive">Inactive Only</option>
              </select>
            </div>
          )}
        </div>

        {/* Tab Contents */}
        {activeTab === 'branches' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table / List column */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200 shadow-sm">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-100">
                    <thead className="bg-slate-50">
                      <tr>
                        <th className="px-6 py-4.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Branch Details</th>
                        <th className="px-6 py-4.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Code</th>
                        <th className="px-6 py-4.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Enrolled</th>
                        <th className="px-6 py-4.5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Status & Toggle</th>
                        <th className="px-6 py-4.5 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100">
                      {filteredBranches.length > 0 ? (
                        filteredBranches.map((branch) => (
                          <tr key={branch.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-teal-50 text-teal-700 rounded-md shrink-0">
                                  <GraduationCap className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-slate-900">{branch.name}</div>
                                  <div className="text-xs text-slate-500">{branch.location}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <code className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-medium">
                                {branch.code}
                              </code>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 font-medium">
                              {branch.status === 'active' ? branch.students.toLocaleString() : '-'}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center space-x-3">
                                <Badge
                                  variant={branch.status === 'active' ? 'success' : 'neutral'}
                                  size="sm"
                                  showDot
                                >
                                  {branch.status === 'active' ? 'Active' : 'Inactive'}
                                </Badge>
                                
                                {/* Toggle Button */}
                                <button
                                  onClick={() => handleToggleStatus(branch.id)}
                                  className={`p-1.5 rounded-md border transition-all ${
                                    branch.status === 'active'
                                      ? 'text-teal-600 bg-teal-50 border-teal-200 hover:bg-teal-100 hover:text-teal-700'
                                      : 'text-slate-400 bg-slate-50 border-slate-200 hover:bg-slate-100 hover:text-slate-600'
                                  }`}
                                  title={branch.status === 'active' ? 'Deactivate Branch' : 'Activate Branch'}
                                  aria-label={branch.status === 'active' ? 'Deactivate Branch' : 'Activate Branch'}
                                >
                                  <Power className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-xs">
                              <button
                                onClick={() => navigate(`/branch/${branch.id}`)}
                                className="text-teal-700 hover:text-teal-900 font-bold hover:underline"
                              >
                                View Portal
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={5} className="px-6 py-12 text-center text-slate-400 text-sm">
                            No branches matched the criteria.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Side column: activity log / quick links */}
            <div className="space-y-6">
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="py-4 px-5">
                  <CardTitle className="text-sm font-bold flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-teal-700" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => alert('New Branch deployment wizard is coming soon!')}
                    className="border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold"
                  >
                    + Register New Branch
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => alert('Report generator wizard details coming soon!')}
                    className="border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold"
                  >
                    Generate Annual Report
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => alert('Global settings modal coming soon!')}
                    className="border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-left justify-start"
                    leftIcon={<Settings className="w-4 h-4" />}
                  >
                    Global Configurations
                  </Button>
                </CardContent>
              </Card>

              {/* Mini Log Console */}
              <Card className="border-slate-200 shadow-sm">
                <CardHeader className="py-4 px-5">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-bold flex items-center gap-2">
                      <Activity className="w-4 h-4 text-teal-700" />
                      Live Operation Logs
                    </CardTitle>
                    <button
                      onClick={() => setLogs(logs.slice(0, 4))}
                      className="p-1 rounded text-slate-400 hover:text-slate-600 transition-colors"
                      title="Clear logs history"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent className="p-5">
                  <div className="space-y-3.5 max-h-[220px] overflow-y-auto pr-1">
                    {logs.map((log) => (
                      <div key={log.id} className="text-xs flex items-start space-x-2.5">
                        <span className={`h-1.5 w-1.5 rounded-full mt-1.5 shrink-0 ${
                          log.type === 'success' ? 'bg-emerald-500' : log.type === 'warn' ? 'bg-amber-500' : 'bg-blue-400'
                        }`} />
                        <div>
                          <p className="text-slate-600 leading-snug font-medium">{log.msg}</p>
                          <span className="text-[10px] text-slate-400 mt-0.5 block">{log.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'monitoring' && (
          <Card className="border-slate-200 shadow-sm text-center py-16 px-4">
            <ShieldAlert className="w-12 h-12 text-teal-700 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800">Advanced Central Telemetry</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-2">
              Super Admin telemetry monitors database latency, backup health, bandwidth thresholds, and active student-teacher portals in real-time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
              <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Sync Latency</span>
                <p className="text-xl font-black text-teal-800 mt-1">12 ms</p>
                <Badge variant="success" className="mt-2" size="sm">Optimal</Badge>
              </div>
              <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Daily Backups</span>
                <p className="text-xl font-black text-teal-800 mt-1">4 / 4</p>
                <Badge variant="success" className="mt-2" size="sm">Verified</Badge>
              </div>
              <div className="p-4 bg-teal-50/50 rounded-xl border border-teal-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">SSL Certificate</span>
                <p className="text-xl font-black text-teal-800 mt-1">Active</p>
                <Badge variant="info" className="mt-2" size="sm">242 Days left</Badge>
              </div>
            </div>
          </Card>
        )}

        {activeTab === 'logs' && (
          <Card className="border-slate-200 shadow-sm">
            <CardHeader className="py-5 px-6 border-b border-slate-100">
              <CardTitle className="text-base font-bold">Comprehensive Security Audit Logs</CardTitle>
              <CardDescription>Listing administrative logs, logins, state changes, and branch activities.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-start justify-between border-b border-slate-50 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-3">
                      {log.type === 'success' ? (
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      ) : log.type === 'warn' ? (
                        <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5" />
                      ) : (
                        <Activity className="w-4 h-4 text-blue-500 mt-0.5" />
                      )}
                      <div>
                        <p className="text-sm text-slate-800 font-semibold">{log.msg}</p>
                        <p className="text-xs text-slate-400 mt-0.5">Authorization Level: SUPER_ADMIN</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{log.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

      </main>

      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400 mt-auto">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} School ERP Centralized Platform. All security events logged under org key: SEC-ADMIN-MGR-01.</p>
        </div>
      </footer>
    </div>
  );
};
