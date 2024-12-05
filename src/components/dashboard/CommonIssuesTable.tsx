import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchCommonIssues = async () => {
  console.log('Fetching common issues data...');
  const { data, error } = await supabase
    .from('telecom_common_issues')
    .select('*')
    .order('provider', { ascending: true });

  if (error) {
    console.error('Error fetching common issues:', error);
    throw error;
  }

  return data;
};

const CommonIssuesTable = () => {
  const { data: issues, isLoading, error } = useQuery({
    queryKey: ['common-issues'],
    queryFn: fetchCommonIssues,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading common issues data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading common issues data</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Common Issues Analysis</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400 whitespace-normal min-w-[120px]">Provider</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[150px]">Issue Type</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[100px]">Frequency</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[150px]">Resolution Time (hours)</TableHead>
              <TableHead className="text-gray-400 whitespace-normal min-w-[100px]">Impact Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {issues?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white font-medium whitespace-normal">{item.provider}</TableCell>
                <TableCell className="text-white whitespace-normal">
                  {item.issue_type.replace(/_/g, ' ')}
                </TableCell>
                <TableCell className="text-white whitespace-normal">
                  <span className={`
                    px-2 py-1 rounded text-sm
                    ${item.frequency === 'High' ? 'bg-red-500/20 text-red-300' : 
                      item.frequency === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 
                      'bg-green-500/20 text-green-300'}
                  `}>
                    {item.frequency}
                  </span>
                </TableCell>
                <TableCell className="text-white whitespace-normal">
                  {item.resolution_time_hours} hours
                </TableCell>
                <TableCell className="text-white whitespace-normal">
                  <span className={`
                    px-2 py-1 rounded text-sm
                    ${item.impact_level === 'High' ? 'bg-red-500/20 text-red-300' : 
                      item.impact_level === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' : 
                      'bg-green-500/20 text-green-300'}
                  `}>
                    {item.impact_level}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CommonIssuesTable;