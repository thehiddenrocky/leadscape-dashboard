import Layout from "@/components/dashboard/Layout";
import AlertBanner from "@/components/dashboard/AlertBanner";
import StatsCard from "@/components/dashboard/StatsCard";
import LeadsTable from "@/components/dashboard/LeadsTable";

const Index = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default Index;