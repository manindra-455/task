  

 import React from "react";
import { Send, Plus } from "lucide-react";

const messages = [
  { fromMe: false, text: "omg, this is amazing" },
  { fromMe: false, text: "perfect ✅" },
  { fromMe: false, text: "Wow, this is really epic" },
  { fromMe: true, text: "How are you?" },
  { fromMe: false, text: "just ideas for next time" },
  { fromMe: false, text: "i'll be there in 2 mins💗" },
  { fromMe: true, text: "woohoooo" },
  { fromMe: true, text: "Haha oh man" },
  { fromMe: true, text: "Haha that’s terrifying 😅" },
  { fromMe: false, text: "aww" },
  { fromMe: false, text: "omg, this is amazing" },
  { fromMe: false, text: "woohoooo 🔥" },
];

const contacts = [
  { name: "Elmer Laverty", time: "12m", tags: ["Question", "Help wanted"], img: 1 },
  { name: "Florencio Dorrance", time: "24h", tags: ["Some content"], img: 2, active: true },
  { name: "Lavern Laboy", time: "1h", tags: ["Bug", "Hacktoberfest"], img: 3 },
  { name: "Titus Kitamura", time: "5h", tags: ["Question", "Some content"], img: 4 },
  { name: "Geoffrey Mott", time: "2d", tags: ["Request"], img: 5 },
  { name: "Alfonzo Schuessler", time: "1m", tags: ["Follow up"], img: 6 },
];

const Messege = () => {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-100px)] gap-3 px-2 sm:px-4 mx-2 sm:mx-4 bg-gray-200 shadow rounded-3xl overflow-hidden">
      {/* Left: Contacts Section */}
      <div className=" md:w-[320px] md:min-w-[280px] p-4 mt-4 mb-4 flex bg-white rounded-3xl flex-col max-h-[calc(100vh-120px)] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Messages</h2>
          <button className="bg-blue-500 p-1 rounded-full text-white">
            <Plus size={16} />
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search messages"
          className="px-4 py-2 border rounded-full text-sm"
        />

        {/* Contact List */}
        <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-2">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className={`flex gap-3 items-start p-2 rounded-xl cursor-pointer ${
                contact.active ? "bg-gray-100" : "hover:bg-gray-50"
              }`}
            >
              <img
                src={`https://i.pravatar.cc/150?img=${contact.img}`}
                className="w-10 h-10 rounded-full"
                alt={contact.name}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>{contact.name}</span>
                  <span className="text-xs text-gray-400">{contact.time}</span>
                </div>

                {/* Colored Tags */}
                <div className="mt-1 flex flex-wrap gap-1">
                  {contact.tags.map((tag, idx) => {
                    let bg = "bg-gray-100";
                    let text = "text-gray-600";

                    switch (tag) {
                      case "Question":
                        bg = "bg-yellow-100";
                        text = "text-yellow-800";
                        break;
                      case "Help wanted":
                        bg = "bg-green-100";
                        text = "text-green-800";
                        break;
                      case "Bug":
                        bg = "bg-red-100";
                        text = "text-red-800";
                        break;
                      case "Hacktoberfest":
                        bg = "bg-emerald-100";
                        text = "text-emerald-800";
                        break;
                      case "Some content":
                        bg = "bg-blue-100";
                        text = "text-blue-800";
                        break;
                      case "Request":
                        bg = "bg-green-100";
                        text = "text-green-800";
                        break;
                      case "Follow up":
                        bg = "bg-purple-100";
                        text = "text-purple-800";
                        break;
                      default:
                        break;
                    }

                    return (
                      <span
                        key={idx}
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${bg} ${text}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Chat Section */}
      <div className="w-full md:flex-1 flex mt-0 md:mt-4 mb-4 rounded-3xl bg-white flex-col max-h-[calc(100vh-120px)] overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center gap-3 px-6 py-4 border-b">
          <img
            src="https://i.pravatar.cc/150?img=2"
            className="w-10 h-10 rounded-full"
            alt=""
          />
          <div>
            <h2 className="font-medium">Florencio Dorrance</h2>
            <p className="text-xs text-green-500">● Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 sm:p-6 space-y-4 overflow-y-auto bg-white">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end gap-2 ${
                msg.fromMe ? "justify-end" : "justify-start"
              }`}
            >
              {!msg.fromMe && (
                <img
                  src="https://i.pravatar.cc/150?img=2"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              )}

              {/* Message Bubble */}
              <div
                className={`text-sm px-4 py-2 rounded-xl max-w-xs sm:max-w-sm ${
                  msg.fromMe
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-100 text-black rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>

              {msg.fromMe && (
                <img
                  src="https://i.pravatar.cc/150?img=2"
                  className="w-8 h-8 rounded-full"
                  alt=""
                />
              )}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t">
          <div className="flex bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type a message"
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <button className="text-blue-500">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messege;

