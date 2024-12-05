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
      <div className="overflow-x-auto scrollbar-container">
        <style jsx>{`
          .scrollbar-container::-webkit-scrollbar {
            height: 12px;
            background-color: #2d2d2d;
          }
          .scrollbar-container::-webkit-scrollbar-thumb {
            background-color: #FF69B4;
            border-radius: 6px;
            border: 2px solid #2d2d2d;
          }
          .scrollbar-container::-webkit-scrollbar-thumb:hover {
            background-color: #ff4da6;
          }
          .scrollbar-container::-webkit-scrollbar-track {
            background-color: #2d2d2d;
            border-radius: 6px;
          }
        `}</style>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400 whitespace-normal min-w-[120px] sticky left-0 bg-gray-900 z-10">Provider</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[100px]">Network Reliability</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[100px]">Download Speed</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[200px]">Coverage</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[100px]">Overall Satisfaction</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[120px]">Focus Area</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[120px]">Services</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metrics?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white font-medium whitespace-normal min-w-[120px] sticky left-0 bg-dashboard-card z-10">
                  {item.provider}
                </TableCell>
                <TableCell className="text-white whitespace-normal min-w-[100px]">
                  {item.network_reliability}%
                </TableCell>
                <TableCell className="text-white whitespace-normal min-w-[100px]">
                  {item.download_speed} Mbps
                </TableCell>
                <TableCell className="text-white whitespace-normal min-w-[200px]">
                  <div className="space-y-1">
                    <p>{item.coverage_description}</p>
                    <div className="text-sm text-gray-400">
                      <p>Urban: {item.urban_coverage}%</p>
                      <p>Suburban: {item.suburban_coverage}%</p>
                      <p>Rural: {item.rural_coverage}%</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-white whitespace-normal min-w-[100px]">
                  {item.overall_satisfaction}/5
                </TableCell>
                <TableCell className="text-white whitespace-normal min-w-[120px]">
                  {item.focus_area}
                </TableCell>
                <TableCell className="text-white whitespace-normal min-w-[120px]">
                  <div className="space-y-1">
                    {item.fixed_broadband && <p>Fixed Broadband</p>}
                    {item.mobile_broadband && <p>Mobile Broadband</p>}
                    {item.bundled_offerings && <p>Bundled Offerings</p>}
                  </div>
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