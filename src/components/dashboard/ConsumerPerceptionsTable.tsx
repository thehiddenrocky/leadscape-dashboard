import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchConsumerPerceptions = async () => {
  console.log('Fetching consumer perceptions data...');
  const { data, error } = await supabase
    .from('consumer_perceptions')
    .select('*')
    .order('provider', { ascending: true });

  if (error) {
    console.error('Error fetching consumer perceptions:', error);
    throw error;
  }

  return data;
};

const ConsumerPerceptionsTable = () => {
  const { data: perceptions, isLoading, error } = useQuery({
    queryKey: ['consumer-perceptions'],
    queryFn: fetchConsumerPerceptions,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading consumer perceptions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading consumer perceptions</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Consumer Perceptions</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Provider</TableHead>
              <TableHead className="text-gray-400">Category</TableHead>
              <TableHead className="text-gray-400">Positive Aspects</TableHead>
              <TableHead className="text-gray-400">Improvement Areas</TableHead>
              <TableHead className="text-gray-400">Satisfaction Score</TableHead>
              <TableHead className="text-gray-400">Survey Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {perceptions?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white">{item.provider}</TableCell>
                <TableCell className="text-white">{item.category}</TableCell>
                <TableCell className="text-white">{item.positive_aspects?.join(', ')}</TableCell>
                <TableCell className="text-white">{item.improvement_areas?.join(', ')}</TableCell>
                <TableCell className="text-white">{item.satisfaction_score}/10</TableCell>
                <TableCell className="text-white">{new Date(item.survey_date).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ConsumerPerceptionsTable;