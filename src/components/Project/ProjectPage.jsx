import React, { useState } from "react";
 
import Nember from "../Nember/Nember";
import Task from "../Nember/task";
 

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("task"); // or 'member'

  return (
    <div className="p-6   space-y-6   bg-gray-100  w-full ">
      {/* Top Header Section */}
      <div className="flex justify-between items-start bg-white p-4 rounded-xl  ">
        <div>
          <h2 className="text-xl font-bold">An AI Based SaaS to Review Resume</h2>
          <div className="flex mt-2">
            {/* Avatars */}
            <img src="https://i.pravatar.cc/150?img=1" className="w-8 h-8 rounded-full -ml-2 border-2 border-white" />
            <img src="https://i.pravatar.cc/150?img=2" className="w-8 h-8 rounded-full -ml-2 border-2 border-white" />
            <img src="https://i.pravatar.cc/150?img=3" className="w-8 h-8 rounded-full -ml-2 border-2 border-white" />
            <span className="ml-2 text-sm text-gray-500">+3</span>
          </div>
        </div>

        <div className="text-right">
          <h3 className="text-gray-500 font-semibold">Project XYZ</h3>
          <p className="text-sm text-gray-400">Start Date: DD/MM/YYYY</p>
          <p className="text-sm text-gray-400">Due Date: DD/MM/YYYY</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6  border-gray-100  ">
        <button
          onClick={() => setActiveTab("task")}
          className={`py-2 font-medium ${
            activeTab === "task" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
        >
          Tasks
        </button>
        <button
          onClick={() => setActiveTab("member")}
          className={`py-2 font-medium ${
            activeTab === "member" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
          }`}
        >
          Members
        </button>
      </div>

      {/* Conditional Rendering */}
      <div className="bg-gray-100   "  >
        {activeTab === "task" ? <Task /> : <Nember />}
      </div>
    </div>
  );
};

export default ProjectPage;

 