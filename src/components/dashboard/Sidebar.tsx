import { Home, Users, Bell, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-dashboard-card border-r border-gray-800 p-6 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-dashboard-accent rounded-lg"></div>
        <span className="text-white font-semibold text-xl">Dashboard</span>
      </div>
      
      <nav className="space-y-2">
        <SidebarItem icon={<Home size={20} />} label="Overview" active />
        <SidebarItem icon={<Users size={20} />} label="Leads" />
        <SidebarItem icon={<Bell size={20} />} label="Alerts" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ 
  icon, 
  label, 
  active = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors
        ${active 
          ? "bg-dashboard-accent text-white" 
          : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;