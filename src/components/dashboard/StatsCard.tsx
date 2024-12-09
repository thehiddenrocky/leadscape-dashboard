interface StatsCardProps {
  title: string;
  value: string;
  trend: number;
  description: string;
}

const StatsCard = ({ title, value, trend, description }: StatsCardProps) => {
  const isPositive = trend >= 0;

  return (
    <div className="bg-dashboard-card p-6 rounded-xl">
      <h3 className="text-gray-400 text-sm mb-2">{title} **</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-white">{value}</span>
        <span className={`text-sm ${isPositive ? "text-dashboard-success" : "text-red-500"}`}>
          {isPositive ? "+" : ""}{trend}%
        </span>
      </div>
      <p className="text-gray-400 text-sm mt-2">{description} **</p>
    </div>
  );
};

export default StatsCard;