import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchNetworkPerformance = async () => {
  console.log('Fetching network performance data...');
  const { data, error } = await supabase
    .from('network_performance_metrics')
    .select('*')
    .order('provider', { ascending: true });

  if (error) {
    console.error('Error fetching network performance:', error);
    throw error;
  }

  return data;
};

const NetworkPerformanceTable = () => {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['network-performance'],
    queryFn: fetchNetworkPerformance,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading network performance data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading network performance data</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Network Performance Metrics</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Provider</TableHead>
              <TableHead className="text-gray-400">Network Reliability (%)</TableHead>
              <TableHead className="text-gray-400">Average Download Speed</TableHead>
              <TableHead className="text-gray-400">Coverage Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metrics?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.provider}</TableCell>
                <TableCell className="text-white">{item.network_reliability}%</TableCell>
                <TableCell className="text-white">{item.average_download_speed} Mbps</TableCell>
                <TableCell className="text-white">{item.coverage_description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default NetworkPerformanceTable;