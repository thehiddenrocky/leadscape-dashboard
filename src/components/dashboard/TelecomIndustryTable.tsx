import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchTelecomIndustry = async () => {
  console.log('Fetching telecom industry data...');
  const { data, error } = await supabase
    .from('telecom_industry_analysis')
    .select('*')
    .order('provider', { ascending: true });

  if (error) {
    console.error('Error fetching telecom industry data:', error);
    throw error;
  }

  return data;
};

const TelecomIndustryTable = () => {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['telecom-industry'],
    queryFn: fetchTelecomIndustry,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading telecom industry data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading telecom industry data</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Telecom Industry Analysis</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Provider</TableHead>
              <TableHead className="text-gray-400">Network Reliability</TableHead>
              <TableHead className="text-gray-400">Download Speed</TableHead>
              <TableHead className="text-gray-400">Coverage</TableHead>
              <TableHead className="text-gray-400">Overall Satisfaction</TableHead>
              <TableHead className="text-gray-400">Focus Area</TableHead>
              <TableHead className="text-gray-400">Services</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metrics?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.provider}</TableCell>
                <TableCell className="text-white">{item.network_reliability}%</TableCell>
                <TableCell className="text-white">{item.download_speed} Mbps</TableCell>
                <TableCell className="text-white">{item.coverage_description}</TableCell>
                <TableCell className="text-white">{item.overall_satisfaction}/5</TableCell>
                <TableCell className="text-white">{item.focus_area}</TableCell>
                <TableCell className="text-white">
                  {[
                    item.fixed_broadband && 'Fixed Broadband',
                    item.mobile_broadband && 'Mobile Broadband',
                    item.bundled_offerings && 'Bundled Offerings'
                  ].filter(Boolean).join(', ')}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TelecomIndustryTable;