import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchImprovementAreas = async () => {
  const { data, error } = await supabase
    .from('improvement_areas')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

const ImprovementAreasView = () => {
  const { data: areas, isLoading } = useQuery({
    queryKey: ['improvement-areas'],
    queryFn: fetchImprovementAreas,
  });

  if (isLoading) {
    return <div className="text-white">Loading improvement areas...</div>;
  }

  return (
    <Card className="bg-dashboard-card border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Areas for Improvement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-900">
                <TableHead className="text-gray-400">Category</TableHead>
                <TableHead className="text-gray-400">Description</TableHead>
                <TableHead className="text-gray-400">Source</TableHead>
                <TableHead className="text-gray-400">Date Identified</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {areas?.map((area) => (
                <TableRow key={area.id} className="hover:bg-gray-900/50">
                  <TableCell className="text-white">{area.category}</TableCell>
                  <TableCell className="text-white">{area.description}</TableCell>
                  <TableCell className="text-white">
                    {area.source_url ? (
                      <a 
                        href={area.source_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dashboard-accent hover:underline"
                      >
                        Source Link
                      </a>
                    ) : 'N/A'}
                  </TableCell>
                  <TableCell className="text-white">
                    {new Date(area.date_identified).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-white">{area.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImprovementAreasView;