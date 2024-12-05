import { useState } from "react";
import Layout from "@/components/dashboard/Layout";
import AlertBanner from "@/components/dashboard/AlertBanner";
import StatsCard from "@/components/dashboard/StatsCard";
import LeadsTable from "@/components/dashboard/LeadsTable";
import ServicePricingTable from "@/components/dashboard/ServicePricingTable";
import MarketAnalysisTable from "@/components/dashboard/MarketAnalysisTable";
import PriceFactorsTable from "@/components/dashboard/PriceFactorsTable";
import ServiceQualityTable from "@/components/dashboard/ServiceQualityTable";
import ConsumerPerceptionsTable from "@/components/dashboard/ConsumerPerceptionsTable";
import CustomerServiceTable from "@/components/dashboard/CustomerServiceTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        return (
          <Tabs defaultValue="service-quality" className="w-full">
            <TabsList className="bg-dashboard-card mb-6">
              <TabsTrigger value="service-quality">Service Quality</TabsTrigger>
              <TabsTrigger value="consumer-perceptions">Consumer Perceptions</TabsTrigger>
              <TabsTrigger value="customer-service">Customer Service</TabsTrigger>
            </TabsList>
            <TabsContent value="service-quality">
              <ServiceQualityTable />
            </TabsContent>
            <TabsContent value="consumer-perceptions">
              <ConsumerPerceptionsTable />
            </TabsContent>
            <TabsContent value="customer-service">
              <CustomerServiceTable />
            </TabsContent>
          </Tabs>
        );
      case "reports":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Reports</h2>
            <p className="text-muted-foreground">View and analyze detailed reports.</p>
          </div>
        );
      case "projects":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <p className="text-muted-foreground">Manage your ongoing projects.</p>
          </div>
        );
      case "support":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Support</h2>
            <p className="text-muted-foreground">Get help and support.</p>
          </div>
        );
      case "alerts":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Alerts</h2>
            <p className="text-muted-foreground">View system alerts and notifications.</p>
          </div>
        );
      case "settings":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Settings</h2>
            <p className="text-muted-foreground">Configure system settings.</p>
          </div>
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