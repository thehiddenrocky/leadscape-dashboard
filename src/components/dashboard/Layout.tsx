import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
  activeView: string;
  onNavigate: (view: string) => void;
}

const Layout = ({ children, activeView, onNavigate }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-dashboard-background">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu className="h-6 w-6 text-white" />
      </Button>

      {/* Sidebar with mobile overlay */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-0 z-40 md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full">
          <Sidebar 
            onClose={() => setIsSidebarOpen(false)} 
            activeView={activeView}
            onNavigate={onNavigate}
          />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 p-4 md:p-8 pt-16 md:pt-8 overflow-auto">
        {children}
      </main>

      {/* Mobile overlay backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;