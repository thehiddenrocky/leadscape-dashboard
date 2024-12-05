import { Home, Users, Bell, Settings, LineChart, DollarSign, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onClose?: () => void;
  onNavigate?: (view: string) => void;
  activeView: string;
}

const Sidebar = ({ onClose, onNavigate, activeView }: SidebarProps) => {
  const handleNavigation = (view: string) => {
    if (onNavigate) {
      onNavigate(view);
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="w-64 h-full bg-dashboard-card border-r border-gray-800 p-6 flex flex-col relative">
      {/* Close button for mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 md:hidden"
        onClick={onClose}
      >
        <X className="h-4 w-4 text-white" />
      </Button>

      <div className="flex items-center gap-2 mb-8 mt-2">
        <div className="w-8 h-8 bg-dashboard-accent rounded-lg"></div>
        <span className="text-white font-semibold text-xl">Dashboard</span>
      </div>
      
      <nav className="space-y-2">
        <SidebarItem 
          icon={<Home size={20} />} 
          label="Overview" 
          active={activeView === "overview"}
          onClick={() => handleNavigation("overview")}
        />
        <SidebarItem 
          icon={<Users size={20} />} 
          label="Leads" 
          active={activeView === "leads"}
          onClick={() => handleNavigation("leads")}
        />
        <SidebarItem 
          icon={<DollarSign size={20} />} 
          label="Service Pricing" 
          active={activeView === "service-pricing"}
          onClick={() => handleNavigation("service-pricing")}
        />
        <SidebarItem 
          icon={<LineChart size={20} />} 
          label="Market Analysis" 
          active={activeView === "market-analysis"}
          onClick={() => handleNavigation("market-analysis")}
        />
        <SidebarItem 
          icon={<TrendingUp size={20} />} 
          label="Price Factors" 
          active={activeView === "price-factors"}
          onClick={() => handleNavigation("price-factors")}
        />
        <SidebarItem 
          icon={<Bell size={20} />} 
          label="Alerts" 
          active={activeView === "alerts"}
          onClick={() => handleNavigation("alerts")}
        />
        <SidebarItem 
          icon={<Settings size={20} />} 
          label="Settings" 
          active={activeView === "settings"}
          onClick={() => handleNavigation("settings")}
        />
      </nav>
    </div>
  );
};

const SidebarItem = ({ 
  icon, 
  label, 
  active = false,
  onClick
}: { 
  icon: React.ReactNode; 
  label: string; 
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
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