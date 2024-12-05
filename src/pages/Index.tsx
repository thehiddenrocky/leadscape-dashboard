import { useState } from "react";
import Layout from "@/components/dashboard/Layout";
import AlertBanner from "@/components/dashboard/AlertBanner";
import StatsCard from "@/components/dashboard/StatsCard";
import LeadsTable from "@/components/dashboard/LeadsTable";
import ServicePricingTable from "@/components/dashboard/ServicePricingTable";
import MarketAnalysisTable from "@/components/dashboard/MarketAnalysisTable";
import PriceFactorsTable from "@/components/dashboard/PriceFactorsTable";
import ServiceQualityTable from "@/components/dashboard/ServiceQualityTable";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeView, setActiveView] = useState("overview");

  const renderContent = () => {
    switch (activeView) {
      case "service-pricing":
        return <ServicePricingTable />;
      case "market-analysis":
        return <MarketAnalysisTable />;
      case "price-factors":
        return <PriceFactorsTable />;
      case "leads":
        return <LeadsTable />;
      case "quality-metrics":
        return <ServiceQualityTable />;
      case "reports":
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Reports</h2>
            <div className="space-y-4">
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Monthly Performance Report</h3>
                <p className="text-gray-400">Network performance and service quality metrics for the current month.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Customer Satisfaction Analysis</h3>
                <p className="text-gray-400">Detailed analysis of customer feedback and satisfaction trends.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Market Competition Overview</h3>
                <p className="text-gray-400">Comparative analysis of market position and competitor services.</p>
              </div>
            </div>
          </Card>
        );
      case "projects":
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Active Projects</h2>
            <div className="space-y-4">
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Network Expansion - Turku Region</h3>
                <p className="text-gray-400">Fiber network expansion project in Southwest Finland.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">5G Infrastructure Update</h3>
                <p className="text-gray-400">Upgrading existing infrastructure to support 5G services.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Business Service Enhancement</h3>
                <p className="text-gray-400">Improving service offerings for enterprise customers.</p>
              </div>
            </div>
          </Card>
        );
      case "support":
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Support Center</h2>
            <div className="space-y-4">
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Technical Support</h3>
                <p className="text-gray-400">24/7 technical assistance for network and service issues.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Customer Service</h3>
                <p className="text-gray-400">General inquiries and customer support services.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Documentation</h3>
                <p className="text-gray-400">Access technical documentation and user guides.</p>
              </div>
            </div>
          </Card>
        );
      case "alerts":
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">System Alerts</h2>
            <div className="space-y-4">
              <AlertBanner 
                title="Network Maintenance Scheduled"
                message="Routine maintenance planned for next week in Helsinki region"
              />
              <AlertBanner 
                title="New Service Area"
                message="Network coverage expanded in Tampere industrial district"
              />
              <AlertBanner 
                title="System Update"
                message="Platform updates scheduled for implementation this weekend"
              />
            </div>
          </Card>
        );
      case "settings":
        return (
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">System Settings</h2>
            <div className="space-y-4">
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">User Preferences</h3>
                <p className="text-gray-400">Customize your dashboard experience and notifications.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Account Security</h3>
                <p className="text-gray-400">Manage authentication and security settings.</p>
              </div>
              <div className="p-4 bg-dashboard-card rounded-lg">
                <h3 className="font-semibold mb-2 text-white">Data Management</h3>
                <p className="text-gray-400">Configure data retention and export options.</p>
              </div>
            </div>
          </Card>
        );
      default:
        return (
          <>
            <AlertBanner 
              title="Alert: 3 New Business Opportunities in Forssa Region"
              message="Increased fiber connectivity demand detected in Southwest Finland"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <StatsCard
                title="Network Coverage Growth"
                value="42%"
                trend={12}
                description="Fiber Network Coverage Increase in Service Areas"
              />
              <StatsCard
                title="Service Adoption"
                value="28%"
                trend={8}
                description="New Business Fiber Service Subscriptions This Quarter"
              />
            </div>

            <LeadsTable />
          </>
        );
    }
  };

  return (
    <Layout activeView={activeView} onNavigate={setActiveView}>
      {renderContent()}
    </Layout>
  );
};

export default Index;