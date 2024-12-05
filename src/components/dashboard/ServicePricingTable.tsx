import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchServicePricing = async () => {
  console.log('Fetching service pricing data...');
  const { data, error } = await supabase
    .from('service_pricing')
    .select('*')
    .order('provider', { ascending: true });

  if (error) {
    console.error('Error fetching service pricing:', error);
    throw error;
  }

  return data;
};

const ServicePricingTable = () => {
  const { data: pricing, isLoading, error } = useQuery({
    queryKey: ['service-pricing'],
    queryFn: fetchServicePricing,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading pricing data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading pricing data</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Service Pricing</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Provider</TableHead>
              <TableHead className="text-gray-400">Service Type</TableHead>
              <TableHead className="text-gray-400">Speed (Mbps)</TableHead>
              <TableHead className="text-gray-400">Price (EUR)</TableHead>
              <TableHead className="text-gray-400">Package Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pricing?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.provider}</TableCell>
                <TableCell className="text-white">{item.service_type}</TableCell>
                <TableCell className="text-white">{item.speed_mbps}</TableCell>
                <TableCell className="text-white">€{item.monthly_price_eur}</TableCell>
                <TableCell className="text-white">{item.package_type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ServicePricingTable;