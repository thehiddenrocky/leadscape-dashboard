import { Bell } from "lucide-react";

interface AlertBannerProps {
  title: string;
  message: string;
}

const AlertBanner = ({ title, message }: AlertBannerProps) => {
  return (
    <div className="bg-dashboard-card p-6 rounded-xl border border-gray-800 mb-8">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <Bell className="text-dashboard-info" size={24} />
        </div>
        <div>
          <h2 className="text-white font-semibold text-lg">{title}</h2>
          <p className="text-gray-400">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;