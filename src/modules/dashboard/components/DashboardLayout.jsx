import React from "react";
import { LogOut, Plus, Sun, Moon, User, Camera } from "lucide-react";
import { useDashboard } from "../hooks/useDashboard";
import { MENU_ITEMS, STATS_DATA } from "../services/dashboardData";

// ১. এখানে নাম DashboardLayout করে দেওয়া হয়েছে
const DashboardLayout = () => {
 
  const dashboardData = useDashboard() || {};
  
  // সেফটি চেক: যদি ডাটা লোড না হয়
  if (!dashboardData.themeStyles) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center font-sans uppercase tracking-widest text-xs">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-[#F6c543] border-t-transparent rounded-full animate-spin"></div>
          Loading Dashboard...
        </div>
      </div>
    );
  }

  const { 
    activeTab, setActiveTab, darkMode, toggleDarkMode, 
    adminUser, handleProfilePicChange, themeStyles 
  } = dashboardData;

  return (
    <div className={`flex min-h-screen font-sans transition-colors duration-500 ${themeStyles.bgColor}`}>
      
      {/* --- Sidebar UI --- */}
      <aside className={`w-64 border-r flex flex-col transition-colors duration-500 ${themeStyles.sidebarBg}`}>
        <div className="p-8 pb-4 text-center lg:text-left">
          <h2 className="text-[#F6c543] text-2xl font-black italic tracking-tighter leading-none">RAIHAN.AI</h2>
          <p className={`${themeStyles.textColorSecondary} text-[10px] uppercase tracking-widest mt-2`}>Admin Panel</p>
        </div>

        {/* Profile Section */}
        <div className="px-6 mb-8 mt-4 text-center">
          <div className="relative inline-block">
            <div className={`w-20 h-20 rounded-2xl border-2 overflow-hidden mb-3 ${darkMode ? "border-white/10" : "border-slate-200 shadow-lg"}`}>
              {adminUser.profilePic ? (
                <img src={adminUser.profilePic} alt="Admin" className="w-full h-full object-cover" />
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${darkMode ? "bg-white/5" : "bg-slate-100"}`}>
                  <User size={30} className="text-gray-400" />
                </div>
              )}
            </div>
            <label className="absolute -bottom-1 -right-1 bg-[#F6c543] text-black p-1.5 rounded-lg cursor-pointer hover:scale-110 transition-transform">
              <Camera size={12} />
              <input type="file" className="hidden" onChange={handleProfilePicChange} accept="image/*" />
            </label>
          </div>
          <h3 className="font-black text-xs uppercase tracking-wider">{adminUser.name}</h3>
          <p className="text-[9px] text-gray-500 font-bold uppercase">{adminUser.role}</p>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 space-y-2">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                activeTab === item.name 
                ? "bg-[#F6c543] text-black font-bold shadow-lg shadow-[#F6c543]/10" 
                : `${darkMode ? "text-gray-400 hover:bg-white/5" : "text-slate-600 hover:bg-slate-100"}`
              }`}
            >
              {item.icon}
              <span className="text-xs font-bold uppercase tracking-widest">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button className="flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-500/10 w-full rounded-xl transition-all">
            <LogOut size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Logout</span>
          </button>
        </div>
      </aside>

      {/* --- Main Content Area UI --- */}
      <main className="flex-1 overflow-y-auto p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black uppercase italic tracking-tighter leading-none">{activeTab}</h1>
            <p className={`${themeStyles.textColorSecondary} text-sm mt-1 uppercase tracking-[0.2em] font-medium`}>Management Console</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className={`p-2.5 rounded-full border transition-all duration-500 ${darkMode ? "border-white/10 bg-white/5 text-[#F6c543]" : "border-slate-200 bg-white shadow-sm"}`}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="flex items-center gap-2 bg-[#F6c543] text-black px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">
              <Plus size={18} /> Add New
            </button>
          </div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STATS_DATA.map((stat, i) => (
            <div key={i} className={`border p-6 rounded-3xl transition-all duration-500 ${themeStyles.cardBg}`}>
              <p className={`${themeStyles.textColorSecondary} text-[10px] font-black uppercase tracking-widest mb-1`}>{stat.label}</p>
              <h3 className={`text-4xl font-black ${stat.color}`}>{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Data Table Section */}
        <section className={`border rounded-3xl overflow-hidden transition-all duration-500 ${themeStyles.cardBg}`}>
          <div className={`p-6 border-b flex justify-between items-center ${darkMode ? "bg-black/20 border-white/5" : "bg-slate-50 border-slate-100"}`}>
            <h3 className="font-bold text-lg uppercase tracking-widest">Recent {activeTab}</h3>
            <input type="text" placeholder="Search..." className={`border rounded-full px-4 py-1.5 text-xs focus:outline-none focus:border-[#F6c543]/50 w-64 ${themeStyles.inputBg}`} />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className={`${themeStyles.textColorSecondary} text-[10px] uppercase tracking-[0.2em] ${darkMode ? "bg-black/40" : "bg-slate-50/50"}`}>
                  <th className="px-6 py-4 font-black">Title / Role</th>
                  <th className="px-6 py-4 font-black">Status</th>
                  <th className="px-6 py-4 font-black text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${darkMode ? "divide-white/5" : "divide-slate-100"}`}>
                {[1, 2, 3].map((item) => (
                  <tr key={item} className={`transition-colors group ${darkMode ? "hover:bg-white/[0.02]" : "hover:bg-slate-50"}`}>
                    <td className="px-6 py-5">
                      <div className="font-bold group-hover:text-[#F6c543] transition-colors">E-commerce Website</div>
                      <div className="text-[10px] text-gray-500">React, Node.js, MongoDB</div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-green-500/10 text-green-600 text-[10px] font-bold rounded-full uppercase">Live</span>
                    </td>
                    <td className="px-6 py-5 text-right space-x-3">
                      <button className="text-slate-400 hover:text-[#F6c543] text-xs font-bold transition-colors">Edit</button>
                      <button className="text-red-500/70 hover:text-red-500 text-xs font-bold transition-colors">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;