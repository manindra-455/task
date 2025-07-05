import React from 'react';
import { 
  TrendingUp, 
  Video, 
  Pause, 
  Square,
  Grid3X3
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Exact chart data matching the image
  const barData = [
    { name: 'S', value: 25 },
    { name: 'M', value: 65 },
    { name: 'T', value: 40 },
    { name: 'W', value: 55 },
    { name: 'T', value: 30 },
    { name: 'F', value: 45 },
    { name: 'S', value: 80 }
  ];

  const pieData = [
    { name: 'Completed', value: 41 },
    { name: 'InProgress', value: 35 },
    { name: 'Pending', value: 24 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header - Exact positioning */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
          <p className="text-gray-500 text-sm">Plan, prioritize, and accomplish your tasks with ease</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-400 rounded-full"></div>
          <Grid3X3 className="w-6 h-6 text-gray-600" />
        </div>
      </div>

      {/* Stats Cards - Exact same layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Projects - Blue gradient */}
        <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-2xl p-6 text-white">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-white/90 font-medium">Total Projects</h3>
            <div className="bg-white/20 rounded-full p-2">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2">24</div>
          <p className="text-white/80 text-sm">6+ increased from last month</p>
        </div>

        {/* Ended Projects */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-900 font-medium">Ended Projects</h3>
            <div className="bg-gray-100 rounded-full p-2">
              <TrendingUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 text-gray-900">8</div>
          <p className="text-blue-500 text-sm">4+ increased from last month</p>
        </div>

        {/* Running Projects */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-900 font-medium">Running Projects</h3>
            <div className="bg-gray-100 rounded-full p-2">
              <TrendingUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 text-gray-900">5</div>
          <p className="text-blue-500 text-sm">4+ increased from last month</p>
        </div>

        {/* Pending Projects */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-900 font-medium">Pending Projects</h3>
            <div className="bg-gray-100 rounded-full p-2">
              <TrendingUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 text-gray-900">4</div>
          <p className="text-blue-500 text-sm">On Discuss</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - 2/3 width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Analytics */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Analytics</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 14 }}
                  />
                  <YAxis hide />
                  <Bar 
                    dataKey="value" 
                    fill="#3B82F6" 
                    radius={[6, 6, 0, 0]}
                    maxBarSize={40}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Team Collaboration</h3>
            <div className="space-y-4">
              {/* Thor Odinson */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">TO</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Thor Odinson</p>
                    <p className="text-sm text-gray-600">Working on <span className="font-medium">GitHub Repository</span></p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  Completed
                </span>
              </div>

              {/* Loki Sharma */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">LS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Loki Sharma</p>
                    <p className="text-sm text-gray-600">Working on <span className="font-medium">Time Software</span></p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  Completed
                </span>
              </div>

              {/* Tony Stark */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">TS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Tony Stark</p>
                    <p className="text-sm text-gray-600">Working on <span className="font-medium">Responsive Layout for Homepage</span></p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                  Ongoing
                </span>
              </div>

              {/* Happy Verma */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">HV</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Happy Verma</p>
                    <p className="text-sm text-gray-600">Working on <span className="font-medium">Management Tools</span></p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                  Ongoing
                </span>
              </div>

              {/* Steve Rogers */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SR</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Steve Rogers</p>
                    <p className="text-sm text-gray-600">Working on <span className="font-medium">User Authentication System</span></p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* Project Progress */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Progress</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      <Cell fill="#3B82F6" />
                      <Cell fill="#60A5FA" />
                      <Cell fill="#E5E7EB" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">41%</div>
                    <div className="text-sm text-blue-500 font-medium">Project Ended</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600">Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 1/3 width */}
        <div className="space-y-6">
          {/* Reminders */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Reminders</h3>
            <div>
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Meeting with Abc Company</h4>
              <p className="text-sm text-gray-600 mb-4">Time: 02:00 pm - 04:00 pm</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 transition-colors font-medium">
                <Video className="w-4 h-4" />
                Start Meeting
              </button>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Projects</h3>
            <div className="space-y-4">
              {/* Develop API Endpoints */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Develop API Endpoints</p>
                  <p className="text-xs text-gray-500">Due date: July 30, 2025</p>
                </div>
              </div>

              {/* Onboarding Flow */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Onboarding Flow</p>
                  <p className="text-xs text-gray-500">Due date: Sep 30, 2025</p>
                </div>
              </div>

              {/* Build Dashboard */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Build Dashboard</p>
                  <p className="text-xs text-gray-500">Due date: Aug 30, 2025</p>
                </div>
              </div>

              {/* Optimize Page Load */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Optimize Page Load</p>
                  <p className="text-xs text-gray-500">Due date: Dec 30, 2025</p>
                </div>
              </div>

              {/* Build iOS App */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Build iOS App</p>
                  <p className="text-xs text-gray-500">Due date: Jan 30, 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Time Tracker */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-8">Time Tracker</h3>
            <div className="text-center">
              <div className="text-4xl font-bold mb-8 tracking-wider">01:23:42</div>
              <div className="flex justify-center gap-4">
                <button className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors">
                  <Pause className="w-6 h-6" />
                </button>
                <button className="bg-red-500 hover:bg-red-600 rounded-full p-3 transition-colors">
                  <Square className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;