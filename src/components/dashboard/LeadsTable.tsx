import { useQuery } from "@tanstack/react-query";
import { Avatar } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import type { Lead } from "@/types/leads";

const fetchLeads = async (): Promise<Lead[]> => {
  console.log('Starting fetchLeads function...');
  try {
    console.log('Making Supabase request...');
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }
    
    console.log('Supabase response data:', data);
    return data || [];
  } catch (error) {
    console.error('Error in fetchLeads:', error);
    throw error;
  }
};

const LeadsTable = () => {
  const { data: leads, isLoading, error } = useQuery({
    queryKey: ['leads'],
    queryFn: fetchLeads,
    retry: 1,
  });

  console.log('LeadsTable render state:', { leads, isLoading, error });

  if (isLoading) {
    console.log('Table is in loading state');
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-white">Loading leads...</p>
      </div>
    );
  }

  if (error) {
    console.error('Error in component:', error);
    return (
      <div className="bg-dashboard-card rounded-xl p-6">
        <p className="text-red-500">Error loading leads</p>
      </div>
    );
  }

  console.log('Rendering table with leads:', leads);

  return (
    <div className="bg-dashboard-card rounded-xl overflow-hidden">
      <div className="p-4 md:p-6">
        <h2 className="text-white text-lg md:text-xl font-semibold">Recent Business Leads</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-800">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm text-gray-400">Company</th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm text-gray-400">Contact</th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm text-gray-400">Services</th>
                  <th className="px-4 md:px-6 py-3 text-left text-xs md:text-sm text-gray-400">Locations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {leads?.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-900/50">
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Avatar className="h-6 w-6 md:h-8 md:w-8">
                          <img src={lead.company_logo} alt={lead.company_name} />
                        </Avatar>
                        <span className="text-white text-sm md:text-base font-medium">{lead.company_name}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Avatar className="h-6 w-6 md:h-8 md:w-8">
                          <img src={lead.contact_avatar} alt={lead.contact_name} />
                        </Avatar>
                        <span className="text-white text-sm md:text-base font-medium">{lead.contact_name}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs md:text-sm font-medium whitespace-nowrap ${
                        lead.relevant_products > 0 
                          ? "bg-dashboard-success/10 text-dashboard-success" 
                          : "bg-gray-800 text-gray-400"
                      }`}>
                        {lead.relevant_products} Services
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1">
                          <span className="text-white text-sm md:text-base font-medium">{lead.instances}</span>
                          <span className="text-white text-sm md:text-base">Locations</span>
                        </div>
                        <span className="text-gray-400 text-xs">Active Sites</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;