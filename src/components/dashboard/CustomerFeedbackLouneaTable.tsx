import { useQuery } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";

const fetchCustomerFeedbackLounea = async () => {
  console.log('Fetching Lounea customer feedback data...');
  const { data, error } = await supabase
    .from('customer_feedback_lounea')
    .select('*')
    .order('category', { ascending: true });

  if (error) {
    console.error('Error fetching Lounea customer feedback:', error);
    throw error;
  }

  return data;
};

const CustomerFeedbackLouneaTable = () => {
  const { data: feedback, isLoading, error } = useQuery({
    queryKey: ['customer-feedback-lounea'],
    queryFn: fetchCustomerFeedbackLounea,
  });

  if (isLoading) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading Lounea customer feedback...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading Lounea customer feedback</p>
      </div>
    );
  }

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-4">Lounea Customer Feedback Analysis</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-900">
              <TableHead className="text-gray-400">Category</TableHead>
              <TableHead className="text-gray-400">Subcategory</TableHead>
              <TableHead className="text-gray-400">Key Point</TableHead>
              <TableHead className="text-gray-400">Additional Details</TableHead>
              <TableHead className="text-gray-400">Reference Links</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {feedback?.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-900/50">
                <TableCell className="text-white font-medium">
                  {item.category}
                </TableCell>
                <TableCell className="text-white">
                  {item.subcategory}
                </TableCell>
                <TableCell className="text-white">
                  {item.key_point}
                </TableCell>
                <TableCell className="text-white">
                  {item.additional_details}
                </TableCell>
                <TableCell className="text-white">
                  {item.reference_links}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerFeedbackLouneaTable;