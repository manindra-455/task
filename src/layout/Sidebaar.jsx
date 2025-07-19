import React, { useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Calendar,
  MessageSquare,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Projects", icon: FolderKanban, to: "/projects" },
  { label: "Calendar", icon: Calendar, to: "/calendar" },
  { label: "Chat", icon: MessageSquare, to: "/chat" },
  { label: "Team", icon: Users, to: "/team" },
];

const generalItems = [
  { label: "Settings", icon: Settings, to: "/settings" },
  { label: "Help", icon: HelpCircle, to: "/help" },
  { label: "Logout", icon: LogOut, to: "/logout" },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    navigate(to);
  };

  return (
    <aside
      className={`h-screen bg-[#f4f4f4] py-2 px-3 flex flex-col gap-8 transition-all duration-300 ease-in-out rounded-2xl ${collapsed ? "w-20" : "w-64"
        }`}
    >
      {/* Left: Logo */}
      <div className="text-2xl font-semibold text-black">
        {collapsed ? 'TF' : 'TaskFleet'}
      </div>
      {/* Top Section */}
      <div>
        <p
          className={`uppercase text-xs text-gray-400 mb-4 px-2 transition-all duration-300 ${collapsed ? "text-center opacity-0" : "opacity-100"
            }`}
        >
          {collapsed ? "" : "Menu"}
        </p>

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map(({ label, icon: Icon, to }) => (
            <button
              key={label}
              onClick={() => handleNavigation(to)}
              className={`w-full flex items-center gap-3 px-3 py-2 cursor-pointer rounded-md hover:bg-gray-200 transition ${location.pathname === to
                  ? "text-blue-500 font-semibold"
                  : "text-gray-600"
                }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span
                className={`transition-all duration-300 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
                  }`}
              >
                {label}
              </span>
            </button>
          ))}
        </nav>

        {/* Divider + Toggle Button */}
        <div className="flex items-center justify-between mt-4 px-2">
          <div
            className={`border-t border-gray-300 transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "flex-1 opacity-100"
              }`}
          ></div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`text-gray-500 hover:text-black cursor-pointer transition-all duration-200 ${collapsed ? "mx-auto" : "ml-2"
              }`}
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* General Section */}
        <p
          className={`uppercase text-xs text-gray-400 mt-4 mb-2 px-2 transition-all duration-300 ${collapsed ? "text-center opacity-0" : "opacity-100"
            }`}
        >
          {collapsed ? "" : "General"}
        </p>
        <nav className="space-y-2">
          {generalItems.map(({ label, icon: Icon, to }) => (
            <button
              key={label}
              onClick={() => handleNavigation(to)}
              className={`w-full flex items-center gap-3 px-3 py-2 cursor-pointer rounded-md hover:bg-gray-200 transition ${location.pathname === to
                  ? "text-blue-500 font-semibold"
                  : "text-gray-600"
                }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span
                className={`transition-all duration-300 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
                  }`}
              >
                {label}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;



// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Sidebaar = () => {

//   const navigate = useNavigate()

//   const handlenaigation = (path) => {

//   }


//   return (
     
//       <aside className='bg-gray-100 p-6 h-screen w-64' >

//         <h1 className='text-3xl text-bold ' >sidebarr</h1>

//          <nav className='flex flex-col gap-4 ' >

//           <button className=' text-left text-3xl text-bold' onClick={() => handlenaigation("/")} >dashbord</button>

//           <button className='text-left text-3xl text-bold' onClick={() => handlenaigation("/project")} >setting</button>

//           <button className='text-left text-3xl text-bold' onClick={() => handlenaigation("/project")} >ckljdoie</button>

//           <button className='text-left text-3xl text-bold ' onClick={() => handlenaigation("/project")} >kcwk</button>

//          </nav>

//       </aside>
     
//   )
// }

// export default Sidebaar
