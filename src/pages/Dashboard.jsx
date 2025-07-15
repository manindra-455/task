"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Video, Pause, Square, Search, Plus, MonitorX } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const Dashboard = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1280)
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(true); // or false, as needed


  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Chart data
  const barData = [
    { name: "S", value: 25 },
    { name: "M", value: 65 },
    { name: "T", value: 40 },
    { name: "W", value: 55 },
    { name: "T", value: 30 },
    { name: "F", value: 45 },
    { name: "S", value: 80 },
  ]
  const pieData = [
    { name: "Completed", value: 41 },
    { name: "InProgress", value: 35 },
    { name: "Pending", value: 24 },
  ]

  // Threshold for displaying the desktop-only message
  const DESKTOP_MIN_WIDTH = 768 // Corresponds to 'md' breakpoint in Tailwind CSS

  if (windowWidth < DESKTOP_MIN_WIDTH) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-center p-8 font-sans">
        <MonitorX className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Desktop Only Feature</h2>
        <p className="text-base text-gray-600 max-w-md">
          The dashboard is only available on medium and larger screens.
          <br />
          Please switch to a tablet or desktop device to continue.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans transparent-scrollbar">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-1">Dashboard</h1>
          <p className="text-sm text-gray-600">Plan, prioritize, and accomplish your tasks with ease</p>
        </div>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-4">
          <div className="relative">
            {isAdminPanelOpen && (
              <>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Employee"
                  className="w-48 md:w-72 px-4 py-3 pl-10 border border-gray-200 rounded-full text-sm bg-white text-gray-700 outline-none placeholder-gray-400"
                />
              </>
            )}
          </div>
          {isAdminPanelOpen && (
            <button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full text-sm font-medium cursor-pointer flex items-center gap-2 transition-all duration-200 hover:bg-blue-600 hover:text-white">
              <Plus size={16} />
              Add Projects
            </button>
          )}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Projects - Blue gradient */}
        <div className="rounded-3xl p-6 relative bg-gradient-to-br from-blue-400 to-blue-700 text-white shadow-md">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-sm text-white">Total Projects</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/30 bg-white/10">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 leading-none">24</div>
          <p className="text-xs text-white/80">6+ increased from last month</p>
        </div>

        {/* Ended Projects */}
        <div className="rounded-3xl p-6 relative bg-white border border-gray-200 shadow-md">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-sm text-gray-800">Ended Projects</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-gray-50">
              <TrendingUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 leading-none text-gray-900">8</div>
          <p className="text-xs text-blue-600">4+ increased from last month</p>
        </div>

        {/* Running Projects */}
        <div className="rounded-3xl p-6 relative bg-white border border-gray-200 shadow-md">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-sm text-gray-800">Running Projects</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-gray-50">
              <TrendingUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 leading-none text-gray-900">5</div>
          <p className="text-xs text-blue-600">4+ increased from last month</p>
        </div>

        {/* Pending Projects */}
        <div className="rounded-3xl p-6 relative bg-white border border-gray-200 shadow-md">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-sm text-gray-800">Pending Projects</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-200 bg-gray-50">
              <TrendingUp className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 leading-none text-gray-900">4</div>
          <p className="text-xs text-blue-600">On Discuss</p>
        </div>
      </div>

      {/* Main Content Grid - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Project Analytics */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Analytics</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#718096", fontSize: 14 }} />
                  <YAxis hide />
                  <Bar dataKey="value" fill="#3182ce" radius={[6, 6, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 m-0">Team Collaboration</h3>
              {isAdminPanelOpen &&(
              <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-full text-xs font-medium cursor-pointer flex items-center gap-1 transition-all duration-200 hover:bg-blue-600 hover:text-white">
                <Plus size={14} />
                Add Member
              </button>)}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Thor Odinson"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Thor Odinson</h4>
                    <p className="text-xs text-gray-600 m-0">
                      Working on <span className="text-gray-900 font-medium">GitHub Repository</span>
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">
                  Completed
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Loki Sharma"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Loki Sharma</h4>
                    <p className="text-xs text-gray-600 m-0">
                      Working on <span className="text-gray-900 font-medium">Time Software</span>
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">
                  Completed
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Tony Stark"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Tony Stark</h4>
                    <p className="text-xs text-gray-600 m-0">
                      Working on <span className="text-gray-900 font-medium">Responsive Layout for Homepage</span>
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-200 text-orange-800">
                  Ongoing
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Happy Verma"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Happy Verma</h4>
                    <p className="text-xs text-gray-600 m-0">
                      Working on <span className="text-gray-900 font-medium">Management Tools</span>
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-200 text-orange-800">
                  Ongoing
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Steve Rogers"
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Steve Rogers</h4>
                    <p className="text-xs text-gray-600 m-0">
                      Working on <span className="text-gray-900 font-medium">User Authentication System</span>
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-200 text-red-800">Pending</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          {/* Reminders */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Reminders</h3>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-blue-600 mb-2">Meeting with Abc Company</h4>
              <p className="text-sm text-gray-600 mb-6">Time: 02:00 pm - 04:00 pm</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium border-none cursor-pointer text-sm transition-colors duration-200 hover:bg-blue-800">
                <Video size={16} />
                Start Meeting
              </button>
            </div>
          </div>

          {/* Project Progress + Time Tracker for mobile */}
          <div className="flex flex-col gap-6 md:gap-0">
            <div>
              {/* Project Progress */}
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Project Progress</h3>
                <div className="flex justify-center mb-6">
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
                          <Cell fill="#3182ce" />
                          <Cell fill="#63b3ed" />
                          <Cell fill="#cbd5e0" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 leading-none">41%</div>
                        <div className="text-sm text-blue-600 font-medium mt-1">Project Ended</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <span className="text-xs text-gray-600">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <span className="text-xs text-gray-600">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span className="text-xs text-gray-600">Pending</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="block lg:hidden mt-6">
              {/* Time Tracker (mobile/tablet only) */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-6 text-white text-center shadow-md">
                <h3 className="text-lg font-semibold mb-8 text-left">Time Tracker</h3>
                <div className="text-4xl font-bold mb-8 tracking-wider font-mono">01:23:42</div>
                <div className="flex justify-center gap-4">
                  <button className="w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-200 bg-white/20 text-white hover:bg-white/30">
                    <Pause className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-200 bg-red-600 text-white hover:bg-red-700">
                    <Square className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Projects */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 m-0">Projects</h3>
              {isAdminPanelOpen &&(
              <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-full text-xs font-medium cursor-pointer flex items-center gap-1 transition-all duration-200 hover:bg-blue-600 hover:text-white">
                <Plus size={14} />
                New
              </button> )}
            </div>
            <div className="flex flex-col gap-4">
              {/* Develop API Endpoints */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md flex-shrink-0 bg-red-400"></div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Develop API Endpoints</h4>
                  <p className="text-xs text-gray-600 m-0">Due date: July 30, 2025</p>
                </div>
              </div>

              {/* Onboarding Flow */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md flex-shrink-0 bg-purple-400"></div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Onboarding Flow</h4>
                  <p className="text-xs text-gray-600 m-0">Due date: Sep 30, 2025</p>
                </div>
              </div>

              {/* Build Dashboard */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md flex-shrink-0 bg-blue-400"></div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Build Dashboard</h4>
                  <p className="text-xs text-gray-600 m-0">Due date: Aug 30, 2025</p>
                </div>
              </div>

              {/* Optimize Page Load */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md flex-shrink-0 bg-red-400"></div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Optimize Page Load</h4>
                  <p className="text-xs text-gray-600 m-0">Due date: Dec 30, 2025</p>
                </div>
              </div>

              {/* Build iOS App */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-md flex-shrink-0 bg-blue-400"></div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 m-0 mb-1">Build iOS App</h4>
                  <p className="text-xs text-gray-600 m-0">Due date: Jan 30, 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Time Tracker (desktop only) */}
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-6 text-white text-center shadow-md">
              <h3 className="text-lg font-semibold mb-8 text-left">Time Tracker</h3>
              <div className="text-4xl font-bold mb-8 tracking-wider font-mono">01:23:42</div>
              <div className="flex justify-center gap-4">
                <button className="w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-200 bg-white/20 text-white hover:bg-white/30">
                  <Pause className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full border-none cursor-pointer flex items-center justify-center transition-all duration-200 bg-red-600 text-white hover:bg-red-700">
                  <Square className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
