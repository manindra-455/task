 import React from "react";

const tasks = [
  {
    description: "User Research Research the...",
    assignedTo: "Thor Odinson",
    avatar: 1,
    startDate: "15 Jun 2025",
    dueDate: "15 Aug 2025",
    status: "Completed",
  },
  {
    description: "Wireframe Design",
    assignedTo: "Loki Sharma",
    avatar: 2,
    startDate: "15 Jun 2025",
    dueDate: "15 Aug 2025",
    status: "In Progress",
  },
  {
    description: "Visual Design",
    assignedTo: "Tony Starlink",
    avatar: 3,
    startDate: "15 Jun 2025",
    dueDate: "15 Aug 2025",
    status: "In Progress",
  },
  {
    description: "Usability Testing",
    assignedTo: "Vijay Malyaaa",
    avatar: 4,
    startDate: "15 Jun 2025",
    dueDate: "15 Aug 2025",
    status: "Pending",
  },
  {
    description: "Responsive Layout",
    assignedTo: "Steve Vermaa",
    avatar: 5,
    startDate: "15 Jun 2025",
    dueDate: "15 Aug 2025",
    status: "Pending",
  },
  {
    description: "Figma Design",
    assignedTo: "Alexander Sir",
    avatar: 6,
    startDate: "15 Jun 2025",
    dueDate: "15 Aug 2025",
    status: "Completed",
  },
  {
    description: "Authentication",
    assignedTo: "Tanmay Pardhi",
    avatar: 7,
    startDate: "15 Jun 2025",
    dueDate: "15 Aug 2025",
    status: "Completed",
  },
];

const statusColor = {
  "Completed": "text-green-600 bg-green-100",
  "In Progress": "text-yellow-600 bg-yellow-100",
  "Pending": "text-red-600 bg-red-100",
};

const Task = () => {
  return (
    <div className="bg-white   rounded-xl overflow-hidden">
      <table className="min-w-full table-auto border-separate border-spacing-y-4 bg-gray-100  ">
        <thead className="bg-white">
          <tr className="text-left text-sm font-semibold bg-white  text-gray-600">
            <th className="px-6 py-5">Description</th>
            <th className="px-6 py-5">Assigned to</th>
            <th className="px-6 py-5">Start Date</th>
            <th className="px-6 py-5">Due Date</th>
            <th className="px-6 py-5">Status</th>
            <th className="px-6 py-5">Updates</th>
            <th className="px-6 py-5">Submit</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className=" bg-white text-md  ">
              <td className="px-6 py-7 whitespace-nowrap text-gray-800  ">
                {task.description}
              </td>
              <td className="px-6 py-7 flex items-center gap-2">
                <img
                  src={`https://i.pravatar.cc/150?img=${task.avatar}`}
                  className="w-9 h-9 rounded-full"
                  alt={task.assignedTo}
                />
                <span>{task.assignedTo}</span>
              </td>
              <td className="px-6 py-7 text-gray-600">{task.startDate}</td>
              <td className="px-6 py-7 text-gray-600">{task.dueDate}</td>
              <td className="px-6 py-7">
                <span
                  className={`text-xs font-medium px-2 border py-1 rounded-full ${statusColor[task.status]}`}
                >
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-7">
                <button className="text-sm text-blue-500 border border-blue-500 px-3 py-1 rounded-full hover:bg-blue-50">
                  Updates
                </button>
              </td>
              <td className="px-6 py-7">
                <button className="text-sm text-blue-500 border border-blue-500 px-3 py-1 rounded-full hover:bg-blue-50">
                  Submit
                </button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task;