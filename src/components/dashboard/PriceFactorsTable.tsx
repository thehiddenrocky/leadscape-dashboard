import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchPriceFactors = async () => {
  console.log('Fetching price factors data...');
  const { data, error } = await supabase
    .from('price_influence_factors')
    .select('*')
    .order('factor_type', { ascending: true });

  if (error) {
    console.error('Error fetching price factors:', error);
    throw error;
  }

  return data;
};

const PriceFactorsTable = () => {
  const { data: factors, isLoading, error } = useQuery({
    queryKey: ['price-factors'],
    queryFn: fetchPriceFactors,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading price factors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading price factors</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Price Influence Factors</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Factor Type</TableHead>
              <TableHead className="text-gray-400">Factor</TableHead>
              <TableHead className="text-gray-400">Primary Impact</TableHead>
              <TableHead className="text-gray-400">Urban Effect</TableHead>
              <TableHead className="text-gray-400">Rural Effect</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {factors?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.factor_type}</TableCell>
                <TableCell className="text-white">{item.factor}</TableCell>
                <TableCell className="text-white">{item.primary_impact}</TableCell>
                <TableCell className="text-white">{item.urban_effect}</TableCell>
                <TableCell className="text-white">{item.rural_effect}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PriceFactorsTable;