import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchServiceQuality = async () => {
  console.log('Fetching service quality data...');
  const { data, error } = await supabase
    .from('service_quality_metrics')
    .select('*')
    .order('provider', { ascending: true });

  if (error) {
    console.error('Error fetching service quality:', error);
    throw error;
  }

  return data;
};

const ServiceQualityTable = () => {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['service-quality'],
    queryFn: fetchServiceQuality,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading service quality data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading service quality data</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Service Quality Metrics</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Provider</TableHead>
              <TableHead className="text-gray-400">Download Speed (Mbps)</TableHead>
              <TableHead className="text-gray-400">Upload Speed (Mbps)</TableHead>
              <TableHead className="text-gray-400">Latency (ms)</TableHead>
              <TableHead className="text-gray-400">Stability (%)</TableHead>
              <TableHead className="text-gray-400">Coverage (%)</TableHead>
              <TableHead className="text-gray-400">Location Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metrics?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.provider}</TableCell>
                <TableCell className="text-white">{item.download_speed_mbps}</TableCell>
                <TableCell className="text-white">{item.upload_speed_mbps}</TableCell>
                <TableCell className="text-white">{item.latency_ms}</TableCell>
                <TableCell className="text-white">{item.connection_stability_percent}%</TableCell>
                <TableCell className="text-white">{item.network_coverage_percent}%</TableCell>
                <TableCell className="text-white">{item.location_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceQualityTable;