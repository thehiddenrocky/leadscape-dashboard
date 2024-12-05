import { Avatar } from "@/components/ui/avatar";

interface Lead {
  id: string;
  company: {
    name: string;
    logo: string;
  };
  contact: {
    name: string;
    avatar: string;
  };
  relevantProducts: number;
  instances: number;
}

const mockLeads: Lead[] = [
  {
    id: "1",
    company: {
      name: "Salo IoT Campus",
      logo: "/placeholder.svg",
    },
    contact: {
      name: "Matti Virtanen",
      avatar: "/placeholder.svg",
    },
    relevantProducts: 4,
    instances: 6,
  },
  {
    id: "2",
    company: {
      name: "Forssa Business Park",
      logo: "/placeholder.svg",
    },
    contact: {
      name: "Laura Korhonen",
      avatar: "/placeholder.svg",
    },
    relevantProducts: 2,
    instances: 3,
  },
  {
    id: "3",
    company: {
      name: "Hämeenlinna Tech Hub",
      logo: "/placeholder.svg",
    },
    contact: {
      name: "Mikko Järvinen",
      avatar: "/placeholder.svg",
    },
    relevantProducts: 3,
    instances: 5,
  }
];

const LeadsTable = () => {
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
                {mockLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-900/50">
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Avatar className="h-6 w-6 md:h-8 md:w-8">
                          <img src={lead.company.logo} alt={lead.company.name} />
                        </Avatar>
                        <span className="text-white text-sm md:text-base">{lead.company.name}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Avatar className="h-6 w-6 md:h-8 md:w-8">
                          <img src={lead.contact.avatar} alt={lead.contact.name} />
                        </Avatar>
                        <span className="text-white text-sm md:text-base">{lead.contact.name}</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <span className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm ${
                        lead.relevantProducts > 0 
                          ? "bg-dashboard-success/10 text-dashboard-success" 
                          : "bg-gray-800 text-gray-400"
                      }`}>
                        {lead.relevantProducts > 0 
                          ? `${lead.relevantProducts} Services` 
                          : "No Services"}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-3">
                      <span className="text-white text-sm md:text-base">{lead.instances} Locations</span>
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