import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchCustomerService = async () => {
  console.log('Fetching customer service data...');
  const { data, error } = await supabase
    .from('customer_service_metrics')
    .select('*')
    .order('provider', { ascending: true });

  if (error) {
    console.error('Error fetching customer service metrics:', error);
    throw error;
  }

  return data;
};

const CustomerServiceTable = () => {
  const { data: metrics, isLoading, error } = useQuery({
    queryKey: ['customer-service'],
    queryFn: fetchCustomerService,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading customer service data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading customer service data</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Customer Service Metrics</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Provider</TableHead>
              <TableHead className="text-gray-400">Avg Wait Time (min)</TableHead>
              <TableHead className="text-gray-400">Support Channels</TableHead>
              <TableHead className="text-gray-400">Common Issues</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {metrics?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.provider}</TableCell>
                <TableCell className="text-white">{item.avg_wait_time_minutes}</TableCell>
                <TableCell className="text-white">{item.support_channels?.join(', ')}</TableCell>
                <TableCell className="text-white">{item.common_issues?.join(', ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerServiceTable;