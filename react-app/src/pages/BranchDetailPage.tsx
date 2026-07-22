import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Calendar, GraduationCap, Mail, Phone, ShieldCheck, User, Users } from 'lucide-react';
import { mockBranches } from '../data/branches';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const BranchDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find the branch from mock data
  const branch = mockBranches.find((b) => b.id === id);

  if (!branch) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-md w-full text-center shadow-lg p-8">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900">Branch Not Found</h2>
          <p className="text-gray-500 mt-2 mb-6">
            The school or branch you are trying to view does not exist.
          </p>
          <Button variant="primary" onClick={() => navigate('/')} className="mx-auto">
            Back to Portal
          </Button>
        </Card>
      </div>
    );
  }

  // Generate some secondary mock stats for visualization
  const teacherStudentRatio = (branch.students / branch.teachers).toFixed(1);
  const classroomsCount = Math.round(branch.students / 28);
  const averageGpa = '3.62';

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center space-x-2 text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Central Portal</span>
        </button>

        {/* Top Header Card */}
        <div className="bg-gradient-to-r from-teal-800 to-teal-950 text-white rounded-2xl p-6 md:p-10 shadow-lg mb-8 relative overflow-hidden text-left">
          {/* Abstract background graphics */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl -ml-20 -mb-20 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Badge variant="info" className="bg-teal-900/60 text-teal-100 border-teal-800/40">
                  {branch.code}
                </Badge>
                <Badge variant="success" className="bg-emerald-950/60 text-emerald-300 border-emerald-900/40" showDot>
                  Active Branch
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                {branch.name}
              </h1>
              <p className="text-teal-200/80 font-medium flex items-center gap-1.5 text-sm md:text-base">
                <span>📍</span> {branch.location}, India
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4.5 border border-white/10 flex flex-col justify-center min-w-[200px] text-left md:text-right">
              <span className="text-xs text-teal-200 uppercase font-semibold tracking-wider">Supervised by</span>
              <span className="text-lg font-bold text-white mt-1 flex items-center md:justify-end gap-1.5">
                <User className="w-4 h-4 text-teal-300" />
                {branch.principal}
              </span>
              <span className="text-xs text-teal-200/60 mt-0.5">Head of Institution</span>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          
          {/* Left Column: Quick Stats */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Card className="border-gray-100 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Students</p>
                      <h3 className="text-3xl font-extrabold text-gray-900 mt-1">{branch.students.toLocaleString()}</h3>
                    </div>
                    <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-3.5 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-600 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium mt-1.5 block">82% capacity rating</span>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Faculty Members</p>
                      <h3 className="text-3xl font-extrabold text-gray-900 mt-1">{branch.teachers}</h3>
                    </div>
                    <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                      <Users className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-3.5 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-600 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium mt-1.5 block">1:{teacherStudentRatio} teacher-student ratio</span>
                </CardContent>
              </Card>

              <Card className="border-gray-100 shadow-sm hover:shadow transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Classrooms</p>
                      <h3 className="text-3xl font-extrabold text-gray-900 mt-1">{classroomsCount}</h3>
                    </div>
                    <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                      <BookOpen className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-3.5 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-600 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium mt-1.5 block">Avg. 28 students / room</span>
                </CardContent>
              </Card>
            </div>

            {/* Performance & Overview */}
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-700" />
                  Academic Excellence & Management
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {branch.name} is one of our flagship educational centers located in {branch.location}.
                  The branch excels in academic achievements, sports initiatives, and cultural development, ensuring a holistic environment for personal growth.
                  Equipped with modern laboratories, digitized smart classrooms, and extensive library collections, the school maintains top-tier regional ratings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Average GPA (Board Exams)</span>
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className="text-2xl font-extrabold text-teal-700">{averageGpa}</span>
                      <span className="text-xs font-semibold text-emerald-600">▲ Top 5% in district</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Curriculum Model</span>
                    <div className="flex items-baseline space-x-2 mt-1">
                      <span className="text-lg font-extrabold text-gray-800">CBSE Affiliated</span>
                      <span className="text-xs text-gray-400">Class I - XII</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Contact & Information */}
          <div className="space-y-8">
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-50 pb-3">
                  Branch Information
                </h3>
                
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start space-x-3.5">
                    <Calendar className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Established</p>
                      <p className="font-semibold text-gray-900 mt-0.5">{branch.established} ({new Date().getFullYear() - branch.established} Years Ago)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Phone className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Contact Number</p>
                      <p className="font-semibold text-gray-900 mt-0.5">{branch.contact}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5">
                    <Mail className="w-5 h-5 text-teal-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Email Address</p>
                      <p className="font-semibold text-teal-700 hover:underline mt-0.5 break-all select-all">{branch.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Badge variant="success" className="w-full justify-center py-2" showDot>
                    Online Portal Active
                  </Badge>
                  <p className="text-[10px] text-gray-400 text-center mt-2.5">
                    Synchronized with central database. Last backup: Just now.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-100 shadow-sm relative overflow-hidden">
              <CardContent className="p-6">
                <h4 className="font-bold text-teal-900 mb-2">Central Management Info</h4>
                <p className="text-xs text-teal-800/80 leading-relaxed mb-4">
                  Changes to branch settings, staff assignments, or billing rates must be authorized by the Super Admin in the dashboard.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => navigate('/')}
                  className="bg-white border-teal-200 hover:bg-teal-50 text-teal-800"
                >
                  Super Admin Login
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};
