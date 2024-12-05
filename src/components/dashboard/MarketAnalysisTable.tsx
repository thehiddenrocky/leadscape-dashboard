import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchMarketAnalysis = async () => {
  console.log('Fetching market analysis data...');
  const { data, error } = await supabase
    .from('market_analysis')
    .select('*')
    .order('category', { ascending: true });

  if (error) {
    console.error('Error fetching market analysis:', error);
    throw error;
  }

  return data;
};

const MarketAnalysisTable = () => {
  const { data: analysis, isLoading, error } = useQuery({
    queryKey: ['market-analysis'],
    queryFn: fetchMarketAnalysis,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading market analysis...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading market analysis</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Market Analysis</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Category</TableHead>
              <TableHead className="text-gray-400">Factor</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Impact</TableHead>
              <TableHead className="text-gray-400">Trend</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {analysis?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.category}</TableCell>
                <TableCell className="text-white">{item.factor}</TableCell>
                <TableCell className="text-white">{item.current_status}</TableCell>
                <TableCell className="text-white">{item.impact_level}</TableCell>
                <TableCell className="text-white">{item.trend}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MarketAnalysisTable;